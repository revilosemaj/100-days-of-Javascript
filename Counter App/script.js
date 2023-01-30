let count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

const setColor = () => {
  if (+count.innerHTML === 0) count.style.color = "white";
  if (count.innerHTML > 0) count.style.color = "yellow";
  if (count.innerHTML < 0) count.style.color = "orangered";
};

buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) count.innerHTML++;
  if (e.target.classList.contains("subtract")) count.innerHTML--;
  if (e.target.classList.contains("reset")) count.innerHTML = 0;

  setColor();
});
