// Parse the URL parameters to retrieve product details
const urlParams = new URLSearchParams(window.location.search);
const title = decodeURIComponent(urlParams.get("title"));
const price = decodeURIComponent(urlParams.get("price"));
const image = decodeURIComponent(urlParams.get("image"));
const smImage2 = decodeURIComponent(urlParams.get("smImage2"));
const smImage3 = decodeURIComponent(urlParams.get("smImage3"));

// Update the HTML elements with the retrieved product details
document.getElementById("product-img").src = image;
document.getElementById("product-title").innerText = title;
document.getElementById("product-price").innerText = price;
document.getElementById("sm-img-1").src = image;
document.getElementById("sm-img-2").src = smImage2;
document.getElementById("sm-img-3").src = smImage3;

// Product image changer
var ProductImg = document.getElementById("product-img");
var SmallImg = document.getElementsByClassName("sm-gallery-img");

for (let i = 0; i < SmallImg.length; i++) {
  SmallImg[i].addEventListener("click", (e) => {
    ProductImg.src = SmallImg[i].src;
  });
}

//Add items to cart
let items = [
  {
    itemImage: image,
    itemTitle: title,
    itemPrice: parseFloat(price.replace("$", "")),
    inCart: 0,
  },
];

//add event listener to add-to-cart button
let addTocart = document.getElementById("add-to-cart");
addTocart.addEventListener("click", () => {
  cartNumbers(items[0]);
  totalCost(items[0]);
});

// Get Cart Items Number
function cartNumbers(item) {
  let itemNumbers = localStorage.getItem("cartNumbers");
  itemNumbers = parseInt(itemNumbers);
  if (itemNumbers) {
    localStorage.setItem("cartNumbers", itemNumbers + 1);
  } else {
    localStorage.setItem("cartNumbers", 1);
  }
  console.log(itemNumbers);
  setItems(item);
}

function setItems(item) {
  let cartItems = localStorage.getItem("itemsInCart");
  cartItems = JSON.parse(cartItems);
  if (cartItems) {
    if (cartItems[item.itemImage] == undefined) {
      cartItems = {
        ...cartItems,
        [item.itemImage]: item,
      };
    }
    cartItems[item.itemImage].inCart += 1;
  } else {
    item.inCart = 1;
    cartItems = {
      [item.itemImage]: item,
    };
  }

  localStorage.setItem("itemsInCart", JSON.stringify(cartItems));
}
function totalCost(item) {
  let cartCost = localStorage.getItem("totalCost");
  if (cartCost) {
    cartCost = parseFloat(cartCost);
    localStorage.setItem("totalCost", cartCost + item.itemPrice);
  } else {
    localStorage.setItem("totalCost", item.itemPrice);
  }
}
