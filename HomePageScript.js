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
});
