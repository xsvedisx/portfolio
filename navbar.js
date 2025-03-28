function toggleMenu() {
  document.querySelector(".mobile-menu").classList.toggle("active");
  document.querySelector(".hamburger").classList.toggle("active");
}

// Close Menu on Click
function closeMenu() {
  document.querySelector(".mobile-menu").classList.remove("active");
  document.querySelector(".hamburger").classList.remove("active");
}

document.querySelectorAll(".nav-links a, .mobile-menu a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default anchor click behavior

    const targetId = this.getAttribute("href").substring(1); // Get the section ID (remove #)
    const targetSection = document.getElementById(targetId); // Get the section element

    // Scroll to the target section with an offset
    window.scrollTo({
      top: targetSection.offsetTop - 50, // 50px offset from the top (adjust as needed)
      behavior: "smooth", // Smooth scroll effect
    });
  });
});
