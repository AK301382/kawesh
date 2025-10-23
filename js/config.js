// App Configuration
const AppConfig = {
    defaultLanguage: 'fa',
    supportedLanguages: ['fa', 'ps', 'en'],
    contact: {
        email: 'info@kawesh.com',
        email2: 'contact@kawesh.com',
        phone: '+93 700 123 456',
        phone2: '+93 701 234 567',
        address: 'کابل، افغانستان'
    },
    workingHours: {
        fa: 'شنبه تا پنج‌شنبه: ۹ صبح تا ۶ عصر',
        ps: 'د شنبې څخه تر پنجشنبې: د سهار ۹ څخه تر ماښام ۶',
        en: 'Saturday to Thursday: 9 AM to 6 PM'
    },
    socialMedia: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
    }
};

// State Management
const AppState = {
    currentLanguage: localStorage.getItem('language') || AppConfig.defaultLanguage,
    currentPage: 'home',
    
    setLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'en' ? 'ltr' : 'rtl';
    },
    
    getLanguage() {
        return this.currentLanguage;
    },
    
    setPage(page) {
        this.currentPage = page;
    },
    
    getPage() {
        return this.currentPage;
    }
};

// Initialize language on load
AppState.setLanguage(AppState.getLanguage());
