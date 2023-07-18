let loginForm = document.querySelector("#loginForm");
let signUpForm = document.querySelector("#signUpForm");
let indicator = document.querySelector("#indicator");
let width = window.innerWidth;
console.log(width);
function signup() {
  signUpForm.style.transform = "translateX(0)";
  loginForm.style.transform = "translateX(0)";
  indicator.style.transform = "translateX(135px)";
}
function login() {
  signUpForm.style.transform = "translateX(350px)";
  loginForm.style.transform = "translateX(350px)";
  indicator.style.transform = "translateX(8px)";
}
