const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");
const searchIcon = document.getElementById("search-icon");
const searchBox = document.querySelector(".search-box");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

searchIcon.addEventListener("click", () => {
    searchBox.classList.toggle("active");
});







        