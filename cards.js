document.addEventListener("DOMContentLoaded", function () {
  const projectsData = document.getElementById("projects-data").textContent;
  let projects;

  try {
    projects = JSON.parse(projectsData);
  } catch (error) {
    console.error("Error parsing JSON data:", error);
    projects = [];
  }

  const container = document.getElementById("cardContainer");
  const iconMap = {
    javascript: "devicon-javascript-plain",
    threejs: "devicon-threejs-original",
    "three.js": "devicon-threejs-original",
    blender: "devicon-blender-original",
    react: "devicon-react-original",
    "node.js": "devicon-nodejs-plain",
    nodejs: "devicon-nodejs-plain",
    postgresql: "devicon-postgresql-plain",
    html: "devicon-html5-plain",
    html5: "devicon-html5-plain",
    css: "devicon-css3-plain",
    css3: "devicon-css3-plain",
    php: "devicon-php-plain",
    mysql: "devicon-mysql-plain",
    mongodb: "devicon-mongodb-plain",
    angular: "devicon-angularjs-plain",
    "html/css": ["devicon-html5-plain", "devicon-css3-plain"],
  };

  function escapeHtml(value) {
    return value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function renderLanguageBadge(lang) {
    const key = lang.trim().toLowerCase();
    const iconClass = iconMap[key];
    const safeLang = escapeHtml(lang);

    if (Array.isArray(iconClass)) {
      return `<div class="progLang" title="${safeLang}" aria-label="${safeLang}">${iconClass
        .map((icon) => `<i class="${icon}"></i>`)
        .join("")}</div>`;
    }

    if (iconClass) {
      return `<i class="${iconClass}"></i>`;
    }

    return `<div class="progLang">${safeLang}</div>`;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.remove("hidden");
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15 },
  );

  projects.forEach((project) => {
    const card = document.createElement("article");
    card.classList.add("project-card", "hidden");

    card.innerHTML = `
      <div class="project-media">
        <img src="${project.image}" alt="${project.title}" loading="lazy" />
      </div>
      <div class="project-content">
        <h3>${project.title}</h3>
        <div class="progLangContainer">
          ${project.languages.map((lang) => renderLanguageBadge(lang)).join("")}
        </div>
        <p>${project.description}</p>
        <a href="${project.link}" class="button" target="_blank" rel="noopener noreferrer">Visit Project</a>
      </div>
    `;

    container.appendChild(card);
    observer.observe(card);
  });
});
