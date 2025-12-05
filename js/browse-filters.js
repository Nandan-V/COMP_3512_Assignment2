/*
 * browse-filters.js
 * Builds dynamic filter lists and wires up filter / sort controls.

 */

// buildDynamicFilters: scans products and builds checkbox lists.
function buildDynamicFilters() {
    const categories = [];
    const sizes = [];
    const colors = [];

    for (let i = 0; i < state.products.length; i++) {
        const p = state.products[i];
        if (categories.indexOf(p.category) === -1) {
            categories.push(p.category);
        }
        for (let j = 0; j < p.sizes.length; j++) {
            const s = p.sizes[j];
            if (sizes.indexOf(s) === -1) {
                sizes.push(s);
            }
        }
        for (let k = 0; k < p.color.length; k++) {
            const c = p.color[k];
            if (colors.indexOf(c.name) === -1) {
                colors.push(c.name);
            }
        }
    }

    categories.sort();
    sizes.sort();
    colors.sort();

    populateCheckboxGroup('filter-category', categories);
    populateCheckboxGroup('filter-size', sizes);
    populateCheckboxGroup('filter-color', colors);
}
