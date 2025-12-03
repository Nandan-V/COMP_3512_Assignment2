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
