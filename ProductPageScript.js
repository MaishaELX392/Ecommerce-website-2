document.addEventListener("DOMContentLoaded", function () {
  const recSwiper = new Swiper(".recSwiper", {
    slidesPerView: 1.3, // Standard mobile view
    spaceBetween: 15,
    navigation: {
      nextEl: ".arrow-right",
      prevEl: ".arrow-left",
    },
    scrollbar: {
      el: ".swiper-scrollbar-custom",
      draggable: true,
    },
    breakpoints: {
      // Changed from 375 to 481 to prevent 375px breaking
      481: {
        slidesPerView: 2.3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4.3,
        spaceBetween: 20,
      },
    },
  });

  const tabButtons = document.querySelectorAll(".tab-item");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-tab");

      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) =>
        content.classList.remove("active-content"),
      );

      button.classList.add("active");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.classList.add("active-content");
      }

      recSwiper.update();
    });
  });

  const accordionHeaders = document.querySelectorAll(".accordion-header");
  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      this.classList.toggle("active");
      const content = this.nextElementSibling;
      if (content) {
        content.style.display =
          content.style.display === "block" ? "none" : "block";
      }
    });
  });

  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const sideMenu = document.getElementById("sideMenu");
  const menuOverlay = document.getElementById("menuOverlay");
  const closeMenu = document.getElementById("closeMenu");

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", () => {
      sideMenu.classList.add("active");
      menuOverlay.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }

  const hideMenu = () => {
    sideMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
    document.body.style.overflow = "auto";
  };

  if (closeMenu) closeMenu.addEventListener("click", hideMenu);
  if (menuOverlay) menuOverlay.addEventListener("click", hideMenu);
});
