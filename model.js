// Dynamic & Resilient Modal System
document.addEventListener("DOMContentLoaded", function () {
  // Support standard numbered modals (1 through 10) safely
  for (let i = 1; i <= 10; i++) {
    const openBtn = document.getElementById(`open${i}`);
    const closeBtn = document.getElementById(`close${i}`);
    const modalContainer = document.getElementById(`modal_container${i}`);

    if (openBtn && modalContainer) {
      openBtn.addEventListener("click", function (e) {
        e.preventDefault();
        modalContainer.classList.add("show-m");
      });
    }

    if (closeBtn && modalContainer) {
      closeBtn.addEventListener("click", function (e) {
        e.preventDefault();
        modalContainer.classList.remove("show-m");
      });
    }

    // Close on backdrop click (outside modal content)
    if (modalContainer) {
      modalContainer.addEventListener("click", function (e) {
        if (e.target === modalContainer) {
          modalContainer.classList.remove("show-m");
        }
      });
    }
  }

  // Close active modal on Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      const activeModals = document.querySelectorAll(".modal-container.show-m");
      activeModals.forEach((modal) => modal.classList.remove("show-m"));
    }
  });
});
