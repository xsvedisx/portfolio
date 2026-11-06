// Featured project slider: scroll-snap track + prev/next buttons + dots
document.querySelectorAll("[data-slider]").forEach((slider) => {
  const track = slider.querySelector(".slider-track");
  const slides = Array.from(track.children);
  const prev = slider.querySelector(".slider-prev");
  const next = slider.querySelector(".slider-next");
  const dotsWrap = slider.querySelector(".slider-dots");
  let current = 0;

  const dots = slides.map((_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "slider-dot";
    dot.setAttribute("aria-label", `Show image ${i + 1} of ${slides.length}`);
    dot.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(dot);
    return dot;
  });

  function goTo(i) {
    const index = (i + slides.length) % slides.length;
    track.scrollTo({ left: slides[index].offsetLeft, behavior: "smooth" });
  }

  function update(index) {
    current = index;
    dots.forEach((d, i) => d.setAttribute("aria-current", i === index));
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) update(slides.indexOf(entry.target));
      });
    },
    { root: track, threshold: 0.6 },
  );
  slides.forEach((s) => observer.observe(s));

  prev.addEventListener("click", () => goTo(current - 1));
  next.addEventListener("click", () => goTo(current + 1));
  slider.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") goTo(current - 1);
    if (e.key === "ArrowRight") goTo(current + 1);
  });

  update(0);
});
