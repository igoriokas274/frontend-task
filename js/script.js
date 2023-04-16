"use strict";

// Elements
const containerCategories = document.querySelector(".categories");
const modal = document.querySelector(".modal");
const modalUser = document.querySelector(".modal-user");
const modalCategory = document.querySelector(".modal-category");

const btnOpenModalUser = document.querySelector(".show-modal-user");
const btnOpenModalCategory = document.querySelector(".show-modal-category");
const btnsCloseModal = document.querySelectorAll(".close-modal");
const overlay = document.querySelector(".overlay");

// generate random nested array with categories & subcategories. Please select randomisation value [default = 10]
const randomiser = 10;
const generatedCategories = Array.from(
  { length: Math.trunc(Math.random() * randomiser + 1) },
  (_, i) =>
    Array.from(
      { length: Math.trunc(Math.random() * randomiser + 1) },
      (_, j) => j
    )
);
console.log(generatedCategories);

// display generated categories & subcategories on nav bar
const displayCategories = function (generatedCategories) {
  containerCategories.innerHTML = "";

  for (let i = 0; i < generatedCategories.length; i++) {
    const html = `
      <div class="category-block">
        <a href="#" class="category__value">Category ${i + 1}</a>
      </div>
      `;
    containerCategories.insertAdjacentHTML("beforebegin", html);
    for (let j = 0; j < generatedCategories[i].length; j++) {
      const html = `
        <div class="category-block">
        <div class="subcategory">
        <a href="#" class="subcategory__value">Sub-category ${j + 1}</a>
        </div>
        </div>
        `;
      containerCategories.insertAdjacentHTML("beforebegin", html);
    }
  }
};
displayCategories(generatedCategories);

// MODALS
const openModalUser = function () {
  modalUser.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const openModalCategory = function () {
  modalCategory.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modalUser.classList.add("hidden");
  modalCategory.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnOpenModalUser.addEventListener("click", openModalUser);
btnOpenModalCategory.addEventListener("click", openModalCategory);

for (let i = 0; i < btnsCloseModal.length; i++) {
  btnsCloseModal[i].addEventListener("click", closeModal);
}

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (
    (e.key === "Escape" && !modalUser.classList.contains("hidden")) ||
    !modalCategory.classList.contains("hidden")
  ) {
    closeModal();
  }
});
