"""
i18n utilities for backend translation support.
Supports Persian (fa), English (en), and German (de).
"""
import json
import os
from pathlib import Path
from typing import Optional, Dict, Any
from functools import lru_cache
import logging

logger = logging.getLogger(__name__)

# Base directory for translations
LOCALES_DIR = Path(__file__).parent.parent.parent / "locales"

# Supported languages
SUPPORTED_LANGUAGES = ["fa", "en", "de"]
DEFAULT_LANGUAGE = "fa"

# Cache for loaded translations
_translations_cache: Dict[str, Dict[str, Any]] = {}


def load_translations(locale: str) -> Dict[str, Any]:
    """
    Load all translation files for a given locale.
    
    Args:
        locale: Language code (fa, en, de)
        
    Returns:
        Dictionary containing all translations
    """
    if locale not in SUPPORTED_LANGUAGES:
        logger.warning(f"Unsupported locale '{locale}', falling back to '{DEFAULT_LANGUAGE}'")
        locale = DEFAULT_LANGUAGE
    
    # Check cache first
    if locale in _translations_cache:
        return _translations_cache[locale]
    
    translations = {}
    locale_dir = LOCALES_DIR / locale
    
    if not locale_dir.exists():
        logger.error(f"Locale directory not found: {locale_dir}")
        return {}
    
    # Load all JSON files in the locale directory
    for json_file in locale_dir.glob("*.json"):
        namespace = json_file.stem
        try:
            with open(json_file, "r", encoding="utf-8") as f:
                translations[namespace] = json.load(f)
        except Exception as e:
            logger.error(f"Error loading translation file {json_file}: {e}")
    
    # Cache the translations
    _translations_cache[locale] = translations
    return translations


def translate(key: str, locale: str = DEFAULT_LANGUAGE, **kwargs) -> str:
    """
    Get translated string for a given key.
    
    Args:
        key: Translation key in format 'namespace.section.key' (e.g., 'errors.auth.invalid_credentials')
        locale: Language code (fa, en, de)
        **kwargs: Variables for string interpolation
        
    Returns:
        Translated string with variables interpolated
        
    Example:
        translate('errors.auth.invalid_credentials', locale='en')
        translate('validation.min_length', locale='de', field='Password', min=8)
    """
    # Load translations for the locale
    translations = load_translations(locale)
    
    # Parse the key (namespace.section.key)
    parts = key.split(".")
    if len(parts) < 2:
        logger.warning(f"Invalid translation key format: {key}")
        return key
    
    namespace = parts[0]
    path = parts[1:]
    
    # Navigate through the translation structure
    value = translations.get(namespace, {})
    for part in path:
        if isinstance(value, dict):
            value = value.get(part)
        else:
            value = None
            break
    
    # If translation not found, try default language
    if value is None and locale != DEFAULT_LANGUAGE:
        logger.warning(f"Translation not found for '{key}' in '{locale}', trying default")
        return translate(key, locale=DEFAULT_LANGUAGE, **kwargs)
    
    # If still not found, return the key itself
    if value is None:
        logger.warning(f"Translation not found for '{key}' in any locale")
        return key
    
    # Interpolate variables
    if kwargs and isinstance(value, str):
        try:
            value = value.format(**kwargs)
        except KeyError as e:
            logger.warning(f"Missing variable for interpolation: {e}")
    
    return str(value)


def get_locale_from_accept_language(accept_language: Optional[str]) -> str:
    """
    Extract locale from Accept-Language header.
    
    Args:
        accept_language: Accept-Language header value
        
    Returns:
        Detected locale or default language
        
    Example:
        'fa,en;q=0.9,de;q=0.8' -> 'fa'
        'en-US,en;q=0.9' -> 'en'
    """
    if not accept_language:
        return DEFAULT_LANGUAGE
    
    # Parse Accept-Language header
    languages = []
    for item in accept_language.split(","):
        item = item.strip()
        if ";" in item:
            lang, q = item.split(";")
            try:
                quality = float(q.split("=")[1])
            except (ValueError, IndexError):
                quality = 1.0
        else:
            lang = item
            quality = 1.0
        
        # Extract base language code (e.g., 'en' from 'en-US')
        lang_code = lang.split("-")[0].strip().lower()
        if lang_code in SUPPORTED_LANGUAGES:
            languages.append((lang_code, quality))
    
    # Sort by quality and return the best match
    if languages:
        languages.sort(key=lambda x: x[1], reverse=True)
        return languages[0][0]
    
    return DEFAULT_LANGUAGE


def format_error_response(error_key: str, locale: str = DEFAULT_LANGUAGE, status_code: int = 400, **kwargs) -> dict:
    """
    Format a standardized error response.
    
    Args:
        error_key: Translation key for the error
        locale: Language code
        status_code: HTTP status code
        **kwargs: Variables for string interpolation
        
    Returns:
        Dictionary with error details
    """
    message = translate(error_key, locale=locale, **kwargs)
    return {
        "detail": message,
        "status_code": status_code,
        "error_key": error_key
    }


def format_success_response(message_key: str, locale: str = DEFAULT_LANGUAGE, data: Any = None, **kwargs) -> dict:
    """
    Format a standardized success response.
    
    Args:
        message_key: Translation key for the success message
        locale: Language code
        data: Optional data to include in response
        **kwargs: Variables for string interpolation
        
    Returns:
        Dictionary with success details
    """
    message = translate(message_key, locale=locale, **kwargs)
    response = {
        "message": message,
        "success": True
    }
    if data is not None:
        response["data"] = data
    return response


def clear_translations_cache():
    """Clear the translations cache. Useful for development/testing."""
    global _translations_cache
    _translations_cache = {}
    logger.info("Translations cache cleared")
