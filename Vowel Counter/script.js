const btn = document.querySelector(".btn");
const inputText = document.querySelector(".input-text");
const result = document.querySelector(".result");

const countVowel = () => {
  let str = inputText.value;
  const m = str.match(/[aeiou]/gi);
  const vowelCount = m === null ? 0 : m.length;

  result.innerHTML = `${str.toUpperCase()} has ${vowelCount} vowels`;
};

btn.addEventListener("click", countVowel);
