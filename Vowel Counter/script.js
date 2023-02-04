const btn = document.querySelector(".btn");
const inputText = document.querySelector(".input-text");
const result = document.querySelector(".result");

const counterVowel = () => {
  let str = inputText.value;
  var m = str.match(/[aeiou]/gi);
  let vowelCount = m === null ? 0 : m.length;

  result.innerHTML = str + " has " + vowelCount + " vowel";
};

btn.addEventListener("click", counterVowel);
