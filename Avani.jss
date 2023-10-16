// JavaScript (script.js)

// Function to add a product to the cart
function addToCart(productName, price) {
    // Check if cart exists in local storage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add the product to the cart
    cart.push({ name: productName, price: price });

    // Update the cart in local storage
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Function to display the cart
function displayCart() {
    // Retrieve the cart from local storage
    let cart = JSON.parse(localStorage.getItem
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Flipkart Clone</title>
</head>
<body>
    <div class="product">
        <img src="product1.jpg" alt="Product 1">
        <h2>Product 1</h2>
        <p>Description of Product 1</p>
        <p>Price: $50</p>
        <button class="buy-button">Buy Now</button>
    </div>
    
    <div class="product">
        <!-- Repeat this structure for more products -->
    </div>

    <script src="script.js"></script>
</body>
</html>
.product {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    width: 250px;
    display: inline-block;
    text-align: center;
}

img {
    max-width: 100%;
}

.buy-button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}const buyButtons = document.querySelectorAll('.buy-button');

buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Product added to cart');
        // You can implement cart functionality here
    });
});
