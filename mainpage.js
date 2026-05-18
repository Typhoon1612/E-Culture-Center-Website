const menuIcon = document.getElementById("bars-icon");
const drawerMenu = document.getElementById("nav_section");

// Create overlay
const overlay = document.createElement("div");
overlay.classList.add("drawer-overlay");
document.body.appendChild(overlay);

function openDrawer() {
    drawerMenu.classList.add("show-nav-section");
    overlay.classList.add("show");
    document.body.style.overflow = "hidden";
}

function closeDrawer() {
    drawerMenu.classList.remove("show-nav-section");
    overlay.classList.remove("show");
    document.body.style.overflow = "";
}

// Toggle drawer on hamburger click
menuIcon.addEventListener("click", () => {
    drawerMenu.classList.contains("show-nav-section") ? closeDrawer() : openDrawer();
});

overlay.addEventListener("click", closeDrawer);

// Close drawer when a nav link is clicked
drawerMenu.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", closeDrawer);
});
