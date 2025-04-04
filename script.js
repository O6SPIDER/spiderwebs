document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links a");

    // Toggle the menu visibility when the menu toggle button is clicked
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Auto-hide the menu when a navigation link is clicked
    navItems.forEach((item) => {
        item.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
});
