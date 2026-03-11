document.addEventListener("DOMContentLoaded", function () {
  const viewAllButtons = document.querySelectorAll(".mobile-view-all-btn");

  viewAllButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      const section = this.closest(".mobile-version");
      const productGrid = section.querySelector(".product-grid-mobile");

      if (productGrid) {
        productGrid.classList.toggle("is-viewing-all");

        this.textContent = productGrid.classList.contains("is-viewing-all")
          ? "View Less"
          : "View All";
      }
    });
  });
});
