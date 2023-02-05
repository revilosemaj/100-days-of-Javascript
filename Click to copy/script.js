const coupon = document.querySelector(".coupon");
const btn = document.querySelector(".btn");

const copyText = (e) => {
  e.preventDefault();

  navigator.clipboard.writeText(coupon.value).then(() => {
    btn.innerHTML = "copied!!";
    setTimeout(() => {
      btn.innerHTML = "copy";
    }, 3000);
  });
};
btn.addEventListener("click", copyText);
