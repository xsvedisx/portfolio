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
  const navbar = document.querySelector(".navbar");
  const mobileMenu = document.querySelector(".mobile-menu");

  // Use a lower threshold for mobile devices
  const threshold = window.innerWidth < 768 ? 5 : 50;

  if (window.scrollY >= window.innerHeight - threshold) {
    navbar.classList.add("scrolledInvert");
    mobileMenu.classList.add("scrolledInvert");
  } else if (
    window.scrollY >= threshold &&
    window.scrollY < window.innerHeight - threshold
  ) {
    navbar.classList.add("scrolled");
    navbar.classList.remove("scrolledInvert");
    mobileMenu.classList.remove("scrolledInvert");
  } else {
    navbar.classList.remove("scrolled");
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
