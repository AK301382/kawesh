// Service Detail Page - بازسازی شده و کامل
async function renderServiceDetail(params) {
    const main = document.getElementById('main-content');
    const lang = AppState.getLanguage();
    const slug = params.id || 'web-design';
    
    // بارگذاری داده کامل سرویس
    await initializeServicesData();
    const serviceData = getServiceFullData(slug);
    
    if (!serviceData) {
        main.innerHTML = '<div class="container mx-auto px-4 py-16 text-center">خطا در بارگذاری اطلاعات</div>';
        return;
    }
    
    const services = getServices();
    const service = services.find(s => s.slug === slug);
    
    main.innerHTML = `
        <div class="min-h-screen bg-white">
            <!-- Hero Section -->
            <div class="relative h-[70vh] min-h-[600px] bg-cover bg-center" style="background-image: linear-gradient(135deg, rgba(59, 130, 246, 0.95), rgba(37, 99, 235, 0.85)), url('${service.image}');">
                <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
                <div class="container mx-auto px-4 h-full flex items-center relative z-10">
                    <div class="text-white max-w-4xl">
                        <div class="mb-6 transform hover:scale-110 transition-transform inline-block">
                            ${getIconSVG(service.icon, 'w-20 h-20 text-white')}
                        </div>
                        <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            ${serviceData[`title_${lang}`]}
                        </h1>
                        <p class="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed max-w-3xl">
                            ${serviceData[`description_${lang}`]}
                        </p>
                        <div class="flex flex-wrap gap-4">
                            <a href="#packages" class="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg">
                                ${lang === 'fa' ? 'مشاهده پکیج‌ها' : lang === 'ps' ? 'د پیکجونو لیدل' : 'View Packages'}
                                ${getIconSVG('arrow-down', 'w-5 h-5 mr-2')}
                            </a>
                            <a href="#" data-page="contact" class="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all">
                                ${lang === 'fa' ? 'درخواست مشاوره رایگان' : lang === 'ps' ? 'د وړیا مشورې غوښتنه' : 'Free Consultation'}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- محتوای کامل - توضیحات جامع -->
            <div class="container mx-auto px-4 py-20">
                <div class="max-w-5xl mx-auto">
                    <div class="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify" style="font-size: 1.125rem; line-height: 2;">
                        ${serviceData[`content_${lang}`].split('\n\n').map(para => 
                            `<p class="mb-6">${para}</p>`
                        ).join('')}
                    </div>
                </div>
            </div>

            <!-- آمار موفقیت -->
            <div class="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600 py-16">
                <div class="container mx-auto px-4">
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                        ${serviceData[`stats_${lang}`].map(stat => `
                            <div class="text-center text-white">
                                <div class="text-5xl md:text-6xl font-bold mb-3 animate-pulse">
                                    ${stat.number}
                                </div>
                                <div class="text-lg md:text-xl font-medium opacity-90">
                                    ${stat.label}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <!-- چرا مهم است -->
            <div class="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div class="container mx-auto px-4">
                    <div class="text-center mb-16">
                        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            ${lang === 'fa' ? 'چرا این سرویس برای کسب‌وکار شما مهم است؟' : 
                              lang === 'ps' ? 'ولې دا خدمت ستاسو د سوداګرۍ لپاره مهم دی؟' : 
                              'Why This Service Is Important for Your Business?'}
                        </h2>
                        <div class="w-24 h-1 bg-blue-600 mx-auto"></div>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        ${serviceData[`why_important_${lang}`].map((item, index) => `
                            <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
                                <div class="flex items-start">
                                    <div class="flex-shrink-0">
                                        <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                                            ${index + 1}
                                        </div>
                                    </div>
                                    <div class="mr-5">
                                        <p class="text-gray-700 text-lg leading-relaxed">
                                            ${item}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <!-- فرآیند کار ما -->
            <div class="py-20 bg-white">
                <div class="container mx-auto px-4">
                    <div class="text-center mb-16">
                        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            ${lang === 'fa' ? 'فرآیند کار ما' : lang === 'ps' ? 'زموږ د کار بهیر' : 'Our Work Process'}
                        </h2>
                        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                            ${lang === 'fa' ? 'از مشاوره تا تحویل نهایی، تمام مراحل با شفافیت کامل' : 
                              lang === 'ps' ? 'له مشورې څخه تر وروستي سپارلو، ټول مرحلې په بشپړه شفافیت سره' : 
                              'From consultation to final delivery, all stages with complete transparency'}
                        </p>
                    </div>
                    
                    <div class="max-w-5xl mx-auto">
                        ${serviceData[`process_${lang}`].map((step, index) => `
                            <div class="relative mb-12 ${index !== serviceData[`process_${lang}`].length - 1 ? 'pb-12' : ''}">
                                ${index !== serviceData[`process_${lang}`].length - 1 ? '<div class="absolute right-8 top-20 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-300"></div>' : ''}
                                
                                <div class="flex items-start gap-6">
                                    <div class="flex-shrink-0 relative z-10">
                                        <div class="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-xl">
                                            ${index + 1}
                                        </div>
                                    </div>
                                    <div class="flex-1 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all">
                                        <h3 class="text-2xl font-bold text-gray-900 mb-3">
                                            ${step.title}
                                        </h3>
                                        <p class="text-gray-700 text-lg leading-relaxed">
                                            ${step.description || step.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <!-- مزایا و ویژگی‌ها -->
            <div class="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div class="container mx-auto px-4">
                    <div class="text-center mb-16">
                        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            ${lang === 'fa' ? 'مزایا و ویژگی‌های کلیدی' : 
                              lang === 'ps' ? 'کلیدي ګټې او ځانګړتیاوې' : 
                              'Key Benefits & Features'}
                        </h2>
                        <div class="w-24 h-1 bg-blue-600 mx-auto"></div>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        ${serviceData[`benefits_${lang}`].map((benefit) => `
                            <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 group">
                                <div class="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-4xl">
                                    ${typeof benefit.icon === 'string' && benefit.icon.length <= 2 ? benefit.icon : getIconSVG(benefit.icon.toLowerCase(), 'w-8 h-8 text-blue-600')}
                                </div>
                                <h3 class="text-xl font-bold text-gray-900 mb-3">
                                    ${benefit.title}
                                </h3>
                                <p class="text-gray-600 leading-relaxed">
                                    ${benefit.description || benefit.desc}
                                </p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <!-- تکنولوژی‌های مورد استفاده -->
            <div class="py-20 bg-white">
                <div class="container mx-auto px-4">
                    <div class="text-center mb-16">
                        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            ${lang === 'fa' ? 'تکنولوژی‌ها و ابزارهای مورد استفاده' : 
                              lang === 'ps' ? 'کارول شوي ټیکنالوژۍ او وسیلې' : 
                              'Technologies & Tools We Use'}
                        </h2>
                        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                            ${lang === 'fa' ? 'ما از جدیدترین و بهترین تکنولوژی‌های دنیا استفاده می‌کنیم' : 
                              lang === 'ps' ? 'موږ د نړۍ تر ټولو نوي او غوره ټیکنالوژۍ کاروو' : 
                              'We use the latest and best technologies in the world'}
                        </p>
                    </div>
                    
                    <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                        ${serviceData[`technologies_${lang}`].map((tech) => `
                            <div class="flex items-center gap-4 bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 border border-gray-100 hover:border-blue-300 hover:shadow-md transition-all">
                                <div class="flex-shrink-0">
                                    ${getIconSVG('check-circle', 'w-6 h-6 text-green-500')}
                                </div>
                                <p class="text-gray-700 text-lg">
                                    ${tech}
                                </p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <!-- پکیج‌ها و قیمت‌گذاری -->
            <div id="packages" class="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div class="container mx-auto px-4">
                    <div class="text-center mb-16">
                        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            ${lang === 'fa' ? 'پکیج‌ها و قیمت‌گذاری' : 
                              lang === 'ps' ? 'پیکجونه او قیمتونه' : 
                              'Packages & Pricing'}
                        </h2>
                        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                            ${lang === 'fa' ? 'پکیج مناسب کسب‌وکار خود را انتخاب کنید' : 
                              lang === 'ps' ? 'د خپلې سوداګرۍ لپاره مناسب پیکج غوره کړئ' : 
                              'Choose the right package for your business'}
                        </p>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        ${(serviceData[`packages_${lang}`] || serviceData[`pricing_${lang}`] || []).map((pkg, index) => `
                            <div class="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden ${(pkg.popular || pkg.recommended) ? 'ring-4 ring-blue-500 transform scale-105' : 'hover:-translate-y-2'}">
                                ${(pkg.popular || pkg.recommended) ? `
                                    <div class="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center py-3 font-bold text-lg">
                                        ${lang === 'fa' ? '⭐ محبوب‌ترین' : lang === 'ps' ? '⭐ تر ټولو مشهور' : '⭐ Most Popular'}
                                    </div>
                                ` : ''}
                                
                                <div class="p-8 ${(pkg.popular || pkg.recommended) ? 'pt-16' : ''}">
                                    <h3 class="text-3xl font-bold text-gray-900 mb-4">
                                        ${pkg.name}
                                    </h3>
                                    <div class="mb-8">
                                        <span class="text-4xl font-bold text-blue-600">
                                            ${pkg.price}
                                        </span>
                                    </div>
                                    
                                    <ul class="space-y-4 mb-8">
                                        ${(pkg.features || []).map(feature => `
                                            <li class="flex items-start gap-3">
                                                <div class="flex-shrink-0 mt-1">
                                                    ${getIconSVG('check', 'w-5 h-5 text-green-500')}
                                                </div>
                                                <span class="text-gray-700">
                                                    ${feature}
                                                </span>
                                            </li>
                                        `).join('')}
                                    </ul>
                                    
                                    <a href="#" data-page="contact" class="block w-full text-center ${pkg.popular ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'} px-8 py-4 rounded-xl font-semibold text-lg transition-all">
                                        ${lang === 'fa' ? 'انتخاب پکیج' : lang === 'ps' ? 'پیکج غوره کړئ' : 'Choose Package'}
                                    </a>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    
                    <div class="text-center mt-12">
                        <p class="text-gray-600 text-lg">
                            ${lang === 'fa' ? '💡 نیاز به پکیج سفارشی دارید؟' : 
                              lang === 'ps' ? '💡 ایا تاسو سفارشي پیکج ته اړتیا لرئ؟' : 
                              '💡 Need a custom package?'}
                            <a href="#" data-page="contact" class="text-blue-600 font-semibold hover:underline mr-2">
                                ${lang === 'fa' ? 'با ما تماس بگیرید' : lang === 'ps' ? 'موږ سره تماس ونیسئ' : 'Contact us'}
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <!-- سوالات متداول (FAQ) -->
            <div class="py-20 bg-white">
                <div class="container mx-auto px-4">
                    <div class="text-center mb-16">
                        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            ${lang === 'fa' ? 'سوالات متداول' : lang === 'ps' ? 'عام پوښتنې' : 'Frequently Asked Questions'}
                        </h2>
                        <div class="w-24 h-1 bg-blue-600 mx-auto"></div>
                    </div>
                    
                    <div class="max-w-4xl mx-auto space-y-4">
                        ${(serviceData[`faqs_${lang}`] || []).map((faq, index) => `
                            <div class="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-all">
                                <button class="w-full text-right px-8 py-6 flex items-center justify-between hover:bg-gray-100 transition-colors faq-question" data-faq="${index}">
                                    <span class="text-xl font-semibold text-gray-900 flex-1">
                                        ${faq.q}
                                    </span>
                                    <span class="faq-icon text-blue-600 text-2xl transform transition-transform">
                                        +
                                    </span>
                                </button>
                                <div class="faq-answer px-8 pb-6 text-gray-700 text-lg leading-relaxed hidden">
                                    ${faq.a}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <!-- CTA نهایی -->
            <div class="py-20 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600">
                <div class="container mx-auto px-4 text-center">
                    <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
                        ${lang === 'fa' ? 'آماده شروع پروژه خود هستید؟' : 
                          lang === 'ps' ? 'ایا تاسو خپل پروژه پیل کولو ته چمتو یاست؟' : 
                          'Ready to Start Your Project?'}
                    </h2>
                    <p class="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed">
                        ${lang === 'fa' ? 'با تیم حرفه‌ای کاوش تماس بگیرید و مشاوره رایگان دریافت کنید. ما آماده‌ایم تا پروژه شما را به واقعیت تبدیل کنیم.' : 
                          lang === 'ps' ? 'د کاوش مسلکي ټیم سره تماس ونیسئ او وړیا مشوره ترلاسه کړئ. موږ چمتو یو چې ستاسو پروژه حقیقت ته بدله کړو.' : 
                          'Contact Kawesh professional team and get free consultation. We are ready to turn your project into reality.'}
                    </p>
                    <div class="flex flex-wrap justify-center gap-4">
                        <a href="#" data-page="contact" class="inline-flex items-center bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-2xl">
                            ${getIconSVG('phone', 'w-6 h-6 ml-3')}
                            ${lang === 'fa' ? 'تماس با ما' : lang === 'ps' ? 'موږ سره تماس' : 'Contact Us'}
                        </a>
                        <a href="#packages" class="inline-flex items-center bg-transparent border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all">
                            ${getIconSVG('package', 'w-6 h-6 ml-3')}
                            ${lang === 'fa' ? 'مشاهده پکیج‌ها' : lang === 'ps' ? 'پیکجونه وګورئ' : 'View Packages'}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // FAQ Toggle
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('.faq-icon');
            const isOpen = !answer.classList.contains('hidden');
            
            // Close all others
            document.querySelectorAll('.faq-answer').forEach(a => a.classList.add('hidden'));
            document.querySelectorAll('.faq-icon').forEach(i => {
                i.textContent = '+';
                i.classList.remove('rotate-45');
            });
            
            if (!isOpen) {
                answer.classList.remove('hidden');
                icon.textContent = '−';
                icon.classList.add('rotate-45');
            }
        });
    });
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#') && href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
    
    initIcons();
}

Router.register('service-detail', renderServiceDetail);
