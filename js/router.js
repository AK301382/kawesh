// Simple Router
const Router = {
    routes: {},
    
    register(path, handler) {
        this.routes[path] = handler;
    },
    
    navigate(path, params = {}) {
        scrollToTop();
        AppState.setPage(path);
        
        // Update URL without page reload
        const url = new URL(window.location);
        url.searchParams.set('page', path);
        if (params.id) {
            url.searchParams.set('id', params.id);
        } else {
            url.searchParams.delete('id');
        }
        window.history.pushState({}, '', url);
        
        // Render the page
        this.render(path, params);
    },
    
    render(path, params = {}) {
        const handler = this.routes[path];
        if (handler) {
            handler(params);
            initIcons();
        } else {
            // Default to home
            this.navigate('home');
        }
    },
    
    init() {
        // Handle back/forward navigation
        window.addEventListener('popstate', () => {
            const page = getQueryParam('page') || 'home';
            const id = getQueryParam('id');
            this.render(page, { id });
        });
        
        // Handle initial page load
        const page = getQueryParam('page') || 'home';
        const id = getQueryParam('id');
        this.render(page, { id });
        
        // Handle all link clicks
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[data-page]');
            if (link) {
                e.preventDefault();
                const page = link.getAttribute('data-page');
                const id = link.getAttribute('data-id');
                this.navigate(page, { id });
            }
        });
    }
};
