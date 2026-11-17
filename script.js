// Optimized Vanilla JS for Navbar & Scroll Behavior
document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");
  const nav = document.querySelector(".navbar");

  if (burger && navLinks && nav) {
    burger.addEventListener("click", () => {
      navLinks.classList.toggle("nav-active");
      burger.classList.toggle("open");
      nav.classList.toggle("scrolled-mini");
    });

    // Close mobile nav when clicking a link
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("nav-active");
        burger.classList.remove("open");
        nav.classList.remove("scrolled-mini");
      });
    });

    // Close mobile nav when clicking outside
    document.addEventListener("click", (e) => {
      if (!nav.contains(e.target) && navLinks.classList.contains("nav-active")) {
        navLinks.classList.remove("nav-active");
        burger.classList.remove("open");
        nav.classList.remove("scrolled-mini");
      }
    });
  }

  // Smooth throttled scroll listener for navbar
  let ticking = false;
  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const isScrolled = window.scrollY > 30;
        if (nav) {
          nav.classList.toggle("scrolled", isScrolled);
        }
        const links = document.querySelectorAll(".nav-links li a");
        links.forEach((link) => {
          link.classList.toggle("scrolled-nav", isScrolled);
        });
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); // initial state check
});
