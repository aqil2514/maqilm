document.addEventListener("DOMContentLoaded", () => {
  const resetButton = document.getElementById("reset-button");
  const inputLists = document.querySelectorAll(".list input");
  const categoryContainer = document.getElementById("category-container");
  const subContainers = document.querySelectorAll(".sub-container");

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
});
