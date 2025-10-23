// Portfolio Page
function renderPortfolio() {
    const main = document.getElementById('main-content');
    const lang = AppState.getLanguage();
    const portfolio = getPortfolio();
    
    main.innerHTML = `
        <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white fade-in">
            <!-- Header -->
            <div class="bg-gradient-to-r from-blue-600 to-blue-500 py-20">
                <div class="container mx-auto px-4 text-center">
                    <h1 class="text-5xl font-bold text-white mb-4">
                        ${t('portfolio')}
                    </h1>
                    <p class="text-xl text-white/90 max-w-2xl mx-auto">
                        ${lang === 'fa' ? 'نمونه کارهای برجسته ما در زمینه‌های مختلف' : lang === 'ps' ? 'زموښ په بیلابیلو برخو کې غوره کارونه' : 'Our outstanding work in various fields'}
                    </p>
                </div>
            </div>

            <!-- Portfolio Grid -->
            <div class="container mx-auto px-4 py-16">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${portfolio.map(item => `
                        <div class="card group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer">
                            <div class="h-64 overflow-hidden">
                                <img
                                    src="${item.image}"
                                    alt="${item[`title_${lang}`]}"
                                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <div class="p-6">
                                <span class="text-sm text-primary font-medium">
                                    ${item[`category_${lang}`]}
                                </span>
                                <h3 class="text-xl font-bold text-gray-800 mt-2 mb-2 group-hover:text-primary transition-colors">
                                    ${item[`title_${lang}`]}
                                </h3>
                                <p class="text-gray-600 text-sm">
                                    ${item[`description_${lang}`]}
                                </p>
                                ${item.client ? `
                                    <div class="mt-4 pt-4 border-t border-gray-100 flex justify-between text-sm text-gray-500">
                                        <span>${lang === 'fa' ? 'مشتری' : lang === 'ps' ? 'موصل' : 'Client'}: ${item.client}</span>
                                        <span>${item.year}</span>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- CTA Section -->
            <div class="bg-gradient-to-r from-blue-600 to-blue-500 py-16">
                <div class="container mx-auto px-4 text-center">
                    <h2 class="text-4xl font-bold text-white mb-6">
                        ${lang === 'fa' ? 'پروژه جدیدی دارید؟' : lang === 'ps' ? 'نوې پروژه لرئ؟' : 'Have a New Project?'}
                    </h2>
                    <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        ${lang === 'fa' ? 'بیایید تا ما آن را به واقعیت تبدیل کنیم' : lang === 'ps' ? 'راشئ چې موښ هغه حقیقت ته بدله کړو' : 'Let us turn it into reality'}
                    </p>
                    <a href="#" data-page="contact" class="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                        ${t('contactNow')}
                    </a>
                </div>
            </div>
        </div>
    `;
    
    initIcons();
}

Router.register('portfolio', renderPortfolio);