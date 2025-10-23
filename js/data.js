// Services Data
function getServices() {
    return [
        {
            id: '1',
            slug: 'web-design',
            title_fa: 'طراحی وب‌سایت',
            title_ps: 'د ویب ډیزاین',
            title_en: 'Web Design',
            description_fa: 'طراحی و توسعه وب‌سایت‌های حرفه‌ای و رسپانسیو با بهترین تکنولوژی‌ها',
            description_ps: 'د عصري تکنالوژۍ سره د مسلکي او تطبیق ور ویب سایټونو ډیزاین او جوړول',
            description_en: 'Design and development of professional and responsive websites with the best technologies',
            icon: 'code',
            image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800'
        },
        {
            id: '2',
            slug: 'app-design',
            title_fa: 'طراحی اپلیکیشن',
            title_ps: 'د اپلیکیشن ډیزاین',
            title_en: 'App Design',
            description_fa: 'طراحی و توسعه اپلیکیشن‌های موبایل و وب اپلیکیشن با UI/UX برتر',
            description_ps: 'د موبایل او ویب اپلیکیشنونو ډیزاین او جوړول د UI/UX عالي کیفیت سره',
            description_en: 'Design and development of mobile and web applications with superior UI/UX',
            icon: 'smartphone',
            image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800'
        },
        {
            id: '3',
            slug: 'digital-marketing',
            title_fa: 'بازاریابی دیجیتال',
            title_ps: 'ډیجیټل مارکیټینګ',
            title_en: 'Digital Marketing',
            description_fa: 'استراتژی‌های بازاریابی دیجیتال، سئو و مدیریت شبکه‌های اجتماعی',
            description_ps: 'د ډیجیټل مارکیټینګ ستراتیژۍ، SEO او د ټولنیزو شبکو مدیریت',
            description_en: 'Digital marketing strategies, SEO and social media management',
            icon: 'trending-up',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800'
        },
        {
            id: '4',
            slug: 'graphic-design',
            title_fa: 'طراحی گرافیک',
            title_ps: 'ګرافیک ډیزاین',
            title_en: 'Graphic Design',
            description_fa: 'طراحی لوگو، برندینگ، موشن گرافیک و تمام نیازهای گرافیکی شما',
            description_ps: 'د لوګو ډیزاین، برینډینګ، موشن ګرافیک او تاسو تول ګرافیکي اړتیاوې',
            description_en: 'Logo design, branding, motion graphics and all your graphic needs',
            icon: 'palette',
            image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800'
        },
        {
            id: '5',
            slug: 'video-production',
            title_fa: 'ساخت ویدیو تبلیغاتی',
            title_ps: 'د تبلیغاتي ویډیو جوړول',
            title_en: 'Video Production',
            description_fa: 'تولید ویدیوهای تبلیغاتی، شرکتی و محتوای ویدیویی حرفه‌ای',
            description_ps: 'د تبلیغاتي، شرکتي او محتوایي ویډیوګانو تولید',
            description_en: 'Production of advertising, corporate and professional video content',
            icon: 'video',
            image: 'https://images.unsplash.com/photo-1497015289639-54688650d173?w=800'
        },
        {
            id: '6',
            slug: 'hosting',
            title_fa: 'هاستینگ و پشتیبانی',
            title_ps: 'هوسټینګ او ملاتړ',
            title_en: 'Hosting & Support',
            description_fa: 'سرویس‌های هاستینگ با کیفیت بالا و پشتیبانی 24/7',
            description_ps: 'د عالي کیفیت هوسټینګ خدمتونه او 24/7 ملاتړ',
            description_en: 'High-quality hosting services and 24/7 support',
            icon: 'server',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800'
        }
    ];
}

// Portfolio Data
function getPortfolio() {
    return [
        {
            id: '1',
            title_fa: 'وب‌سایت شرکتی مدرن',
            title_ps: 'عصري شرکتي ویب سایټ',
            title_en: 'Modern Corporate Website',
            description_fa: 'طراحی و توسعه وب‌سایت کامل برای یک شرکت فناوری',
            description_ps: 'د ټیکنالوجۍ شرکت لپاره بشپړ ویب سایټ ډیزاین او جوړول',
            description_en: 'Complete website design and development for a technology company',
            category_fa: 'طراحی وب',
            category_ps: 'ویب ډیزاین',
            category_en: 'Web Design',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
            client: 'Tech Corp',
            year: '2024'
        },
        {
            id: '2',
            title_fa: 'اپلیکیشن موبایل فروشگاهی',
            title_ps: 'د پلورنځي موبایل اپلیکیشن',
            title_en: 'E-commerce Mobile App',
            description_fa: 'اپلیکیشن فروشگاهی با قابلیت پرداخت آنلاین',
            description_ps: 'د آنلاین تادیې وړتیا سره پلورنځی اپلیکیشن',
            description_en: 'E-commerce app with online payment capability',
            category_fa: 'طراحی اپلیکیشن',
            category_ps: 'اپلیکیشن ډیزاین',
            category_en: 'App Design',
            image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800',
            client: 'Shop Online',
            year: '2024'
        },
        {
            id: '3',
            title_fa: 'برندینگ کامل شرکت',
            title_ps: 'د شرکت بشپړ برینډینګ',
            title_en: 'Complete Company Branding',
            description_fa: 'طراحی لوگو و هویت بصری کامل برای استارتاپ',
            description_ps: 'د سټارټ اپ لپاره لوګو او بشپړ بصري پیژندنه ډیزاین',
            description_en: 'Logo and complete visual identity design for startup',
            category_fa: 'طراحی گرافیک',
            category_ps: 'ګرافیک ډیزاین',
            category_en: 'Graphic Design',
            image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800',
            client: 'StartUp Inc',
            year: '2024'
        },
        {
            id: '4',
            title_fa: 'کمپین بازاریابی دیجیتال',
            title_ps: 'د ډیجیټل مارکیټینګ کمپاین',
            title_en: 'Digital Marketing Campaign',
            description_fa: 'کمپین جامع بازاریابی دیجیتال برای افزایش فروش',
            description_ps: 'د پلور د زیاتوالي لپاره جامع ډیجیټل مارکیټینګ کمپاین',
            description_en: 'Comprehensive digital marketing campaign to increase sales',
            category_fa: 'بازاریابی دیجیتال',
            category_ps: 'ډیجیټل مارکیټینګ',
            category_en: 'Digital Marketing',
            image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800',
            client: 'Retail Co',
            year: '2024'
        },
        {
            id: '5',
            title_fa: 'ویدیو تبلیغاتی محصول',
            title_ps: 'د محصول تبلیغاتي ویډیو',
            title_en: 'Product Promotional Video',
            description_fa: 'تولید ویدیو تبلیغاتی حرفه‌ای برای معرفی محصول جدید',
            description_ps: 'د نوي محصول معرفي لپاره مسلکي تبلیغاتي ویډیو تولید',
            description_en: 'Professional promotional video production for new product introduction',
            category_fa: 'تولید ویدیو',
            category_ps: 'ویډیو تولید',
            category_en: 'Video Production',
            image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800',
            client: 'Product Inc',
            year: '2024'
        },
        {
            id: '6',
            title_fa: 'سیستم مدیریت محتوا',
            title_ps: 'د منځپانګې مدیریت سیسټم',
            title_en: 'Content Management System',
            description_fa: 'توسعه سیستم مدیریت محتوای اختصاصی',
            description_ps: 'د ځانګړي منځپانګې مدیریت سیسټم جوړول',
            description_en: 'Development of custom content management system',
            category_fa: 'طراحی وب',
            category_ps: 'ویب ډیزاین',
            category_en: 'Web Design',
            image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800',
            client: 'Media House',
            year: '2024'
        }
    ];
}