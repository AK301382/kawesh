# 🌐 Translation Guide - Kawesh i18n System

## Overview
This project uses **i18next** for comprehensive multilingual support across 3 languages:
- **Persian (fa)** - Default language, RTL
- **English (en)** - LTR
- **German (de)** - LTR

---

## 📁 File Structure

```
/frontend/src/locales/
├── fa/ (Persian)
│   ├── pages/
│   │   ├── home.json
│   │   ├── services.json
│   │   ├── portfolio.json
│   │   ├── contact.json
│   │   ├── about.json
│   │   └── buildSite.json
│   ├── sections/
│   │   ├── header.json
│   │   ├── footer.json
│   │   ├── testimonials.json
│   │   ├── whyUs.json
│   │   └── process.json
│   └── components/
│       ├── common.json
│       ├── auth.json
│       ├── theme.json
│       ├── language.json
│       └── dashboard.json
├── en/ (same structure)
└── de/ (same structure)
```

---

## 🚀 Usage Examples

### Basic Usage in Components

```javascript
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  // Specify namespace(s)
  const { t } = useTranslation(['home', 'common']);
  
  return (
    <div>
      <h1>{t('home:hero.title')}</h1>
      <button>{t('common:buttons.submit')}</button>
    </div>
  );
};
```

### Multiple Namespaces

```javascript
const { t } = useTranslation(['header', 'theme', 'common']);

// Use different namespaces
<span>{t('header:home')}</span>
<span>{t('theme:dark')}</span>
<span>{t('common:loading')}</span>
```

### With Interpolation

```javascript
// Translation file: { "welcome": "Welcome, {{name}}!" }
<h1>{t('home:welcome', { name: user.name })}</h1>
```

### Current Language Detection

```javascript
const { i18n } = useTranslation();
const currentLang = i18n.language; // 'fa', 'en', or 'de'
const isRTL = currentLang === 'fa';
```

---

## ✍️ Adding New Translation Keys

### Step 1: Add to All Language Files

Add the same key structure to **fa**, **en**, and **de** files:

**fa/pages/home.json:**
```json
{
  "hero": {
    "newKey": "متن فارسی"
  }
}
```

**en/pages/home.json:**
```json
{
  "hero": {
    "newKey": "English text"
  }
}
```

**de/pages/home.json:**
```json
{
  "hero": {
    "newKey": "Deutscher Text"
  }
}
```

### Step 2: Use in Component

```javascript
const { t } = useTranslation(['home']);
<p>{t('home:hero.newKey')}</p>
```

---

## 🆕 Adding a New Language

### 1. Create Directory Structure

```bash
mkdir -p /app/frontend/src/locales/fr/pages
mkdir -p /app/frontend/src/locales/fr/sections
mkdir -p /app/frontend/src/locales/fr/components
```

### 2. Copy and Translate Files

Copy all JSON files from `en/` or `fa/` and translate them to the new language.

### 3. Update i18n.js

```javascript
// Import French translations
import frHomeTranslations from './locales/fr/pages/home.json';
// ... import all other files

// Add to resources
const resources = {
  fa: { /* ... */ },
  en: { /* ... */ },
  de: { /* ... */ },
  fr: {  // New language
    home: frHomeTranslations,
    // ... add all namespaces
  }
};

// Update supported languages
supportedLngs: ['fa', 'en', 'de', 'fr'],
```

### 4. Update Language Switcher

```javascript
const languages = [
  { code: 'fa', name: 'فارسی', flag: '🇮🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' } // New language
];
```

---

## 📝 Naming Conventions

### File Names
- Use **kebab-case**: `build-site.json`, `why-us.json`
- Be descriptive: `portfolio.json` not `port.json`

### Translation Keys
- Use **camelCase**: `heroTitle`, `submitButton`
- Be specific: `loginButton` not `btn`
- Group related keys:
  ```json
  {
    "form": {
      "name": "Name",
      "email": "Email",
      "submit": "Submit"
    }
  }
  ```

### Namespace Usage
- **Pages**: `home`, `services`, `contact`
- **Sections**: `header`, `footer`, `testimonials`
- **Components**: `common`, `auth`, `theme`

---

## 🧪 Testing Translations

### 1. Check All Languages
```bash
# Switch to each language and verify:
- Persian (fa) - Check RTL layout
- English (en) - Check LTR layout
- German (de) - Check LTR layout
```

### 2. Test Missing Keys
- Browser console will show warnings for missing keys
- Missing keys will fallback to Persian (fa)

### 3. Test Language Persistence
- Switch language
- Refresh page
- Language should persist (stored in localStorage)

---

## 🔍 SEO Integration

### Using SEO Component

```javascript
import SEO from '../components/common/SEO';
import { useTranslation } from 'react-i18next';

const MyPage = () => {
  const { t } = useTranslation(['services']);
  
  return (
    <>
      <SEO
        title={t('services:seo.title')}
        description={t('services:seo.description')}
        keywords={t('services:seo.keywords')}
      />
      {/* Page content */}
    </>
  );
};
```

### SEO Fields in Translation Files

```json
{
  "seo": {
    "title": "Page Title - Kawesh",
    "description": "Page meta description for SEO",
    "keywords": "keyword1, keyword2, keyword3"
  }
}
```

---

## 🎯 Best Practices

### ✅ DO:
- **Always use namespaces**: `t('home:hero.title')`
- **Group related translations**: Use nested objects
- **Keep translations consistent** across all languages
- **Test in all languages** before deployment
- **Use meaningful key names**: `submitButton` not `btn1`
- **Add SEO translations** for every page

### ❌ DON'T:
- **Hardcode strings**: Use translations instead
- **Skip languages**: Add keys to all 3 languages
- **Use generic names**: Avoid `text1`, `title2`
- **Forget RTL**: Test Persian layout
- **Ignore missing keys**: Check console warnings

---

## 🐛 Common Issues & Solutions

### Issue 1: Translation Not Showing
**Problem:** `t('home:title')` shows key instead of translation

**Solutions:**
1. Check namespace is imported: `useTranslation(['home'])`
2. Verify key exists in JSON file
3. Check console for errors
4. Ensure i18n.js imports the file

### Issue 2: Wrong Direction (RTL/LTR)
**Problem:** Persian text showing left-aligned

**Solutions:**
1. Check `i18n.js` has language change listener
2. Verify `dir` attribute on `<html>` element
3. CSS should use logical properties when possible

### Issue 3: Language Not Persisting
**Problem:** Language resets on page refresh

**Solutions:**
1. Check localStorage: `localStorage.getItem('i18nextLng')`
2. Verify detection config in `i18n.js`
3. Browser might block localStorage

---

## 📊 Translation Coverage Checklist

Before marking a feature complete:

- [ ] All text uses translations (no hardcoded strings)
- [ ] Keys added to all 3 languages (fa, en, de)
- [ ] Tested in all 3 languages
- [ ] RTL layout works for Persian
- [ ] SEO meta tags are translated
- [ ] Console shows no missing key warnings
- [ ] Language switcher works
- [ ] Language persists after refresh

---

## 🔗 Useful Commands

```bash
# Find hardcoded strings in components
grep -rn "\"[A-Z]" /app/frontend/src/features --include="*.jsx"

# Count translation files
find /app/frontend/src/locales -name "*.json" | wc -l

# Check for missing translations (compare line counts)
wc -l /app/frontend/src/locales/*/pages/home.json
```

---

## 📚 Resources

- **i18next Documentation**: https://www.i18next.com/
- **react-i18next**: https://react.i18next.com/
- **RTL Styling Guide**: https://rtlstyling.com/

---

## 👨‍💻 Developer Notes

### Current Implementation Status
- ✅ i18n configuration complete
- ✅ All translation files created
- ✅ Language switcher implemented
- ✅ SEO component integrated
- ⚠️ Some pages have hardcoded strings (needs migration)

### Priority Fixes Needed
1. Migrate hardcoded strings in ServicesPage
2. Migrate hardcoded strings in ContactPage  
3. Migrate hardcoded strings in AdminLogin
4. Add admin-specific translations

---

**Last Updated:** December 31, 2025  
**Maintained By:** Kawesh Development Team  
**Version:** 2.0.0
