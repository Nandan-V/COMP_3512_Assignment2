
// createProductCard: builds a product card for display in lists.
function createProductCard(product) {
    const card = document.createElement('article');
    card.className = 'product-card';

    const img = document.createElement('div');
    img.className = 'product-card-image';
    if (product.color && product.color.length > 0) {
        img.style.backgroundColor = product.color[0].hex;
    }
    card.appendChild(img);

    const body = document.createElement('div');
    body.className = 'product-card-body';

    const title = document.createElement('h3');
    title.textContent = product.name;
    body.appendChild(title);

    const price = document.createElement('div');
    price.className = 'product-card-price';
    price.textContent = '$' + product.price.toFixed(2);
    body.appendChild(price);

    const meta = document.createElement('div');
    meta.className = 'product-card-meta';
    meta.textContent = product.gender + ' - ' + product.category;
    body.appendChild(meta);

    card.appendChild(body);

    const actions = document.createElement('div');
    actions.className = 'product-card-actions';

    const viewBtn = document.createElement('button');
    viewBtn.className = 'secondary-button small';
    viewBtn.textContent = 'View';

    const addBtn = document.createElement('button');
    addBtn.className = 'primary-button small';
    addBtn.textContent = '+ Cart';

    actions.appendChild(viewBtn);
    actions.appendChild(addBtn);
    card.appendChild(actions);

    // change the main content area instead of visiting a new page.
    viewBtn.addEventListener('click', function () {
        openProduct(product.id);
    });
    addBtn.addEventListener('click', function () {
        quickAddToCart(product.id);
    });
    img.addEventListener('click', function () {
        openProduct(product.id);
    });
    title.addEventListener('click', function () {
        openProduct(product.id);
    });

    return card;
    }

// openProduct: shows the single product view with all details.
function openProduct(productId) {
    let product = null;
    for (let i = 0; i < state.products.length; i++) {
        if (state.products[i].id === productId) {
            product = state.products[i];
            break;
        }
    }
    if (!product) return;

    state.currentProductId = product.id;

    const crumbs = document.getElementById('productBreadcrumbs');
    if (crumbs) {
        crumbs.textContent = '';
        crumbs.appendChild(document.createTextNode('Home > ' + capitalize(product.gender) + ' > ' + product.category + ' > ' + product.name));
    }
    
    document.getElementById('productTitle').textContent = product.name;
    document.getElementById('productPrice').textContent = '$' + product.price.toFixed(2);
    document.getElementById('productDescription').textContent = product.description;
    document.getElementById('productMaterial').textContent = product.material;



