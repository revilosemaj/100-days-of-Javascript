const backgroundColor = document.querySelector("body");
const hex = document.querySelector(".hex");
const generate = document.querySelector(".generate");

const getRandomColor = () => {
  const randomColor = "#" + Math.random().toString(16).substring(2, 8);

  hex.innerHTML = randomColor;
  backgroundColor.style.backgroundColor = randomColor;
};

generate.addEventListener("click", getRandomColor);
getRandomColor();
