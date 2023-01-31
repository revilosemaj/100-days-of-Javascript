let number = document.querySelector(".number");
const generate = document.querySelector(".generate");

const generateNumber = () =>
  (number.innerHTML = Math.floor(Math.random() * 1000000));

generate.addEventListener("click", generateNumber);

generateNumber();
