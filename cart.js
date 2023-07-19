let cartItems = localStorage.getItem("itemsInCart");
cartItems = JSON.parse(cartItems);
let emptyCart = document.querySelector(".empty-cart");
let cartContainer = document.querySelector(".cart-container");
let table = document.querySelector(".table");
let cartItem = document.querySelector(".cart-item");

// Display Cart Items
function displayCart() {
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

// Remove Cart Item
// var removeCartItemButtons = document.getElementsByClassName("remove-btn");
// for (var i = 0; i < removeCartItemButtons.length; i++) {
//   var button = removeCartItemButtons[i];
//   button.addEventListener("click", function (event) {
//     let cartItems = localStorage.getItem("productsInCart");
//     cartItems = JSON.parse(cartItems);

//     for (var i in cartItems) {
//       if (cartItems != null) {
//         localStorage.removeItem("cartNumbers", cartItems[i].inCart--);
//         localStorage.removeItem("productsInCart", cartItems[i]);
//         localStorage.removeItem("totalCost");
//       } else {
//         console.log("empty");
//         document.getElementById("demo").innerHTML = "cart is empty";
//       }
//     }
//     location.reload();
//   });
// }
