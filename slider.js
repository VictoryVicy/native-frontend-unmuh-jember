// Smooth Vanilla JS Slider with Prev/Next Controls & Auto-Slide
document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll(".slider-content figure");
  const prevButton = document.querySelector(".slider-navigation .btn-prev");
  const nextButton = document.querySelector(".slider-navigation .btn-next");
  const sliderContainer = document.querySelector(".slider");

  if (!sliders.length) return;

  let currentIndex = 0;
  let autoSlideTimer = null;
  const slideIntervalTime = 6000;

  function showSlide(index) {
    sliders.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add("show");
      } else {
        slide.classList.remove("show");
      }
    });
    currentIndex = index;
  }

  function nextSlide() {
    const nextIndex = (currentIndex + 1) % sliders.length;
    showSlide(nextIndex);
  }

  function prevSlide() {
    const prevIndex = (currentIndex - 1 + sliders.length) % sliders.length;
    showSlide(prevIndex);
  }

  function startAutoSlide() {
    stopAutoSlide();
    autoSlideTimer = setInterval(nextSlide, slideIntervalTime);
  }

  function stopAutoSlide() {
    if (autoSlideTimer) {
      clearInterval(autoSlideTimer);
      autoSlideTimer = null;
    }
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      nextSlide();
      startAutoSlide();
    });
  }

  if (prevButton) {
    prevButton.addEventListener("click", () => {
      prevSlide();
      startAutoSlide();
    });
  }

  // Pause on hover
  if (sliderContainer) {
    sliderContainer.addEventListener("mouseenter", stopAutoSlide);
    sliderContainer.addEventListener("mouseleave", startAutoSlide);
  }

  // Initial display & start
  showSlide(0);
  startAutoSlide();
});
