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

/**
 * Returns only products matching the current filter selections.
 * 
 */
function applyFilters(list) {
    // Each filter returns early if the current product does not match.
    return list.filter(function (product) {
        if (state.filters.gender.length && state.filters.gender.indexOf(product.gender) === -1) {
            return false;
        }
        if (state.filters.category.length && state.filters.category.indexOf(product.category) === -1) {
            return false;
        }
        if (state.filters.size.length) {
            const matchesSize = state.filters.size.some(function (s) {
                return product.sizes.indexOf(s) !== -1;
            });
            if (!matchesSize) {
                return false;
            }
        }
        if (state.filters.color.length) {
            const matchesColor = state.filters.color.some(function (c) {
                return product.color.some(function (pc) {
                    return pc.name === c;
                });
            });
            if (!matchesColor) {
                return false;
            }
        }
        return true;
    });
}
