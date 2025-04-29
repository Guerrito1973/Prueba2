document.addEventListener('DOMContentLoaded', () => {
    const chairList = [
        {
            id: 'chair1',
            name: 'Chair 1',
            dimensions: '40x40x90 cm',
            materials: 'Wood, Fabric',
            price: 100,
            image: 'images/chairs/chair1.jpg'
        },
        {
            id: 'chair2',
            name: 'Chair 2',
            dimensions: '45x45x95 cm',
            materials: 'Metal, Leather',
            price: 150,
            image: 'images/chairs/chair2.jpg'
        },
        {
            id: 'chair3',
            name: 'Chair 3',
            dimensions: '50x50x100 cm',
            materials: 'Plastic, Fabric',
            price: 80,
            image: 'images/chairs/chair3.jpg'
        }
    ];

    const cart = [];
    const chairDetails = document.getElementById('details-content');
    const cartContent = document.getElementById('cart-content');
    const checkoutButton = document.getElementById('checkout-button');
    const authContent = document.getElementById('auth-content');

    function displayChairDetails(chair) {
        chairDetails.innerHTML = `
            <h3>${chair.name}</h3>
            <img src="${chair.image}" alt="${chair.name}">
            <p>Dimensions: ${chair.dimensions}</p>
            <p>Materials: ${chair.materials}</p>
            <p>Price: $${chair.price}</p>
        `;
    }

    function addToCart(chair) {
        cart.push(chair);
        updateCart();
    }

    function updateCart() {
        cartContent.innerHTML = '';
        cart.forEach(chair => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <h4>${chair.name}</h4>
                <p>Price: $${chair.price}</p>
            `;
            cartContent.appendChild(cartItem);
        });
    }

    function handleCheckout() {
        alert('Checkout process initiated.');
    }

    function handleSearch(query) {
        const results = chairList.filter(chair => chair.name.toLowerCase().includes(query.toLowerCase()));
        displaySearchResults(results);
    }

    function displaySearchResults(results) {
        const chairListSection = document.getElementById('chair-list');
        chairListSection.innerHTML = '';
        results.forEach(chair => {
            const chairElement = document.createElement('div');
            chairElement.classList.add('chair');
            chairElement.id = chair.id;
            chairElement.innerHTML = `
                <img src="${chair.image}" alt="${chair.name}">
                <h3>${chair.name}</h3>
                <p>Dimensions: ${chair.dimensions}</p>
                <p>Materials: ${chair.materials}</p>
                <p>Price: $${chair.price}</p>
                <button>Add to Cart</button>
            `;
            chairListSection.appendChild(chairElement);
        });
    }

    function handleAuthentication() {
        authContent.innerHTML = `
            <form id="login-form">
                <h3>Login</h3>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
                <button type="submit">Login</button>
            </form>
            <form id="register-form">
                <h3>Register</h3>
                <label for="new-username">Username:</label>
                <input type="text" id="new-username" name="new-username" required>
                <label for="new-password">Password:</label>
                <input type="password" id="new-password" name="new-password" required>
                <button type="submit">Register</button>
            </form>
        `;
    }

    function handleReviewsAndRatings() {
        // Placeholder for reviews and ratings functionality
    }

    function handleRecommendations() {
        // Placeholder for recommendation system functionality
    }

    function handleComparison() {
        // Placeholder for comparison feature functionality
    }

    function handleWishlist() {
        // Placeholder for wishlist functionality
    }

    function handleOrderTracking() {
        // Placeholder for order tracking functionality
    }

    function handleResponsiveDesign() {
        // Placeholder for responsive design functionality
    }

    chairList.forEach(chair => {
        const chairElement = document.getElementById(chair.id);
        chairElement.addEventListener('click', () => displayChairDetails(chair));
        chairElement.querySelector('button').addEventListener('click', () => addToCart(chair));
    });

    checkoutButton.addEventListener('click', handleCheckout);
    handleAuthentication();
    handleReviewsAndRatings();
    handleRecommendations();
    handleComparison();
    handleWishlist();
    handleOrderTracking();
    handleResponsiveDesign();
});
