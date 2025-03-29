const texts = ["UTVECKLARE", "FRONTEND", "BACKEND"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
const typingDelay = 150;
const deletingDelay = 60;
const pauseDelay = 2000; // Delay before deleting
const startDelay = 600; // 1 second delay before starting

function typeEffect() {
  const typewriter = document.getElementById("typewriter");

  if (index < texts.length) {
    if (!isDeleting && charIndex <= texts[index].length) {
      currentText = texts[index].substring(0, charIndex);
      typewriter.textContent = currentText;
      charIndex++;
      setTimeout(typeEffect, typingDelay);
    } else if (isDeleting && charIndex > 0) {
      currentText = texts[index].substring(0, charIndex);
      typewriter.textContent = currentText;
      charIndex--;
      setTimeout(typeEffect, deletingDelay);
    } else {
      if (!isDeleting) {
        isDeleting = true;
        setTimeout(typeEffect, pauseDelay); // Pause before deleting
      } else {
        isDeleting = false;
        index++;
        setTimeout(typeEffect, typingDelay);
      }
    }
  } else {
    index = 0; // Restart typing cycle
    setTimeout(typeEffect, typingDelay);
  }
}

// Initialize the typewriter effect after a 1-second delay
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeEffect, startDelay); // Start after 1 second
});
