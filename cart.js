function displayCart() {
  let cartItems = localStorage.getItem("itemsInCart");
  cartItems = JSON.parse(cartItems);
  let itemsContainer = document.querySelector(".items");
  if (cartItems && itemsContainer) {
    itemsContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      itemsContainer.innerHTML += `
      <div class="items">
      <i class="fa-solid fa-trash"></i>
      <img src="${item.itemImage}">
      <span>${item.itemTitle}</span>
      </div>
      `;
    });
  }
}

displayCart();
