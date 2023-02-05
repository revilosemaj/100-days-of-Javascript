const coupon = document.querySelector(".coupon");
const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  navigator.clipboard.writeText(coupon.value);

  btn.innerHTML = "copied!!";
  setTimeout(() => {
    btn.innerHTML = "copy";
  }, 1000);
});
