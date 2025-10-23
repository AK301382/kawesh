// About Page
function renderAbout() {
    const main = document.getElementById('main-content');
    const lang = AppState.getLanguage();
    
    const values = [
        {
            icon: 'target',
            title_fa: 'ماموریت ما',
            title_ps: 'زموښ موخه',
            title_en: 'Our Mission',
            desc_fa: 'ارائه بهترین خدمات دیجیتال برای رشد کسب‌وکارها',
            desc_ps: 'د سوداګریو د ودې لپاره غوره ډیجیټل خدمتونه وړاندې کول',
            desc_en: 'Providing the best digital services for business growth'
        },
        {
            icon: 'users',
            title_fa: 'تیم ما',
            title_ps: 'زموښ ټیم',
            title_en: 'Our Team',
            desc_fa: 'تیمی متخصص و مجرب با سال‌ها تجربه در صنعت',
            desc_ps: 'د صنعت کې د کلونو تجربې سره متخصص او تجربه لرونکی ټیم',
            desc_en: 'A specialized and experienced team with years of industry experience'
        },
        {
            icon: 'award',
            title_fa: 'کیفیت',
            title_ps: 'کیفیت',
            title_en: 'Quality',
            desc_fa: 'تعهد به بالاترین استانداردهای کیفی در هر پروژه',
            desc_ps: 'په هر پروژه کې د لوړو کیفیتي معیارونو ژمنه',
            desc_en: 'Commitment to the highest quality standards in every project'
        },
        {
            icon: 'zap',
            title_fa: 'نوآوری',
            title_ps: 'نویتوب',
            title_en: 'Innovation',
            desc_fa: 'استفاده از جدیدترین تکنولوژی‌ها و روش‌ها',
            desc_ps: 'د نوو تکنالوژۍ او میتودونو کارول',
            desc_en: 'Using the latest technologies and methods'
        }
    ];
    
    main.innerHTML = `
        <div class="min-h-screen fade-in">
            <!-- Hero -->
            <div
                class="relative h-96 bg-cover bg-center"
                style="background-image: linear-gradient(rgba(59, 130, 246, 0.8), rgba(59, 130, 246, 0.8)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600');">
                <div class="container mx-auto px-4 h-full flex items-center justify-center text-center">
                    <div class="text-white">
                        <h1 class="text-5xl font-bold mb-4">${t('aboutUs')}</h1>
                        <p class="text-xl max-w-2xl mx-auto">
                            ${t('aboutDescription')}
                        </p>
                    </div>
                </div>
            </div>

            <!-- About Content -->
            <div class="container mx-auto px-4 py-16">
                <div class="max-w-4xl mx-auto">
                    <div class="prose prose-lg max-w-none mb-16">
                        <p class="text-gray-700 leading-relaxed text-lg mb-6">
                            ${lang === 'fa' ? 'استودیو کاوش یک مجموعه حرفه‌ای و فعال در زمینه خدمات دیجیتال است. ما با تیمی متشکل از متخصصان مجرب در زمینه‌های طراحی وب، توسعه اپلیکیشن، بازاریابی دیجیتال و طراحی گرافیک، آماده ارائه بهترین خدمات به مشتریان خود هستیم.' : lang === 'ps' ? 'د کاوش سټوډیو یو مسلکي او فعال مجموعه ده چې د ډیجیټل خدمتونو په برخه کې فعاله ده. موښ د متخصصینو او تجربه لرونکو ټیم سره د ویب ډیزاین، اپلیکیشن جوړول، ډیجیټل مارکیټینګ او ګرافیک ډیزاین په برخو کې تاسو ته غوره خدمتونه وړاندې کولو ته چمتو یو.' : 'Kawesh Studio is a professional and active collection in the field of digital services. With a team of experienced specialists in web design, application development, digital marketing and graphic design, we are ready to provide the best services to our customers.'}
                        </p>
                        <p class="text-gray-700 leading-relaxed text-lg mb-6">
                            ${lang === 'fa' ? 'هدف ما در کاوش، کمک به کسب‌وکارها برای رشد و توسعه در فضای دیجیتال است. ما معتقدیم که با استفاده از جدیدترین تکنولوژی‌ها و خلاقیت بی‌پایان، می‌توانیم به مشتریان خود کمک کنیم تا در بازار رقابتی پیشرو باشند.' : lang === 'ps' ? 'زموښ موخه په کاوش کې د سوداګریو سره په ډیجیټل فضا کې د ودې او پراختیا لپاره مرسته ده. موښ په دې باور یو چې د نوو تکنالوژۍ او بې‌پایان خلاقیت په کارولو سره کولای شو خپلو موصلانو سره مرسته وکړو ترڅو په سیالي بازار کې مخکې شي.' : 'Our goal at Kawesh is to help businesses grow and develop in the digital space. We believe that by using the latest technologies and endless creativity, we can help our customers stay ahead in the competitive market.'}
                        </p>
                    </div>

                    <!-- Values Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        ${values.map((value, index) => `
                            <div class="card bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                                <div class="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mb-6">
                                    ${getIconSVG(value.icon, 'w-8 h-8 text-primary')}
                                </div>
                                <h3 class="text-2xl font-bold text-gray-800 mb-3">
                                    ${value[`title_${lang}`]}
                                </h3>
                                <p class="text-gray-600 leading-relaxed">
                                    ${value[`desc_${lang}`]}
                                </p>
                            </div>
                        `).join('')}
                    </div>

                    <!-- Stats -->
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-8 text-white">
                        <div class="text-center">
                            <div class="text-4xl font-bold mb-2">200+</div>
                            <div class="text-white/90">${lang === 'fa' ? 'پروژه تکمیل شده' : lang === 'ps' ? 'بشپړې شوی پروژې' : 'Completed Projects'}</div>
                        </div>
                        <div class="text-center">
                            <div class="text-4xl font-bold mb-2">150+</div>
                            <div class="text-white/90">${lang === 'fa' ? 'مشتری راضی' : lang === 'ps' ? 'خوشحاله موصلان' : 'Happy Clients'}</div>
                        </div>
                        <div class="text-center">
                            <div class="text-4xl font-bold mb-2">10+</div>
                            <div class="text-white/90">${lang === 'fa' ? 'سال تجربه' : lang === 'ps' ? 'کاله تجربه' : 'Years Experience'}</div>
                        </div>
                        <div class="text-center">
                            <div class="text-4xl font-bold mb-2">25+</div>
                            <div class="text-white/90">${lang === 'fa' ? 'تیم حرفه‌ای' : lang === 'ps' ? 'مسلکي ټیم' : 'Team Members'}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    initIcons();
}

Router.register('about', renderAbout);