const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");

burger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

const themeToggle = document.querySelector(".theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

const modal = document.querySelector(".modal");
const openModal = document.getElementById("openModal");
const closeModal = document.querySelector(".close-modal");

openModal.addEventListener("click", () => {
  modal.classList.add("show");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("show");
});
