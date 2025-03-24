document.addEventListener("DOMContentLoaded", () => {
  const resetButton = document.getElementById("reset-button");
  const inputLists = document.querySelectorAll(".list input");
  const categoryContainer = document.getElementById("category-container");
  const subContainers = document.querySelectorAll(".sub-container");
  const isMobile = window.screen.width <= 720;

  function applyMobileDisplay() {
    categoryContainer.classList.replace(
      "category-container",
      "category-container-mobile"
    );
    categoryContainer.classList.remove("horizontal-layout");
    categoryContainer.classList.remove("vertical-layout");
    subContainers.forEach((sub) => sub.remove());
  }

  function removeMobileDisplay() {
    const isMobile = categoryContainer.classList.contains(
      "category-container-mobile"
    );

    if (isMobile) {
      window.location.reload();
      return;
    }
  }

  isMobile ? applyMobileDisplay() : removeMobileDisplay();

  resetButton.addEventListener("click", () => {
    // Event 1 : Ubah layout jadi horizontal
    inputLists.forEach((e) => (e.checked = false));
    categoryContainer.classList.replace("vertical-layout", "horizontal-layout");

    // Event 2 : Tambahkan class hidden ke setiap subcontainer
    subContainers.forEach((subCat) => {
      subCat.classList.add("hidden");
    });

    // Event 3 : Tambahkan class hidden ke tombol reset
    resetButton.classList.add("hidden");
  });

  inputLists.forEach((radio) => {
    radio.addEventListener("change", () => {
      const radioArray = Array.from(inputLists);
      const isMobile = categoryContainer.classList.contains(
        "category-container-mobile"
      );

      if (isMobile) {
        const category = encodeURIComponent(radio.dataset.category.toLowerCase().replaceAll(" ", "-"));
        window.location = `/category/${category}`;
        return;
      }

      //   Event 1: Munculkan subcategory dari category yang dipilih
      const dataCategory = radio.dataset.category;
      subContainers.forEach((subCat) => {
        const dataSubCat = subCat.dataset.category;
        if (dataCategory !== dataSubCat) {
          subCat.classList.add("hidden");
          return;
        }

        const selectedDiv = document.querySelector(
          `.sub-container[data-category="${dataSubCat}"]`
        );
        selectedDiv.classList.remove("hidden");
      });

      //   Event 2 : Ubah layout dari horizontal menjadi vertical dan sebaliknya
      if (radioArray.some((radio) => radio.checked === true)) {
        categoryContainer.classList.replace(
          "horizontal-layout",
          "vertical-layout"
        );
      } else {
        categoryContainer.classList.replace(
          "vertical-layout",
          "horizontal-layout"
        );
      }

      // Event 3 : Hapus class hidden ke tombol reset
      resetButton.classList.remove("hidden");
    });
  });

  window.addEventListener("resize", () => {
    const isMobile = window.screen.width <= 720;

    if (isMobile) {
      applyMobileDisplay();
      return;
    }
    removeMobileDisplay();
    return;
  });
});
