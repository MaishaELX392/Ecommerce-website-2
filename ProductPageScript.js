document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Swiper
  const swiper = new Swiper(".recSwiper", {
    slidesPerView: "auto",
    spaceBetween: 10,
    grabCursor: true,
    // Connect your existing arrow buttons
    navigation: {
      nextEl: ".arrow-right",
      prevEl: ".arrow-left",
    },
    // Custom Scrollbar Fill Logic
    on: {
      progress: function (s) {
        const fill = document.querySelector(".swiper-scrollbar-custom");
        if (!fill) return;

        const container = document.querySelector(".scroll-bar-bg");
        const totalWidth = container.offsetWidth;
        const fillWidth = fill.offsetWidth; // 132px from your CSS
        const maxTravel = totalWidth - fillWidth;

        // Calculate movement (s.progress is 0 to 1)
        const move = s.progress * maxTravel;
        fill.style.transform = `translateX(${move}px)`;
      },
    },
  });

  // 2. Tab Switching Logic
  const tabButtons = document.querySelectorAll(".tab-item");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-tab");

      // Update Active Button State
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Update Active Content State
      tabContents.forEach((content) =>
        content.classList.remove("active-content"),
      );

      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add("active-content");

        // CRITICAL: Tell Swiper to recalculate dimensions now that
        // the container is visible (display: block)
        swiper.update();
      }
    });
  });
});
