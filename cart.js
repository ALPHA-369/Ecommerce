function displayCart() {
  let cartItems = localStorage.getItem("itemsInCart");
  cartItems = JSON.parse(cartItems);
  let table = document.querySelector(".table");
  let cartItem = document.querySelector(".cart-item");
  if (cartItems && table) {
    Object.values(cartItems).map((item) => {
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
          <a class="remove-btn" onclick="remove()">Remove
          </a>
      </div>
  </div>
        `;
      table.appendChild(cartItem);
    });
    let totalCost = localStorage.getItem("totalCost");
    document.querySelector(".total").innerHTML = `Total: $${totalCost}`;
  }
}

displayCart();

function remove() {
  let cartItems = localStorage.getItem("itemsInCart");
  cartItems = JSON.parse(cartItems);
  let table = document.querySelector(".table");
  let cartItem = document.querySelector(".cart-item");
  if (cartItems && table) {
    Object.values(cartItems).map((item) => {
      cartItem.innerHTML += "";
    });
  }
}
