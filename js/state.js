
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