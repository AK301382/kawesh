// Contact Page
function renderContact() {
    const main = document.getElementById('main-content');
    const lang = AppState.getLanguage();
    
    main.innerHTML = `
        <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white fade-in">
            <!-- Header -->
            <div class="bg-gradient-to-r from-blue-600 to-blue-500 py-20">
                <div class="container mx-auto px-4 text-center">
                    <h1 class="text-5xl font-bold text-white mb-4">${t('contactUs')}</h1>
                    <p class="text-xl text-white/90 max-w-2xl mx-auto">
                        ${t('contactDescription')}
                    </p>
                </div>
            </div>

            <div class="container mx-auto px-4 py-16">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <!-- Contact Info -->
                    <div>
                        <h2 class="text-3xl font-bold text-gray-800 mb-8">
                            ${lang === 'fa' ? 'اطلاعات تماس' : lang === 'ps' ? 'د تماس معلومات' : 'Contact Information'}
                        </h2>
                        
                        <div class="space-y-6">
                            <div class="flex items-start space-x-4 space-x-reverse">
                                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    ${getIconSVG('mail', 'w-6 h-6 text-primary')}
                                </div>
                                <div>
                                    <h3 class="font-semibold text-gray-800 mb-1">${lang === 'fa' ? 'ایمیل' : lang === 'ps' ? 'ایمیل' : 'Email'}</h3>
                                    <p class="text-gray-600">${AppConfig.contact.email}</p>
                                    <p class="text-gray-600">${AppConfig.contact.email2}</p>
                                </div>
                            </div>

                            <div class="flex items-start space-x-4 space-x-reverse">
                                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    ${getIconSVG('phone', 'w-6 h-6 text-primary')}
                                </div>
                                <div>
                                    <h3 class="font-semibold text-gray-800 mb-1">${lang === 'fa' ? 'تلفن' : lang === 'ps' ? 'تلیفون' : 'Phone'}</h3>
                                    <p class="text-gray-600">${AppConfig.contact.phone}</p>
                                    <p class="text-gray-600">${AppConfig.contact.phone2}</p>
                                </div>
                            </div>

                            <div class="flex items-start space-x-4 space-x-reverse">
                                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    ${getIconSVG('map-pin', 'w-6 h-6 text-primary')}
                                </div>
                                <div>
                                    <h3 class="font-semibold text-gray-800 mb-1">${lang === 'fa' ? 'آدرس' : lang === 'ps' ? 'آدرس' : 'Address'}</h3>
                                    <p class="text-gray-600">
                                        ${AppConfig.contact.address}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="mt-12 p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                            <h3 class="text-xl font-bold text-gray-800 mb-3">
                                ${lang === 'fa' ? 'ساعات کاری' : lang === 'ps' ? 'د کار ساعتونه' : 'Working Hours'}
                            </h3>
                            <p class="text-gray-700">
                                ${AppConfig.workingHours[lang]}
                            </p>
                            <p class="text-gray-700 mt-2">
                                ${lang === 'fa' ? 'جمعه: تعطیل' : lang === 'ps' ? 'جمعه: رخصتي' : 'Friday: Closed'}
                            </p>
                        </div>
                    </div>

                    <!-- Contact Form -->
                    <div>
                        <form id="contact-form" class="bg-white p-8 rounded-2xl shadow-lg">
                            <h2 class="text-3xl font-bold text-gray-800 mb-6">
                                ${lang === 'fa' ? 'فرم تماس' : lang === 'ps' ? 'د تماس فورمه' : 'Contact Form'}
                            </h2>

                            <div class="space-y-6">
                                <div>
                                    <label class="block text-gray-700 font-medium mb-2" for="name">
                                        ${t('yourName')}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>

                                <div>
                                    <label class="block text-gray-700 font-medium mb-2" for="email">
                                        ${t('yourEmail')}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>

                                <div>
                                    <label class="block text-gray-700 font-medium mb-2" for="phone">
                                        ${t('yourPhone')}
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>

                                <div>
                                    <label class="block text-gray-700 font-medium mb-2" for="message">
                                        ${t('yourMessage')}
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows="5"
                                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    class="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 space-x-reverse"
                                >
                                    <span>${t('send')}</span>
                                    ${getIconSVG('send', 'w-5 h-5')}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    initIcons();
    
    // Form submission handler
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = {
                name: form.name.value,
                email: form.email.value,
                phone: form.phone.value,
                message: form.message.value
            };
            
            // Validate email
            if (!isValidEmail(formData.email)) {
                showToast(lang === 'fa' ? 'ایمیل معتبر نیست' : lang === 'ps' ? 'ایمیل معتبر نه دی' : 'Invalid email', 'error');
                return;
            }
            
            // Show success message (in a real app, this would send to a server)
            showToast(t('messageSent'), 'success');
            
            // Reset form
            form.reset();
            
            // Log to console (for demo purposes)
            console.log('Form submitted:', formData);
        });
    }
}

Router.register('contact', renderContact);
