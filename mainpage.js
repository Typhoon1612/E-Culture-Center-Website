const menuIcon = document.getElementById("bars-icon");
const dropdownMenu = document.getElementById("nav_section");

menuIcon.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show-nav-section");
});
