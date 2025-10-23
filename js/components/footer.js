// Footer Component
function renderFooter() {
    const footer = document.getElementById('footer');
    const lang = AppState.getLanguage();
    
    footer.innerHTML = `
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <!-- About -->
                <div>
                    <h3 class="text-xl font-bold mb-4">کاوش</h3>
                    <p class="text-gray-400 text-sm">
                        ${t('aboutDescription')}
                    </p>
                </div>

                <!-- Quick Links -->
                <div>
                    <h3 class="text-lg font-semibold mb-4">${lang === 'fa' ? 'لینک‌های سریع' : lang === 'ps' ? 'چټک لینکونه' : 'Quick Links'}</h3>
                    <ul class="space-y-2">
                        <li><a href="#" data-page="home" class="text-gray-400 hover:text-white transition-colors">${t('home')}</a></li>
                        <li><a href="#" data-page="services" class="text-gray-400 hover:text-white transition-colors">${t('services')}</a></li>
                        <li><a href="#" data-page="portfolio" class="text-gray-400 hover:text-white transition-colors">${t('portfolio')}</a></li>
                        <li><a href="#" data-page="about" class="text-gray-400 hover:text-white transition-colors">${t('about')}</a></li>
                        <li><a href="#" data-page="contact" class="text-gray-400 hover:text-white transition-colors">${t('contact')}</a></li>
                    </ul>
                </div>

                <!-- Services -->
                <div>
                    <h3 class="text-lg font-semibold mb-4">${t('services')}</h3>
                    <ul class="space-y-2">
                        <li><a href="#" data-page="service-detail" data-id="web-design" class="text-gray-400 hover:text-white transition-colors">${lang === 'fa' ? 'طراحی وب' : lang === 'ps' ? 'ویب ډیزاین' : 'Web Design'}</a></li>
                        <li><a href="#" data-page="service-detail" data-id="app-design" class="text-gray-400 hover:text-white transition-colors">${lang === 'fa' ? 'طراحی اپلیکیشن' : lang === 'ps' ? 'اپلیکیشن ډیزاین' : 'App Design'}</a></li>
                        <li><a href="#" data-page="service-detail" data-id="digital-marketing" class="text-gray-400 hover:text-white transition-colors">${lang === 'fa' ? 'بازاریابی دیجیتال' : lang === 'ps' ? 'ډیجیټل مارکیټینګ' : 'Digital Marketing'}</a></li>
                        <li><a href="#" data-page="service-detail" data-id="graphic-design" class="text-gray-400 hover:text-white transition-colors">${lang === 'fa' ? 'طراحی گرافیک' : lang === 'ps' ? 'ګرافیک ډیزاین' : 'Graphic Design'}</a></li>
                    </ul>
                </div>

                <!-- Contact Info -->
                <div>
                    <h3 class="text-lg font-semibold mb-4">${t('contact')}</h3>
                    <ul class="space-y-3">
                        <li class="flex items-center space-x-2 space-x-reverse text-gray-400">
                            ${getIconSVG('mail', 'w-5 h-5')}
                            <span>${AppConfig.contact.email}</span>
                        </li>
                        <li class="flex items-center space-x-2 space-x-reverse text-gray-400">
                            ${getIconSVG('phone', 'w-5 h-5')}
                            <span>${AppConfig.contact.phone}</span>
                        </li>
                        <li class="flex items-center space-x-2 space-x-reverse text-gray-400">
                            ${getIconSVG('map-pin', 'w-5 h-5')}
                            <span>${AppConfig.contact.address}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
                <p>© 2025 Kawesh Studio. All rights reserved.</p>
            </div>
        </div>
    `;
    
    initIcons();
}
