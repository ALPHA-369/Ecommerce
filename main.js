let nav = document.querySelector(".header");
let logo = document.querySelector(".logo img");
let lastScrollY = 0;

if (nav) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > lastScrollY) {
      nav.style.transform = "translateY(-100%)";
      logo.classList.add("logo-sticky");
    } else {
      nav.classList.add("header-sticky");
      logo.classList.remove("logo-sticky");
      nav.style.transform = "translateY(0)";
    }
    lastScrollY = window.scrollY;
  });
}

// Menu toggler
var menuItems = document.getElementById("menu-items");
menuItems.style.maxHeight = "0px";

function toggleMenu() {
  if (menuItems.style.maxHeight == "0px") {
    menuItems.style.maxHeight = "200px";
  } else {
    menuItems.style.maxHeight = "0px";
  }
}

// To retrieve details for each product
function viewProductDetails(title, price, image, smImage2, smImage3) {
  const encodedTitle = encodeURIComponent(title);
  const encodedPrice = encodeURIComponent(price);
  const encodedImage = encodeURIComponent(image);
  const encodedsmImage2 = encodeURIComponent(smImage2);
  const encodedsmImage3 = encodeURIComponent(smImage3);

  const url = `product-details.html?title=${encodedTitle}&price=${encodedPrice}&image=${encodedImage}&smImage2=${encodedsmImage2}&smImage3=${encodedsmImage3}`;
  window.location.href = url;
}

// Count No of cart Items
function cartNoCounter() {
  let counterDisplay = document.getElementById("cart-counter");
  var cartCounter = parseInt(localStorage.getItem("cartNumbers"));

  if (cartCounter) {
    counterDisplay.innerText = cartCounter + 1;
  } else {
    counterDisplay.innerText = 1;
    counterDisplay.style.opacity = "100";
  }
}
// Display No of cart items
function displayCartNo() {
  let counterDisplay = document.getElementById("cart-counter");
  var cartCounter = parseInt(localStorage.getItem("cartNumbers"));

  if (cartCounter) {
    counterDisplay.innerText = cartCounter;
    counterDisplay.style.opacity = "100";
  } else {
    counterDisplay.style.opacity = "0";
  }
}

displayCartNo();
