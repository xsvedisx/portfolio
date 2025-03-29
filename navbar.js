function toggleMenu() {
  document.querySelector(".mobile-menu").classList.toggle("active");
  document.querySelector(".hamburger").classList.toggle("active");
}

// Close Menu on Click
function closeMenu() {
  document.querySelector(".mobile-menu").classList.remove("active");
  document.querySelector(".hamburger").classList.remove("active");
}

window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  const mobileMenu = document.querySelector(".mobile-menu");
  const height = window.innerHeight;

  if (window.scrollY >= height - 50) {
    // Efter två fönsterhöjder
    navbar.classList.add("scrolledInvert");
    mobileMenu.classList.add("scrolledInvert");
  } else if (window.scrollY >= 50 && window.scrollY < height * 2 - 50) {
    // Mellan 50px och två fönsterhöjder
    navbar.classList.add("scrolled");
    navbar.classList.remove("scrolledInvert");
    mobileMenu.classList.remove("scrolledInvert");
  } else {
    // Mindre än 50px
    navbar.classList.remove("scrolled");
    navbar.classList.remove("scrolledInvert");
    mobileMenu.classList.remove("scrolledInvert");
  }
});

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
