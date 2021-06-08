const value = document.querySelector(".value");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");

decrease.addEventListener("click", (e) => {
  e.preventDefault();

  value.textContent = parseInt(value.textContent) - 1;

  valueColor(parseInt(value.textContent));
});
increase.addEventListener("click", (e) => {
  e.preventDefault();

  value.textContent = parseInt(value.textContent) + 1;

  valueColor(parseInt(value.textContent));
});
reset.addEventListener("click", (e) => {
  e.preventDefault();

  value.textContent = 0;

  valueColor(parseInt(value.textContent));
});

function valueColor(number) {
  if (number > 0) {
    value.style.color = "green";
  } else if (number < 0) {
    value.style.color = "red";
  } else {
    value.style.color = "#fff";
  }
}
