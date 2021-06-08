const body = document.querySelector("body");
const reset = document.querySelector("#reset");
const changeBG = document.querySelector("#change-bg");
const color = document.querySelector(".color");

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

reset.addEventListener("click", (e) => {
  e.preventDefault();
  body.style.backgroundColor = "#F1f5f8";
  color.textContent = "#F1f5f8";
});

changeBG.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  color.textContent = hexColor;
  body.style.backgroundColor = hexColor;
});
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
