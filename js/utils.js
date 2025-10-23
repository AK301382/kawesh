// Utility Functions

// Show toast notification
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <div class="flex items-center space-x-2">
            <span>${message}</span>
        </div>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            container.removeChild(toast);
        }, 300);
    }, 3000);
}

// Initialize Lucide icons
function initIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Get icon SVG
function getIconSVG(iconName, className = 'w-6 h-6') {
    return `<i data-lucide="${iconName}" class="${className}"></i>`;
}

// Format date
function formatDate(date) {
    const d = new Date(date);
    const lang = AppState.getLanguage();
    return d.toLocaleDateString(lang === 'fa' ? 'fa-IR' : lang === 'ps' ? 'ps-AF' : 'en-US');
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Get query parameter
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Set query parameter
function setQueryParam(param, value) {
    const url = new URL(window.location);
    url.searchParams.set(param, value);
    window.history.pushState({}, '', url);
}

// Loading spinner HTML
function getLoadingSpinner() {
    return `
        <div class="flex items-center justify-center py-16">
            <div class="spinner"></div>
        </div>
    `;
}

// Empty state HTML
function getEmptyState(message) {
    return `
        <div class="text-center py-16">
            <p class="text-gray-500 text-lg">${message}</p>
        </div>
    `;
}

// Validate email
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Truncate text
function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
}

// Add event listener with cleanup
function addEventListenerWithCleanup(element, event, handler) {
    if (element) {
        element.addEventListener(event, handler);
        return () => element.removeEventListener(event, handler);
    }
    return () => {};
}
