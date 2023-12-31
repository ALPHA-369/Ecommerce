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
