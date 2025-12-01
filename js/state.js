
var DATA_URL = 'https://gist.githubusercontent.com/rconnolly/d37a491b50203d66d043c26f33dbd798/raw/37b5b68c527ddbe824eaed12073d266d5455432a/clothing-compact.json';
var STORAGE_PRODUCTS_KEY = 'spa_products';
var STORAGE_CART_KEY = 'spa_cart';

// Global state for the single page application.
var state = {
    products: [],
    cart: [],
    currentView: 'home',
    currentProductId: null,
    filters: {
        gender: [],
        category: [],
        size: [],
        color: []
    },
    sortField: 'name',
    sortDirection: 'asc'
};

// Load product data once, caching to localStorage.
// Uses fetch + JSON + localStorage.
async function loadProducts() {
    var stored = localStorage.getItem(STORAGE_PRODUCTS_KEY);
    if (stored) {
        state.products = JSON.parse(stored);
        return;
    }

    try {
        var response = await fetch(DATA_URL);
        var data = await response.json();
        state.products = data;
        localStorage.setItem(STORAGE_PRODUCTS_KEY, JSON.stringify(data));
    } catch (err) {
        console.error(err);
        // showToast is defined in other js file.
        showToast('Error loading products');
    }
}
