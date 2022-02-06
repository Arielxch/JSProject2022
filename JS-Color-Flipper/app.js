const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
// The querySelector() method returns the first element that matches a CSS selector. 
// . means search for a class! ".color" means search for color class
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // get random number between 0 -3 color [0]; color [1]; color [2]; color [3]...
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  // Math.random gives you number between 0 - 1 (never reach 1);
  // by multiply with colors.length (which is 4), you get a number between 0-3.XXXXX (never reach 4)
  // Math.floor number will run down to an integer;
  return Math.floor(Math.random() * colors.length);

}