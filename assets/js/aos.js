// Smooth on-scroll reveal using modern IntersectionObserver
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".aos");

  if (!elements.length) return;

  // Set transition-delay if delay attribute is specified
  elements.forEach((el) => {
    const delay = el.getAttribute("delay");
    if (delay) {
      el.style.transitionDelay = `${parseInt(delay, 10)}ms`;
    }
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -40px 0px",
        threshold: 0.1,
      }
    );

    elements.forEach((el) => observer.observe(el));
  } else {
    // Fallback for older browsers
    function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      return rect.top <= windowHeight - 50;
    }

    function checkVisibility() {
      elements.forEach((el) => {
        if (isInViewport(el) && !el.classList.contains("animate")) {
          el.classList.add("animate");
        }
      });
    }

    window.addEventListener("scroll", checkVisibility, { passive: true });
    window.addEventListener("resize", checkVisibility, { passive: true });
    checkVisibility();
  }
});
