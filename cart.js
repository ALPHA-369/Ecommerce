// Display Cart Items
function displayCart() {
  let cartItems = localStorage.getItem("itemsInCart");
  cartItems = JSON.parse(cartItems);
  let emptyCart = document.querySelector(".empty-cart");
  let cartContainer = document.querySelector(".cart-container");
  let table = document.querySelector(".table");
  let cartItem = document.querySelector(".cart-item");

  if (cartItems && table) {
    Object.values(cartItems).map((item) => {
      emptyCart.style.display = "none";
      cartItem.innerHTML += `
      <div class="cart-row">
      <div class="cell item">
          <div class="item-info">
              <div class="item-image">
                  <img src="${item.itemImage}">
              </div>
              <div class="item-details">
                  <p class="item-name">${item.itemTitle}</p>
                  <small class="item-price">Price: $${item.itemPrice}</small>
              </div>
          </div>
      </div>
      <div class="cell">
          <input type="number" value="${item.inCart}" min="1" class="quantity">
      </div>
      <div class="cell subtotal">$${item.itemPrice * item.inCart}</div>
      <div class="cell">
          <a class="remove-btn">Remove
          </a>
      </div>
  </div>
        `;
      table.appendChild(cartItem);
    });
    let totalCost = localStorage.getItem("totalCost");
    document.querySelector(".total").innerHTML = `Total: $${totalCost}`;
  } else {
    cartContainer.style.display = "none";
  }
}

displayCart();

// Remove item from cart
function removeItem(itemImage) {
  let cartItems = localStorage.getItem("itemsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems && cartItems[itemImage]) {
    let item = cartItems[itemImage];
    let cartNumbers = parseInt(localStorage.getItem("cartNumbers"));
    let totalCost = parseFloat(localStorage.getItem("totalCost"));

    // Update cart numbers and total cost
    localStorage.setItem("cartNumbers", cartNumbers - item.inCart);
    localStorage.setItem("totalCost", totalCost - item.itemPrice * item.inCart);

    // Remove the item from cart
    delete cartItems[itemImage];
    localStorage.setItem("itemsInCart", JSON.stringify(cartItems));

    // Reload the page
    location.reload();
  }
}

// Add click event listeners to remove buttons
function addRemoveListeners() {
  let removeButtons = document.querySelectorAll(".remove-btn");
  removeButtons.forEach((btn, index) => {
    let cartItems = JSON.parse(localStorage.getItem("itemsInCart"));
    let itemImage = Object.keys(cartItems)[index];

    btn.addEventListener("click", () => {
      removeItem(itemImage);
    });
  });
}

// Call the function after displaying cart
setTimeout(() => {
  addRemoveListeners();
}, 100);
