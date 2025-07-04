
let productsHTML = "";
products.forEach((product) => {
    productsHTML += `
        <div class="product-container">
            <div class="product-image-container">
                <img class="product-image"
                src="${product.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
               ${product.name}
            </div>

            <div class="product-rating-container">
                <img class="product-rating-stars"
                src="./images/rating-${product.rating.stars *10}.png">
                <div class="product-rating-count link-primary">
                ${product.rating.count}
                </div>
            </div>

            <div class="product-price">
                $${(product.priceCents / 100).toFixed(2)}
            </div>

            <div class="product-quantity-container">
                <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart">
                <img src="images/checkmark.png">
                Added
            </div>


    
            <button class="add-to-cart-button button-primary">
                Add to Cart
            </button>
        </div>
    `;
});

console.log(productsHTML);
document.querySelector(".products-grid").innerHTML = productsHTML;

const cart = [];
document.querySelectorAll(".add-to-cart-button").forEach((button, index) => {
    button.addEventListener("click", () => {
        const product = products[index];

        // Check if the product is already in the cart
        let cartItem = cart.find(item => item.name === product.name);
        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            cart.push({
                name: product.name,
                quantity: 1
            });
        }

    let cartQuantity = 0;
    cart.forEach((item) => {
        cartQuantity += item.quantity;
    });
    const cartQuantityElement = document.querySelector(".cart-quantity");
    if (cartQuantityElement) {
        cartQuantityElement.innerHTML = cartQuantity;
    }

        console.log(cartQuantity);
        console.log(cart)
    });
});

function  removeFromCart(productName) {
    const newCart =[];
    if (!productName) {
    newCart.push(cartItem)
    }
    
    cart = newCart;
}









