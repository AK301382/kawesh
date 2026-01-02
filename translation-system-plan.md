# Kawesh Project - i18n Implementation Plan

## 🎯 Overview
Implementation plan for multilingual system supporting **Persian (fa - default)**, **English (en)**, and **German (de)** across frontend and backend.

---

## 📊 Current State

### ✅ Existing Setup:
- **Frontend:** i18next installed, basic config exists, `/locales/fa/en/de` folders created
- **RTL Support:** Already implemented for Persian
- **Issue:** All translations in single `translation.json` per language (monolithic)

### ❌ What's Missing:
1. **Frontend:** No granular file structure, no visible language switcher, incomplete German translations
2. **Backend:** No i18n system at all - all messages hardcoded
3. **SEO:** Meta tags not localized dynamically

---

## 🎯 Technical Decisions

| Aspect | Decision |
|--------|----------|
| **Frontend Library** | i18next + react-i18next (already installed) |
| **Backend Library** | python-i18n or custom JSON-based solution |
| **File Format** | JSON (easy editing, compatibility) |
| **Structure** | Namespace-based: `pages/`, `sections/`, `components/` |
| **Locale Detection** | Frontend: localStorage + navigator; Backend: Accept-Language header |
| **Fallback** | Always default to Persian (fa) |
| **URL Strategy** | No language in path - use language switcher only |

---

## 📋 PHASE 1: Frontend Translation Restructuring

### Goals:
- Split monolithic translation files into organized namespaces
- Update i18n configuration to support multiple files
- Complete all German translations

### Step 1.1: Audit Current Translations
**Action:** View existing translation files to understand structure
```bash
# Files to check:
/app/frontend/src/i18n.js
/app/frontend/public/locales/fa/translation.json
/app/frontend/public/locales/en/translation.json
/app/frontend/public/locales/de/translation.json
```

### Step 1.2: Create New Directory Structure
**Action:** Create organized folder structure for all 3 languages
```
/app/frontend/public/locales/
├── fa/
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
│   │   ├── hero.json
│   │   └── seo.json
│   └── components/
│       ├── forms.json
│       ├── auth.json
│       └── common.json
├── en/ (same structure)
└── de/ (same structure)
```

### Step 1.3: Split Translation Content
**Action:** Extract keys from monolithic `translation.json` and distribute to new files
- Group related keys together (e.g., all home page content → `pages/home.json`)
- Maintain exact key values - only reorganize structure
- Do this for all 3 languages simultaneously

### Step 1.4: Update i18n Configuration
**Action:** Modify `/app/frontend/src/i18n.js` to load namespaced resources

**Key changes:**
```javascript
// Add namespace support
ns: ['pages/home', 'pages/services', 'sections/header', 'components/common'],
defaultNS: 'pages/home',

// Backend configuration for loading multiple files
backend: {
  loadPath: '/locales/{{lng}}/{{ns}}.json',
}
```

### Step 1.5: Update Component Imports
**Action:** Update all React components to use new namespace structure

**Pattern change:**
```javascript
// OLD: t('hero.title')
// NEW: t('sections/hero:title')
```

**Files likely to update:**
- Header components
- Page components (Home, Services, Portfolio, Contact, About, BuildSite)
- Footer components
- Form components

### Step 1.6: Verify German Translations
**Action:** Ensure all German files have complete, professional translations
- Check for empty strings or missing keys
- Verify terminology consistency
- Use professional business German

### ✅ Phase 1 Deliverables:
- [ ] New directory structure created for fa/en/de
- [ ] Translation content split into organized files
- [ ] i18n.js updated with namespace support
- [ ] All components updated to use new namespace pattern
- [ ] German translations complete and verified
- [ ] Application runs without translation errors

---

## 📋 PHASE 2: Language Switcher Component

### Goals:
- Create visible language switcher in UI
- Implement smooth language switching with persistence
- Integrate with existing design system

### Step 2.1: Create LanguageSwitcher Component
**Action:** Build `/app/frontend/src/components/common/LanguageSwitcher.jsx`

**Requirements:**
- Display current language
- Show all available languages (fa, en, de)
- Use flags or language codes
- Save preference to localStorage
- Update HTML lang attribute
- Trigger re-render on change

**Features:**
```javascript
- Dropdown or button group UI
- Smooth transitions
- Matches existing design (Tailwind classes)
- Accessible (ARIA labels)
- Mobile responsive
```

### Step 2.2: Integrate into Header
**Action:** Add LanguageSwitcher to main Header component
- Position: Top-right corner (typical placement)
- Ensure visibility on all pages
- Style consistently with existing header

### Step 2.3: Test Language Switching
**Action:** Verify functionality across all pages
- Switch between fa/en/de on each page
- Check RTL/LTR direction changes
- Verify localStorage persistence (refresh page)
- Test on mobile and desktop viewports

### ✅ Phase 2 Deliverables:
- [ ] LanguageSwitcher component created
- [ ] Component integrated into Header
- [ ] Language switching works on all pages
- [ ] Preference persists across sessions
- [ ] RTL/LTR switching works correctly

---

## 📋 PHASE 3: Backend i18n System

### Goals:
- Implement complete backend translation system
- Create middleware for locale detection
- Translate all hardcoded messages

### Step 3.1: Install Backend i18n Library
**Action:** Add python-i18n to backend
```bash
cd /app/backend
pip install python-i18n
# Update requirements.txt
```

### Step 3.2: Create Backend Translation Structure
**Action:** Create translation files
```
/app/backend/locales/
├── fa/
│   ├── errors.json       # HTTP errors, DB errors, auth errors
│   ├── validation.json   # Field validation messages
│   ├── messages.json     # Success/info messages
│   └── emails.json       # Email templates
├── en/ (same structure)
└── de/ (same structure)
```

### Step 3.3: Create i18n Middleware
**Action:** Build `/app/backend/middleware/i18n.py`

**Functionality:**
- Detect language from Accept-Language header
- Support query parameter `?lang=fa/en/de`
- Support custom header `X-Language`
- Set locale in request context
- Default to Persian (fa)

### Step 3.4: Create Translation Helper
**Action:** Build `/app/backend/app/utils/i18n.py`

**Functions needed:**
```python
def translate(key: str, locale: str = 'fa', **kwargs) -> str:
    """Get translation with variable interpolation"""
    
def get_locale_from_request(request) -> str:
    """Extract locale from request"""
    
def format_error_response(error_key: str, locale: str, **kwargs) -> dict:
    """Format standardized error response"""
```

### Step 3.5: Extract and Translate Backend Strings
**Action:** Find all hardcoded strings and move to translation files

**Categories:**
1. **errors.json:**
   - HTTP status messages (404, 500, etc.)
   - Database errors
   - Authentication/authorization errors
   - Validation failures

2. **validation.json:**
   - Field-specific validation messages
   - Format errors
   - Required field messages

3. **messages.json:**
   - Success messages
   - Info notifications
   - System messages

4. **emails.json:**
   - Email subjects
   - Email body templates

**Files to check:**
- `/app/backend/app/api/**/*.py` (all API routes)
- `/app/backend/app/schemas/**/*.py` (validation)
- `/app/backend/app/services/**/*.py` (business logic)

### Step 3.6: Update API Responses
**Action:** Replace all hardcoded strings with translation calls
```python
# OLD: raise HTTPException(status_code=404, detail="User not found")
# NEW: raise HTTPException(status_code=404, detail=translate("errors.user_not_found", locale))
```

### Step 3.7: Integrate Middleware
**Action:** Register i18n middleware in `/app/backend/app/main.py`
```python
from middleware.i18n import I18nMiddleware
app.add_middleware(I18nMiddleware)
```

### ✅ Phase 3 Deliverables:
- [ ] python-i18n installed and configured
- [ ] Backend translation files created for fa/en/de
- [ ] i18n middleware functional
- [ ] Translation helper functions working
- [ ] All backend strings moved to translation files
- [ ] API responses return localized messages

---

## 📋 PHASE 4: SEO & Meta Tags

### Goals:
- Dynamically localize all page meta tags
- Implement structured data for SEO
- Update HTML lang attribute

### Step 4.1: Create SEO Component
**Action:** Build reusable `/app/frontend/src/components/common/SEOHelmet.jsx`

**Features:**
- Uses react-helmet-async
- Accepts props: title, description, keywords, image, url
- Reads from i18n translations
- Updates HTML lang attribute

### Step 4.2: Add SEO Translations
**Action:** Create `/app/frontend/public/locales/{lang}/sections/seo.json`

**Structure for each page:**
```json
{
  "home": {
    "title": "...",
    "description": "...",
    "keywords": "..."
  },
  "services": {...},
  "portfolio": {...}
}
```

### Step 4.3: Integrate SEO Component
**Action:** Add `<SEOHelmet>` to all page components
- Home page
- Services page
- Portfolio page
- Contact page
- About page
- BuildSite page

### Step 4.4: Add Structured Data
**Action:** Add JSON-LD structured data to main layout

**Schemas to add:**
- Organization schema (company info)
- WebSite schema (site info)
- LocalBusiness schema (Herat location)

### ✅ Phase 4 Deliverables:
- [ ] SEOHelmet component created
- [ ] SEO translations added for all pages in fa/en/de
- [ ] All pages use SEOHelmet with localized content
- [ ] HTML lang attribute updates on language change
- [ ] Structured data implemented
- [ ] Meta tags verified in browser inspector

---

## 📋 PHASE 5: Testing & Documentation

### Goals:
- Comprehensive testing of all i18n features
- Create developer documentation
- Final quality assurance

### Step 5.1: Functional Testing
**Action:** Test all translation features

**Frontend Tests:**
- [ ] Language switcher works on all pages
- [ ] All text translates correctly (fa/en/de)
- [ ] RTL/LTR direction switches properly
- [ ] Language preference persists after refresh
- [ ] No missing translation warnings in console
- [ ] Images and layout adjust properly for each language

**Backend Tests:**
- [ ] API returns messages in requested language
- [ ] Accept-Language header respected
- [ ] Query parameter `?lang=en` works
- [ ] Error messages translated correctly
- [ ] Validation messages translated

**Fallback Tests:**
- [ ] Missing keys fall back to Persian
- [ ] No crashes with unsupported locale
- [ ] Partial translations handle gracefully

### Step 5.2: Cross-Browser Testing
**Action:** Test in multiple browsers
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (if available)
- [ ] Mobile browsers

### Step 5.3: Create Developer Documentation
**Action:** Write comprehensive `/app/docs/TRANSLATION_GUIDE.md`

**Sections to include:**
1. **File Structure Explanation**
2. **How to Add New Translation Keys**
3. **How to Add a New Language**
4. **Naming Conventions** (kebab-case for keys)
5. **Frontend Usage Examples**
6. **Backend Usage Examples**
7. **Testing Translations**
8. **Best Practices**
9. **Troubleshooting Common Issues**

### Step 5.4: Update Project README
**Action:** Add i18n section to `/app/frontend/README.md` and main README

**Include:**
- Supported languages
- How to use language switcher
- Quick reference for developers
- Link to detailed documentation

### Step 5.5: Final Quality Check
**Action:** Complete verification checklist

- [ ] No hardcoded strings remain in code
- [ ] All translations are professional and accurate
- [ ] German translations complete and reviewed
- [ ] Consistent terminology across all languages
- [ ] No console errors or warnings
- [ ] Bundle size is acceptable
- [ ] Performance is good (no lag on language switch)

### ✅ Phase 5 Deliverables:
- [ ] All functional tests passing
- [ ] Cross-browser testing complete
- [ ] TRANSLATION_GUIDE.md created
- [ ] README.md updated
- [ ] Quality checklist completed
- [ ] No outstanding issues

---

## 🎯 Success Criteria

### Functional Requirements:
✅ Language switcher visible and works on all pages  
✅ All UI text translates smoothly (fa ↔ en ↔ de)  
✅ Backend API respects Accept-Language header  
✅ Missing keys fall back to Persian correctly  
✅ SEO meta tags change based on language  
✅ RTL/LTR switching works perfectly  

### Quality Requirements:
✅ No hardcoded strings in codebase  
✅ German translations are complete and professional  
✅ Documentation is clear and comprehensive  
✅ No performance issues  
✅ Code follows existing conventions  

---

## 📝 Implementation Notes

### Before Starting:
1. ✅ Project moved to clean `/app` environment
2. Check if services are running: `sudo supervisorctl status`
3. Install dependencies if needed

### During Implementation:
- Test after each phase before moving to next
- Use `view_bulk` to view multiple files efficiently
- Use `bulk_file_writer` for creating multiple translation files
- Restart services only when needed (hot reload enabled)
- Check browser console for missing translation warnings

### After Completion:
- Run full testing suite
- Verify in browser on multiple pages
- Check network requests for correct locale headers
- Test edge cases (unsupported locales, missing keys)

---

## 🚀 Execution Strategy

### Order of Implementation:
1. **Phase 1** → Foundation (translation structure)
2. **Phase 2** → User-facing feature (language switcher)
3. **Phase 3** → Backend support (API localization)
4. **Phase 4** → Enhancement (SEO)
5. **Phase 5** → Quality assurance (testing & docs)

### Key Principles:
- **Incremental:** Complete each phase fully before moving forward
- **Testable:** Verify functionality after each major change
- **Reversible:** Keep backups of original files
- **Consistent:** Follow existing code patterns
- **Professional:** Translations should sound natural, not machine-translated

---

**Status:** ✅ Ready for Execution  
**Environment:** ✅ Clean `/app` folder with KAWESH project  
**Next Action:** Begin Phase 1 - Frontend Translation Restructuring
