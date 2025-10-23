// Home Page
function renderHome() {
    const main = document.getElementById('main-content');
    const lang = AppState.getLanguage();
    
    const services = getServices();
    
    main.innerHTML = `
        <!-- Hero Section -->
        <section
            class="relative h-[600px] bg-cover bg-center flex items-center"
            style="background-image: linear-gradient(to right, rgba(59, 130, 246, 0.85), rgba(59, 130, 246, 0.6)), url('https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1600');">
            <div class="container mx-auto px-4">
                <div class="max-w-3xl">
                    <h1 class="text-5xl md:text-6xl font-bold text-white mb-6 fade-in">
                        ${t('heroTitle')}
                    </h1>
                    <p class="text-xl text-white mb-4">
                        ${t('heroSubtitle')}
                    </p>
                    <p class="text-lg text-white/90 mb-8 leading-relaxed">
                        ${t('heroDescription')}
                    </p>
                    <div class="flex flex-wrap gap-4">
                        <a href="#" data-page="contact" class="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            ${t('getStarted')}
                        </a>
                        <a href="#" data-page="portfolio" class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                            ${t('viewPortfolio')}
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section class="py-20 bg-gradient-to-b from-white to-gray-50">
            <div class="container mx-auto px-4">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        ${t('ourServices')}
                    </h2>
                    <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                        ${t('servicesDescription')}
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    ${services.map(service => `
                        <a href="#" data-page="service-detail" data-id="${service.slug}" class="card group bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 hover:border-blue-200">
                            <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                                ${getIconSVG(service.icon, 'w-10 h-10 text-white')}
                            </div>
                            <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                                ${service[`title_${lang}`]}
                            </h3>
                            <p class="text-gray-600 mb-6 leading-relaxed text-lg">
                                ${service[`description_${lang}`]}
                            </p>
                            <span class="inline-flex items-center text-blue-600 font-bold text-lg group-hover:gap-3 transition-all">
                                ${t('learnMore')}
                                ${getIconSVG('arrow-right', `w-5 h-5 ${lang === 'en' ? 'ml-2' : 'mr-2 rotate-180'} group-hover:translate-x-1 transition-transform`)}
                            </span>
                        </a>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-20 bg-gradient-to-r from-blue-600 to-blue-500">
            <div class="container mx-auto px-4 text-center">
                <h2 class="text-4xl font-bold text-white mb-6">
                    ${lang === 'fa' ? 'آماده شروع پروژه خود هستید؟' : lang === 'ps' ? 'ایا تاسو خپل پروژه پیل کولو ته چمتو یاست؟' : 'Ready to Start Your Project?'}
                </h2>
                <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                    ${lang === 'fa' ? 'با تیم حرفه‌ای کاوش تماس بگیرید و مشاوره رایگان دریافت کنید' : lang === 'ps' ? 'د کاوش مسلکي ټیم سره تماس ونیسئ او وړیا مشوره ترلاسه کړئ' : 'Contact Kawesh professional team and get free consultation'}
                </p>
                <a href="#" data-page="contact" class="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                    ${t('contactNow')}
                </a>
            </div>
        </section>
    `;
    
    initIcons();
}

// Register route
Router.register('home', renderHome);