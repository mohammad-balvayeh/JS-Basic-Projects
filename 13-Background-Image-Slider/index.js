const container = document.querySelector(".container");
const btn = document.querySelectorAll(".btn");

const pictures = [
  "./../shared/img/bg/bg-01.jpg",
  "./../shared/img/bg/bg-02.jpg",
  "./../shared/img/bg/bg-03.jpg",
];
let counter = 0;

btn.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    if (item.classList.contains("prev")) {
      counter--;
      if (counter < 0) {
        counter = pictures.length - 1;
      }
      container.style.backgroundImage = `url('${pictures[counter]}')`;
    }
    if (item.classList.contains("next")) {
      counter++;
      if (counter >= pictures.length) {
        counter = 0;
      }
      container.style.backgroundImage = `url('${pictures[counter]}')`;
    }
  });
});
