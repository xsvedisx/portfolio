document.addEventListener("DOMContentLoaded", function () {
  // Retrieve and parse the JSON data from the script tag
  const projectsData = document.getElementById("projects-data").textContent;
  let projects;
  try {
    projects = JSON.parse(projectsData);
  } catch (error) {
    console.error("Error parsing JSON data:", error);
    projects = [];
  }

  // Get the container where the cards will be appended
  const container = document.getElementById("cardContainer");

  // Loop through each project and create a card element
  projects.forEach((project) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <div class="portfolioImg hidden">
        <img src="${project.image}" width="100%" alt="${
      project.title
    }" loading="lazy" />
      </div>
      <div class="portfolioDescription hidden">
        <h1 style="color: #0e0e0e">${project.title}</h1>
        <div class="progLangContainer">
          ${project.languages
            .map((lang) => `<div class="progLang">${lang}</div>`)
            .join("")}
        </div>
        <p>${project.description}</p>
        <a href="${
          project.link
        }" class="button" target="_blank">→ Besök sidan</a>
      </div>
    `;
    container.appendChild(card);
  });

  // Function to check if an element is in the viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Add scroll event listener
  window.addEventListener("scroll", function () {
    const images = document.querySelectorAll(".portfolioImg.hidden");
    const descriptions = document.querySelectorAll(
      ".portfolioDescription.hidden"
    );

    images.forEach((img) => {
      if (isInViewport(img)) {
        img.classList.add("show");
        img.classList.remove("hidden");
      }
    });

    descriptions.forEach((desc) => {
      if (isInViewport(desc)) {
        desc.classList.add("show");
        desc.classList.remove("hidden");
      }
    });
  });
});
