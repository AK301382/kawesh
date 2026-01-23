import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Persian (fa) - Pages
import faHomeTranslations from './locales/fa/pages/home.json';
import faServicesTranslations from './locales/fa/pages/services.json';
import faServicesDataTranslations from './locales/fa/pages/servicesData.json';
import faPortfolioTranslations from './locales/fa/pages/portfolio.json';
import faContactTranslations from './locales/fa/pages/contact.json';
import faAboutTranslations from './locales/fa/pages/about.json';
import faBuildSiteTranslations from './locales/fa/pages/buildSite.json';

// Persian (fa) - Sections
import faHeaderTranslations from './locales/fa/sections/header.json';
import faFooterTranslations from './locales/fa/sections/footer.json';
import faTestimonialsTranslations from './locales/fa/sections/testimonials.json';
import faWhyUsTranslations from './locales/fa/sections/whyUs.json';
import faProcessTranslations from './locales/fa/sections/process.json';

// Persian (fa) - Components
import faCommonTranslations from './locales/fa/components/common.json';
import faAuthTranslations from './locales/fa/components/auth.json';
import faThemeTranslations from './locales/fa/components/theme.json';
import faLanguageTranslations from './locales/fa/components/language.json';
import faDashboardTranslations from './locales/fa/components/dashboard.json';
import faServicesHomeTranslations from './locales/fa/components/servicesHome.json';

// English (en) - Pages
import enHomeTranslations from './locales/en/pages/home.json';
import enServicesTranslations from './locales/en/pages/services.json';
import enServicesDataTranslations from './locales/en/pages/servicesData.json';
import enPortfolioTranslations from './locales/en/pages/portfolio.json';
import enContactTranslations from './locales/en/pages/contact.json';
import enAboutTranslations from './locales/en/pages/about.json';
import enBuildSiteTranslations from './locales/en/pages/buildSite.json';

// English (en) - Sections
import enHeaderTranslations from './locales/en/sections/header.json';
import enFooterTranslations from './locales/en/sections/footer.json';
import enTestimonialsTranslations from './locales/en/sections/testimonials.json';
import enWhyUsTranslations from './locales/en/sections/whyUs.json';
import enProcessTranslations from './locales/en/sections/process.json';

// English (en) - Components
import enCommonTranslations from './locales/en/components/common.json';
import enAuthTranslations from './locales/en/components/auth.json';
import enThemeTranslations from './locales/en/components/theme.json';
import enLanguageTranslations from './locales/en/components/language.json';
import enDashboardTranslations from './locales/en/components/dashboard.json';
import enServicesHomeTranslations from './locales/en/components/servicesHome.json';

// German (de) - Pages
import deHomeTranslations from './locales/de/pages/home.json';
import deServicesTranslations from './locales/de/pages/services.json';
import deServicesDataTranslations from './locales/de/pages/servicesData.json';
import dePortfolioTranslations from './locales/de/pages/portfolio.json';
import deContactTranslations from './locales/de/pages/contact.json';
import deAboutTranslations from './locales/de/pages/about.json';
import deBuildSiteTranslations from './locales/de/pages/buildSite.json';

// German (de) - Sections
import deHeaderTranslations from './locales/de/sections/header.json';
import deFooterTranslations from './locales/de/sections/footer.json';
import deTestimonialsTranslations from './locales/de/sections/testimonials.json';
import deWhyUsTranslations from './locales/de/sections/whyUs.json';
import deProcessTranslations from './locales/de/sections/process.json';

// German (de) - Components
import deCommonTranslations from './locales/de/components/common.json';
import deAuthTranslations from './locales/de/components/auth.json';
import deThemeTranslations from './locales/de/components/theme.json';
import deLanguageTranslations from './locales/de/components/language.json';
import deDashboardTranslations from './locales/de/components/dashboard.json';
import deServicesHomeTranslations from './locales/de/components/servicesHome.json';

const resources = {
  fa: {
    // Pages
    home: faHomeTranslations,
    services: faServicesTranslations,
    servicesData: faServicesDataTranslations,
    portfolio: faPortfolioTranslations,
    contact: faContactTranslations,
    about: faAboutTranslations,
    buildSite: faBuildSiteTranslations,
    // Sections
    header: faHeaderTranslations,
    footer: faFooterTranslations,
    testimonials: faTestimonialsTranslations,
    whyUs: faWhyUsTranslations,
    process: faProcessTranslations,
    // Components
    common: faCommonTranslations,
    auth: faAuthTranslations,
    theme: faThemeTranslations,
    language: faLanguageTranslations,
    dashboard: faDashboardTranslations,
    servicesHome: faServicesHomeTranslations
  },
  en: {
    // Pages
    home: enHomeTranslations,
    services: enServicesTranslations,
    servicesData: enServicesDataTranslations,
    portfolio: enPortfolioTranslations,
    contact: enContactTranslations,
    about: enAboutTranslations,
    buildSite: enBuildSiteTranslations,
    // Sections
    header: enHeaderTranslations,
    footer: enFooterTranslations,
    testimonials: enTestimonialsTranslations,
    whyUs: enWhyUsTranslations,
    process: enProcessTranslations,
    // Components
    common: enCommonTranslations,
    auth: enAuthTranslations,
    theme: enThemeTranslations,
    language: enLanguageTranslations,
    dashboard: enDashboardTranslations,
    servicesHome: enServicesHomeTranslations
  },
  de: {
    // Pages
    home: deHomeTranslations,
    services: deServicesTranslations,
    servicesData: deServicesDataTranslations,
    portfolio: dePortfolioTranslations,
    contact: deContactTranslations,
    about: deAboutTranslations,
    buildSite: deBuildSiteTranslations,
    // Sections
    header: deHeaderTranslations,
    footer: deFooterTranslations,
    testimonials: deTestimonialsTranslations,
    whyUs: deWhyUsTranslations,
    process: deProcessTranslations,
    // Components
    common: deCommonTranslations,
    auth: deAuthTranslations,
    theme: deThemeTranslations,
    language: deLanguageTranslations,
    dashboard: deDashboardTranslations,
    servicesHome: deServicesHomeTranslations
  }
};

i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    resources,
    fallbackLng: 'fa', // Default language is Persian
    lng: 'fa', // Initial language set to Persian
    supportedLngs: ['fa', 'en', 'de'], // Supported languages: Persian, English, German
    defaultNS: 'common', // Default namespace
    ns: [
      'home', 'services', 'servicesData', 'portfolio', 'contact', 'about', 'buildSite',
      'header', 'footer', 'testimonials', 'whyUs', 'process',
      'common', 'auth', 'theme', 'language', 'dashboard', 'servicesHome'
    ],
    debug: false,
    
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng'
    },

    interpolation: {
      escapeValue: false // React already escapes values
    },

    react: {
      useSuspense: true
    }
  });

// Add RTL support for Persian
i18n.on('languageChanged', (lng) => {
  const dir = lng === 'fa' ? 'rtl' : 'ltr';
  document.documentElement.dir = dir;
  document.documentElement.lang = lng;
});

// Set initial direction
const currentLang = i18n.language || 'fa';
document.documentElement.dir = currentLang === 'fa' ? 'rtl' : 'ltr';
document.documentElement.lang = currentLang;

export default i18n;