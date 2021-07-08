const input = document.querySelector(".input");

const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");

const num = document.querySelectorAll(".num");
const pin = document.querySelector(".pin");

const operator = document.querySelectorAll(".operator");

let op = "",
  number1,
  number2;

num.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    input.textContent += e.target.dataset.key;
  });
});

pin.addEventListener("click", (e) => {
  e.preventDefault();

  if (!input.textContent.includes(e.target.dataset.key)) {
    input.textContent += e.target.dataset.key;
  }
});

operator.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    if (op == "") {
      number1 = Number(input.textContent);
      op = e.target.dataset.key;
      input.textContent = "";
    }
  });
});

equals.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.textContent != "" && op != "") {
    number2 = Number(input.textContent);
    switch (op) {
      case "÷":
        input.textContent = number1 / number2;
        break;
      case "x":
        input.textContent = number1 * number2;
        break;
      case "-":
        input.textContent = number1 - number2;
        break;
      default:
        input.textContent = number1 + number2;
    }
    op = "";
    number1 = "";
    number2 = "";
  }
});

clear.addEventListener("click", (e) => {
  e.preventDefault();
  op = "";
  number1 = "";
  number2 = "";
  input.textContent = "";
});
