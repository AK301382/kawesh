// Services Data Loader
// این فایل داده‌های کامل سرویس‌ها را بارگذاری می‌کند

const servicesFullData = {
    initialized: false,
    data: {}
};

// بارگذاری تمام داده‌های سرویس‌ها
async function initializeServicesData() {
    if (servicesFullData.initialized) return;
    
    const serviceFiles = {
        'web-design': 'webDesign',
        'app-design': 'appDesign',
        'digital-marketing': 'digitalMarketing',
        'graphic-design': 'graphicDesign',
        'video-production': 'videoProduction',
        'hosting': 'hosting'
    };
    
    for (const [slug, fileName] of Object.entries(serviceFiles)) {
        try {
            const response = await fetch(`js/services-data/${fileName}.js`);
            if (response.ok) {
                const text = await response.text();
                // Parse the export statement
                const match = text.match(/export\s+const\s+\w+Data\s*=\s*(\{[\s\S]*\});?\s*$/m);
                if (match) {
                    // Using eval in a controlled manner for data loading
                    servicesFullData.data[slug] = eval('(' + match[1] + ')');
                }
            }
        } catch (error) {
            console.error(`Failed to load ${slug}:`, error);
        }
    }
    
    servicesFullData.initialized = true;
}

// دریافت داده کامل یک سرویس
function getServiceFullData(slug) {
    return servicesFullData.data[slug] || null;
}

// Export for use in other files
window.servicesFullData = servicesFullData;
window.initializeServicesData = initializeServicesData;
window.getServiceFullData = getServiceFullData;
