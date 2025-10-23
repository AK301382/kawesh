// Navbar Component
function renderNavbar() {
    const navbar = document.getElementById('navbar');
    const lang = AppState.getLanguage();
    const currentPage = AppState.getPage();
    
    navbar.innerHTML = `
        <div class="container mx-auto px-4">
            <div class="flex items-center justify-between h-16">
                <!-- Logo -->
                <a href="#" data-page="home" class="flex items-center">
                    <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 20L20 10V30L10 20Z" fill="#3b82f6"/>
                        <path d="M20 10L30 20L20 30V10Z" fill="#60a5fa"/>
                        <circle cx="30" cy="20" r="3" fill="#3b82f6"/>
                        <text x="40" y="26" font-family="'Poppins', sans-serif" font-size="18" font-weight="600" fill="#1e293b">Kawesh</text>
                    </svg>
                </a>

                <!-- Desktop Menu -->
                <div class="hidden md:flex items-center space-x-8 space-x-reverse">
                    <a href="#" data-page="home" class="text-gray-700 hover:text-primary transition-colors ${currentPage === 'home' ? 'text-primary font-semibold' : ''}">${t('home')}</a>
                    <a href="#" data-page="services" class="text-gray-700 hover:text-primary transition-colors ${currentPage === 'services' ? 'text-primary font-semibold' : ''}">${t('services')}</a>
                    <a href="#" data-page="portfolio" class="text-gray-700 hover:text-primary transition-colors ${currentPage === 'portfolio' ? 'text-primary font-semibold' : ''}">${t('portfolio')}</a>
                    <a href="#" data-page="about" class="text-gray-700 hover:text-primary transition-colors ${currentPage === 'about' ? 'text-primary font-semibold' : ''}">${t('about')}</a>
                    <a href="#" data-page="contact" class="text-gray-700 hover:text-primary transition-colors ${currentPage === 'contact' ? 'text-primary font-semibold' : ''}">${t('contact')}</a>
                    
                    <!-- Language Dropdown -->
                    <div class="relative">
                        <button 
                            id="lang-dropdown-btn"
                            class="flex items-center space-x-1 space-x-reverse px-3 py-2 text-gray-700 hover:text-primary transition-colors border border-gray-200 rounded-lg">
                            <span>${getLanguageName(lang)}</span>
                            ${getIconSVG('chevron-down', 'w-4 h-4')}
                        </button>
                        <div id="lang-dropdown" class="hidden absolute mt-2 ${lang === 'en' ? 'left-0' : 'right-0'} bg-white shadow-lg rounded-lg w-40 py-2">
                            <button data-lang="fa" class="w-full text-${lang === 'en' ? 'left' : 'right'} px-4 py-2 hover:bg-gray-100 flex items-center">
                                دری
                            </button>
                            <button data-lang="ps" class="w-full text-${lang === 'en' ? 'left' : 'right'} px-4 py-2 hover:bg-gray-100 flex items-center">
                                پښتو
                            </button>
                            <button data-lang="en" class="w-full text-${lang === 'en' ? 'left' : 'right'} px-4 py-2 hover:bg-gray-100 flex items-center">
                                English
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Mobile Menu Button -->
                <button id="mobile-menu-btn" class="md:hidden text-gray-700 hover:text-primary">
                    ${getIconSVG('menu', 'w-6 h-6')}
                </button>
            </div>

            <!-- Mobile Menu -->
            <div id="mobile-menu" class="hidden md:hidden py-4 border-t">
                <a href="#" data-page="home" class="block py-2 text-gray-700 hover:text-primary">${t('home')}</a>
                <a href="#" data-page="services" class="block py-2 text-gray-700 hover:text-primary">${t('services')}</a>
                <a href="#" data-page="portfolio" class="block py-2 text-gray-700 hover:text-primary">${t('portfolio')}</a>
                <a href="#" data-page="about" class="block py-2 text-gray-700 hover:text-primary">${t('about')}</a>
                <a href="#" data-page="contact" class="block py-2 text-gray-700 hover:text-primary">${t('contact')}</a>
                <div class="mt-4 pt-4 border-t">
                    <button data-lang="fa" class="block w-full text-${lang === 'en' ? 'left' : 'right'} py-2 text-gray-700 hover:text-primary">دری</button>
                    <button data-lang="ps" class="block w-full text-${lang === 'en' ? 'left' : 'right'} py-2 text-gray-700 hover:text-primary">پښتو</button>
                    <button data-lang="en" class="block w-full text-${lang === 'en' ? 'left' : 'right'} py-2 text-gray-700 hover:text-primary">English</button>
                </div>
            </div>
        </div>
    `;
    
    initIcons();
    
    // Language dropdown toggle
    const langBtn = document.getElementById('lang-dropdown-btn');
    const langDropdown = document.getElementById('lang-dropdown');
    
    if (langBtn && langDropdown) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('hidden');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            langDropdown.classList.add('hidden');
        });
    }
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Language change handlers
    document.querySelectorAll('[data-lang]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const newLang = e.target.getAttribute('data-lang');
            AppState.setLanguage(newLang);
            Router.render(AppState.getPage(), { id: getQueryParam('id') });
            renderNavbar();
            renderFooter();
        });
    });
}
