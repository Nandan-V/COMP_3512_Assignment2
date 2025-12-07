/*
 * cart.js

 */

// setupCartControls: adds event listeners for shipping options and checkout button.
function setupCartControls() {
    const shippingMethod = document.getElementById('shippingMethod');
    const shippingDestination = document.getElementById('shippingDestination');
    const checkoutButton = document.getElementById('checkoutButton');

    if (shippingMethod) {
        shippingMethod.addEventListener('change', updateCartSummary);
    }
    if (shippingDestination) {
        shippingDestination.addEventListener('change', updateCartSummary);
    }
    if (checkoutButton) {
        checkoutButton.addEventListener('click', function () {
            if (state.cart.length === 0) return;
            showToast('Checkout complete');
            state.cart = [];
            saveCartToStorage();
            updateCartCount();
            renderCartView();
            showView('home');
        });
    }
}
