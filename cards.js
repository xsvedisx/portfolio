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
            <div class="portfolioImg">
              <img src="${project.image}" width="100%" alt="${
      project.title
    }" loading="lazy" />
            </div>
            <div class="portfolioDescription">
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
});
