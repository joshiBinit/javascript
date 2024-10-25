let cart = [];
let total = 0;

document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
});

// Fetch products from Fake Store API
async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Display fetched products
function displayProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product';

        // Create product HTML structure
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h4>${product.title}</h4>
            <p>$${product.price}</p>
            <button id="add-to-cart-${product.id}">Add to Cart</button>
        `;

        productList.appendChild(productItem);

        // Attach event listener for Add to Cart button
        const addToCartBtn = document.getElementById(`add-to-cart-${product.id}`);
        addToCartBtn.addEventListener('click', () => {
            addToCart(product.id, product.title, product.price);
        });
    });
}

// Add product to cart
function addToCart(id, title, price) {
    console.log(`Adding to cart: ${title} - $${price}`); // Debugging log

    // Add the product to the cart array
    cart.push({ id, title, price });
    total += price;

    // Display updated cart
    displayCart();
}

// Display cart items and total price
function displayCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';

    // Update cart content
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.textContent = `${item.title} - $${item.price}`;
        cartElement.appendChild(cartItem);
    });

    // Update total price
    document.getElementById('totalPrice').textContent = `Total: $${total.toFixed(2)}`;
}
