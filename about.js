// About me modal
const aboutModal = document.getElementById("aboutModal");

document.querySelectorAll("[data-open-about]").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    aboutModal.showModal();
  });
});

aboutModal.querySelector(".aboutClose").addEventListener("click", () => {
  aboutModal.close();
});

// Close when clicking the backdrop
aboutModal.addEventListener("click", (e) => {
  if (e.target === aboutModal) aboutModal.close();
});
