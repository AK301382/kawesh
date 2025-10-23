// Main Application Entry Point

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Render navbar and footer
    renderNavbar();
    renderFooter();
    
    // Initialize router
    Router.init();
    
    // Update navbar and footer when language changes
    window.addEventListener('languagechange', () => {
        renderNavbar();
        renderFooter();
    });
});

// Refresh UI components
function refreshUI() {
    renderNavbar();
    renderFooter();
    const currentPage = AppState.getPage();
    const id = getQueryParam('id');
    Router.render(currentPage, { id });
}

// Console welcome message
console.log('%c🎨 Kawesh Studio', 'color: #3b82f6; font-size: 24px; font-weight: bold;');
console.log('%cWelcome to Kawesh Studio Website', 'color: #666; font-size: 14px;');
console.log('%cBuilt with ❤️ using Vanilla JavaScript', 'color: #999; font-size: 12px;');
