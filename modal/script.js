const form = document.querySelector("form");
const modal = document.querySelector("#modal");
const closeBtn = document.querySelector(".close");
const modalContent = document.querySelector(".modal-content");

const toggleModal = (e) => {
  e.preventDefault();
  modal.style.display = "block";
};

const closeModal = () => {
  modalContent.classList.add("slide-up");

  setTimeout(() => {
    modal.style.display = "none";
    modalContent.classList.remove("slide-up");
  }, 500);
};

modal.addEventListener("click", closeModal);

form.addEventListener("submit", toggleModal);

closeBtn.addEventListener("click", closeModal);
