// Services Page
function renderServices() {
    const main = document.getElementById('main-content');
    const lang = AppState.getLanguage();
    const services = getServices();
    
    main.innerHTML = `
        <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white fade-in">
            <!-- Header -->
            <div class="bg-gradient-to-r from-blue-600 to-blue-500 py-20">
                <div class="container mx-auto px-4 text-center">
                    <h1 class="text-5xl font-bold text-white mb-4">
                        ${t('ourServices')}
                    </h1>
                    <p class="text-xl text-white/90 max-w-2xl mx-auto">
                        ${t('servicesDescription')}
                    </p>
                </div>
            </div>

            <!-- Services Grid -->
            <div class="container mx-auto px-4 py-20">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    ${services.map(service => `
                        <a href="#" data-page="service-detail" data-id="${service.slug}" class="card group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100">
                            <div class="h-64 overflow-hidden relative">
                                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <img
                                    src="${service.image}"
                                    alt="${service[`title_${lang}`]}"
                                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div class="absolute top-6 right-6 z-20">
                                    <div class="w-16 h-16 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                        ${getIconSVG(service.icon, 'w-8 h-8 text-blue-600')}
                                    </div>
                                </div>
                            </div>
                            <div class="p-8">
                                <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                                    ${service[`title_${lang}`]}
                                </h3>
                                <p class="text-gray-600 mb-6 leading-relaxed text-lg">
                                    ${service[`description_${lang}`]}
                                </p>
                                <div class="flex items-center justify-between">
                                    <span class="inline-flex items-center text-blue-600 font-bold text-lg group-hover:gap-3 transition-all">
                                        ${t('learnMore')}
                                        ${getIconSVG('arrow-right', `w-5 h-5 ${lang === 'en' ? 'ml-2' : 'mr-2 rotate-180'} group-hover:translate-x-1 transition-transform`)}
                                    </span>
                                </div>
                            </div>
                        </a>
                    `).join('')}
                </div>
            </div>
            
            <!-- CTA Section -->
            <div class="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 py-20">
                <div class="container mx-auto px-4 text-center">
                    <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
                        ${lang === 'fa' ? 'پروژه خود را با ما شروع کنید' : 
                          lang === 'ps' ? 'خپل پروژه موږ سره پیل کړئ' : 
                          'Start Your Project With Us'}
                    </h2>
                    <p class="text-xl text-white/95 mb-10 max-w-3xl mx-auto">
                        ${lang === 'fa' ? 'تیم حرفه‌ای کاوش آماده است تا بهترین خدمات را به شما ارائه دهد' : 
                          lang === 'ps' ? 'د کاوش مسلکي ټیم چمتو دی چې تاسو ته غوره خدمتونه وړاندې کړي' : 
                          'Kawesh professional team is ready to provide you the best services'}
                    </p>
                    <a href="#" data-page="contact" class="inline-block bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-2xl">
                        ${t('contactNow')}
                    </a>
                </div>
            </div>
        </div>
    `;
    
    initIcons();
}

Router.register('services', renderServices);