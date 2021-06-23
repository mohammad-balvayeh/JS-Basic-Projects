const slide = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let index = 0;

prev.addEventListener("click", (e) => {
  e.preventDefault();

  removeActiveClass(slide);
  index--;

  if (index < 0) {
    index = slide.length - 1;
    addActiveClass(slide.length - 1);
  }

  addActiveClass(index);
});

next.addEventListener("click", (e) => {
  e.preventDefault();

  removeActiveClass(slide);
  index++;

  if (index > slide.length - 1) {
    index = 0;
    addActiveClass(0);
  }

  addActiveClass(index);
});

function removeActiveClass(array) {
  array.forEach((item) => {
    item.classList.remove("active");
  });
}

function addActiveClass(index) {
  slide[index].classList.add("active");
}
setInterval(function () {
  removeActiveClass(slide);
  index++;

  if (index > slide.length - 1) {
    index = 0;
    addActiveClass(0);
  }

  addActiveClass(index);
}, 3000);
