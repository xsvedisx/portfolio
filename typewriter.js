const texts = ["UTVECKLARE", "FRONTEND", "BACKEND"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
const typingDelay = 150;
const deletingDelay = 60;
const pauseDelay = 2000; // Delay before deleting

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

// Initialize the typewriter effect
document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});
