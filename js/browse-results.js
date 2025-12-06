/*
 * browse-results.js
 * Applies filters/sorting and renders the Browse product grid.
 *
 *
 */

/**
 * Main entry point to build the Browse results grid.
 * Applies filters/sort, updates counts/messages, and renders product cards.
 */
function renderBrowseResults() {
    const container = document.getElementById('browseResults');
    if (!container) {
        return;
    }
    container.textContent = '';

    const filtered = applyFilters(state.products);
    const sorted = applySort(filtered);

    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) {
        resultsCount.textContent = sorted.length;
    }

    const noResults = document.getElementById('noResultsMessage');
    if (noResults) {
        if (sorted.length > 0) {
            noResults.classList.add('hidden');
        } else {
            noResults.classList.remove('hidden');
        }
    }

    renderActiveFilterChips();

    for (let i = 0; i < sorted.length; i++) {
        const card = createProductCard(sorted[i]);
        container.appendChild(card);
    }
}
