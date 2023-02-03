const result = document.querySelector(".result");
const inputText = document.querySelector(".input-text");
const btn = document.querySelector(".btn");

const validatePalindrome = () => {
  let str = inputText.value;

  if (str === str.split("").reverse().join(""))
    result.innerHTML = str + " is a Palindrome";
  else result.innerHTML = str + " is NOT a Palindrome";
};

btn.addEventListener("click", validatePalindrome);
