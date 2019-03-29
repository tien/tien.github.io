const nav = document.getElementById("navigation");
const menu = nav.getElementsByClassName("nav-bar")[0];
const menuButton = nav.getElementsByClassName("menu-button")[0];

menuButton.addEventListener("click", function() {
  menu.classList.toggle("active");
});
