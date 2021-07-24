var navbarList = document.querySelector(".navbar-list");
var menu = document.querySelector(".menu");

menu.addEventListener("click", function () {
  navbarList.classList.toggle("menu-active")
})