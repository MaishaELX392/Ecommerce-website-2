document.addEventListener("DOMContentLoaded", function () {
  const viewAllButtons = document.querySelectorAll(".mobile-view-all-btn");

  viewAllButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const section = this.closest(".mobile-version");
      const grid = section.querySelector(".product-grid-mobile");

      if (grid) {
        grid.classList.toggle("is-viewing-all");

        if (grid.classList.contains("is-viewing-all")) {
          this.textContent = "View Less";
        } else {
          this.textContent = "View All";
        }
      }
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
