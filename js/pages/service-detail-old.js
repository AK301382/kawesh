// Service Detail Page
function renderServiceDetail(params) {
    const main = document.getElementById('main-content');
    const lang = AppState.getLanguage();
    const slug = params.id || 'web-design';
    const services = getServices();
    const service = services.find(s => s.slug === slug) || services[0];
    
    const features = {
        'web-design': [
            { fa: 'طراحی رسپانسیو', ps: 'تطبیق ور ډیزاین', en: 'Responsive Design' },
            { fa: 'بهینه‌سازی SEO', ps: 'SEO بهینه‌سازی', en: 'SEO Optimization' },
            { fa: 'سرعت بالا', ps: 'لوړ سرعت', en: 'High Speed' },
            { fa: 'امنیت بالا', ps: 'لوړ امنیت', en: 'High Security' }
        ],
        'app-design': [
            { fa: 'UI/UX حرفه‌ای', ps: 'مسلکي UI/UX', en: 'Professional UI/UX' },
            { fa: 'عملکرد عالی', ps: 'عالي کارجوړه', en: 'High Performance' },
            { fa: 'پشتیبانی چند پلتفرم', ps: 'د ګڼو پلټفارمو ملاتړ', en: 'Cross-platform Support' },
            { fa: 'یکپارچه‌سازی آسان', ps: 'اسانه یواځي‌کول', en: 'Easy Integration' }
        ],
        'digital-marketing': [
            { fa: 'استراتژی SEO', ps: 'SEO ستراتیژۍ', en: 'SEO Strategy' },
            { fa: 'مدیریت شبکه‌های اجتماعی', ps: 'د ټولنیزو شبکو مدیریت', en: 'Social Media Management' },
            { fa: 'تبلیغات آنلاین', ps: 'آنلاین تبلیغات', en: 'Online Advertising' },
            { fa: 'تحلیل داده‌ها', ps: 'د معلوماتو تحلیل', en: 'Data Analysis' }
        ],
        'graphic-design': [
            { fa: 'طراحی لوگو', ps: 'د لوګو ډیزاین', en: 'Logo Design' },
            { fa: 'برندینگ کامل', ps: 'بشپړ برینډینګ', en: 'Complete Branding' },
            { fa: 'موشن گرافیک', ps: 'موشن ګرافیک', en: 'Motion Graphics' },
            { fa: 'طراحی چاپی', ps: 'د چاپ ډیزاین', en: 'Print Design' }
        ],
        'video-production': [
            { fa: 'فیلمبرداری حرفه‌ای', ps: 'مسلکي فلم اخیستل', en: 'Professional Filming' },
            { fa: 'تدوین و مونتاژ', ps: 'ایډیټ او مونتاژ', en: 'Editing & Montage' },
            { fa: 'افکت‌های ویژه', ps: 'ډیر اغیزونه', en: 'Special Effects' },
            { fa: 'صداگذاری', ps: 'غړیز اچول', en: 'Voice Over' }
        ],
        'hosting': [
            { fa: 'سرورهای قدرتمند', ps: 'زورور سرورونه', en: 'Powerful Servers' },
            { fa: 'پشتیبانی 24/7', ps: '24/7 ملاتړ', en: '24/7 Support' },
            { fa: 'پشتیبان‌گیری روزانه', ps: 'ورځنۍ بیک اپ', en: 'Daily Backup' },
            { fa: 'امنیت SSL', ps: 'SSL امنیت', en: 'SSL Security' }
        ]
    };
    
    const serviceFeatures = features[slug] || features['web-design'];
    
    main.innerHTML = `
        <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white fade-in">
            <!-- Hero Section -->
            <div
                class="relative h-[500px] bg-cover bg-center"
                style="background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${service.image}');">
                <div class="container mx-auto px-4 h-full flex items-center">
                    <div class="text-white max-w-3xl">
                        <div class="mb-6">
                            ${getIconSVG(service.icon, 'w-16 h-16 text-white')}
                        </div>
                        <h1 class="text-5xl md:text-6xl font-bold mb-6">
                            ${service[`title_${lang}`]}
                        </h1>
                        <p class="text-xl md:text-2xl text-white/90 mb-8">
                            ${service[`description_${lang}`]}
                        </p>
                        <a href="#" data-page="contact" class="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105">
                            ${lang === 'fa' ? 'درخواست مشاوره' : lang === 'ps' ? 'د مشورې غوښتنه' : 'Get Consultation'}
                        </a>
                    </div>
                </div>
            </div>

            <!-- Features Section -->
            <div class="container mx-auto px-4 py-16">
                <h2 class="text-4xl font-bold text-center text-gray-800 mb-12">
                    ${t('features')}
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    ${serviceFeatures.map((feature, index) => `
                        <div class="card bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all">
                            <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                ${getIconSVG('check', 'w-6 h-6 text-white')}
                            </div>
                            <h3 class="font-semibold text-gray-800">
                                ${feature[lang]}
                            </h3>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Why Choose Us Section -->
            <div class="bg-gradient-to-r from-blue-600 to-blue-500 py-16">
                <div class="container mx-auto px-4">
                    <h2 class="text-4xl font-bold text-center text-white mb-12">
                        ${t('whyChooseUs')}
                    </h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="text-center text-white">
                            <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                ${getIconSVG('users', 'w-8 h-8 text-white')}
                            </div>
                            <h3 class="text-xl font-bold mb-2">
                                ${lang === 'fa' ? 'تیم حرفه‌ای' : lang === 'ps' ? 'مسلکي ټیم' : 'Professional Team'}
                            </h3>
                            <p class="text-white/90">
                                ${lang === 'fa' ? 'تیمی متخصص و باتجربه' : lang === 'ps' ? 'متخصص او تجربه لرونکی ټیم' : 'Specialized and experienced team'}
                            </p>
                        </div>
                        <div class="text-center text-white">
                            <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                ${getIconSVG('award', 'w-8 h-8 text-white')}
                            </div>
                            <h3 class="text-xl font-bold mb-2">
                                ${lang === 'fa' ? 'کیفیت برتر' : lang === 'ps' ? 'غوره کیفیت' : 'Superior Quality'}
                            </h3>
                            <p class="text-white/90">
                                ${lang === 'fa' ? 'بالاترین استانداردهای کیفی' : lang === 'ps' ? 'تر ٹولو لوړ کیفيتي معیارونه' : 'Highest quality standards'}
                            </p>
                        </div>
                        <div class="text-center text-white">
                            <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                ${getIconSVG('clock', 'w-8 h-8 text-white')}
                            </div>
                            <h3 class="text-xl font-bold mb-2">
                                ${lang === 'fa' ? 'تحویل به‌موقع' : lang === 'ps' ? 'به موقع سپارل' : 'On-Time Delivery'}
                            </h3>
                            <p class="text-white/90">
                                ${lang === 'fa' ? 'تحویل پروژه در زمان مقرر' : lang === 'ps' ? 'په ٹاکلی شوي وخت کې د پروژې سپارل' : 'Project delivery on schedule'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- CTA Section -->
            <div class="container mx-auto px-4 py-16 text-center">
                <h2 class="text-4xl font-bold text-gray-800 mb-6">
                    ${lang === 'fa' ? 'آماده شروع پروژه خود هستید؟' : lang === 'ps' ? 'ایا تاسو خپل پروژه پیل کولو ته چمتو یاست؟' : 'Ready to Start Your Project?'}
                </h2>
                <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    ${lang === 'fa' ? 'برای دریافت مشاوره رایگان با ما تماس بگیرید' : lang === 'ps' ? 'د وړیا مشورې لپاره موږ سره تماس ونیسئ' : 'Contact us for free consultation'}
                </p>
                <a href="#" data-page="contact" class="inline-block bg-primary text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
                    ${t('contactNow')}
                </a>
            </div>
        </div>
    `;
    
    initIcons();
}

Router.register('service-detail', renderServiceDetail);