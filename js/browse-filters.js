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

// buildGenderFilterList: populates the gender filter checkboxes.
// Follows the dynamic list-building style from Lab 8 and Lab 9a.
function buildGenderFilterList() {
    const container = document.getElementById('genderFilterList');
    if (!container){
    return;
    } 
    container.textContent = '';

    const genders = [];
    for (let i = 0; i < state.products.length; i++) {
        const gender = state.products[i].gender;
        if (genders.indexOf(gender) === -1) {
            genders.push(gender);
        }
    }
    for (let i = 0; i < genders.length; i++) {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.name = 'gender';
        input.value = genders[i];
        if (state.filters.gender.indexOf(genders[i]) !== -1) {
            input.checked = true;
        }
        input.addEventListener('change', function () {
            toggleFilter('gender', this.value, this.checked);
        });
        label.appendChild(input);
        label.appendChild(document.createTextNode(' ' + capitalize(genders[i])));
        container.appendChild(label);
    }
}

// populateCheckboxGroup: helper that fills a container with <label><input>.
function populateCheckboxGroup(containerId, values) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.textContent = '';
    for (let i = 0; i < values.length; i++) {
        const value = values[i];
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.value = value;
        label.appendChild(input);
        label.appendChild(document.createTextNode(' ' + value));
        container.appendChild(label);
    }
}

