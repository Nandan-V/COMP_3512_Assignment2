function setFooterYear() {
    const yearSpan = document.getElementById('footerYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

// Shows one main view at a time by toggling a CSS class.
function showView(viewName) {
    state.currentView = viewName;
    const views = document.querySelectorAll('.view');
    for (let i = 0; i < views.length; i++) {
        views[i].classList.add('hidden');
    }
    const active = document.getElementById('view-' + viewName);
    if (active) {
        active.classList.remove('hidden');
    }
    if (viewName === 'browse') {
        renderBrowseResults();
    }
    if (viewName === 'cart') {
        renderCartView();
    }
}
// Snackbar/toast feedback inspired by Lab 9b Exercise 9b.5.
function showToast(message) {
    const bar = document.getElementById('toast');
    if (!bar) return;
    bar.textContent = message;
    // Re-show toast by forcing the visible class, then hide it after the timeout.
    bar.classList.remove('hidden');
    bar.classList.add('show');
    setTimeout(function () {
        bar.classList.remove('show');
        bar.classList.add('hidden');
    }, 3000);
}

// Top navigation links and cart link 
function setupNav() {
    const navLinks = document.querySelectorAll('[data-view]');
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function (e) {
            e.preventDefault();
            const view = this.getAttribute('data-view');
            // Each nav link declares the target view via data-view.
            if (view) {
                showView(view);
            }
        });
    }

    const cartLink = document.getElementById('cartLink');
    if (cartLink) {
        cartLink.addEventListener('click', function () {
            // Cart is a special view without a data-view attribute.
            showView('cart');
        });
    }
}
