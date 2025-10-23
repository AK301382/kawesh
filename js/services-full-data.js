// این فایل شامل تمام داده‌های کامل سرویس‌هاست
// برای استفاده از این داده‌ها به جای data.js، فایل را import کنید

// تابع برای بارگذاری داده کامل هر سرویس
async function loadServiceFullData(slug) {
    try {
        const response = await fetch(`js/services-data/${slug}.js`);
        if (!response.ok) return null;
        
        const text = await response.text();
        // استخراج object از فایل
        const match = text.match(/export\s+const\s+\w+Data\s*=\s*(\{[\s\S]*\});/);
        if (match) {
            return eval('(' + match[1] + ')');
        }
    } catch (error) {
        console.error('Error loading service data:', error);
    }
    return null;
}

window.loadServiceFullData = loadServiceFullData;
