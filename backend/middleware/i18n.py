"""
i18n Middleware for FastAPI
Detects and sets the locale for each request.
"""
from fastapi import Request
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.types import ASGIApp
from app.utils.i18n import get_locale_from_accept_language, DEFAULT_LANGUAGE
import logging

logger = logging.getLogger(__name__)


class I18nMiddleware(BaseHTTPMiddleware):
    """
    Middleware to detect and set locale for each request.
    
    Detection order:
    1. Query parameter: ?lang=fa/en/de
    2. Custom header: X-Language
    3. Accept-Language header
    4. Default to Persian (fa)
    """
    
    def __init__(self, app: ASGIApp):
        super().__init__(app)
    
    async def dispatch(self, request: Request, call_next):
        """Process the request and detect locale."""
        
        # 1. Check query parameter
        locale = request.query_params.get("lang")
        
        # 2. Check custom header
        if not locale:
            locale = request.headers.get("X-Language")
        
        # 3. Check Accept-Language header
        if not locale:
            accept_language = request.headers.get("Accept-Language")
            locale = get_locale_from_accept_language(accept_language)
        
        # 4. Default fallback
        if not locale:
            locale = DEFAULT_LANGUAGE
        
        # Store locale in request state for use in endpoints
        request.state.locale = locale
        
        # Log the detected locale (debug mode)
        logger.debug(f"Request locale detected: {locale} for {request.url.path}")
        
        # Continue processing the request
        response = await call_next(request)
        
        # Add locale to response headers
        response.headers["Content-Language"] = locale
        
        return response


def get_request_locale(request: Request) -> str:
    """
    Helper function to get locale from request state.
    
    Args:
        request: FastAPI Request object
        
    Returns:
        Locale string (fa/en/de)
    """
    return getattr(request.state, "locale", DEFAULT_LANGUAGE)
