const alert = document.querySelector(".alert-message");
const form = document.querySelector(".form");
const displayItems = document.querySelector(".display__items");
const inputEL = document.querySelector(".input");
const clearItems = document.querySelector(".clear-items");

let items = [];

/*
  ==========
  add item
  ==========
*/
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputText = e.target.input.value;
  if (inputText.trim().length <= 0) {
    displayAlert("please enter value", "danger");
  } else {
    items.push({ id: uuidv4(), text: inputText });
    showItems(items);
    displayAlert("item added to the list", "success");
  }
  inputEL.value = "";
});

/*
  ==========
  remove all items
  ==========
*/
clearItems.addEventListener("click", (e) => {
  e.preventDefault();
  displayItems.innerHTML = "";
  items = [];
  displayAlert("all items removed", "danger");
});

/*
  ==========
   show alert message
  ==========
*/
function displayAlert(text, className) {
  alert.textContent = text;
  alert.classList.add(className);
  // remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(className);
  }, 1000);
}

/*
  ==========
  creat element for show in DOM
  ==========
*/
function creatElementDOM(item) {
  const li = document.createElement("li");
  li.setAttribute("class", "display__item");
  li.setAttribute("id", item.id);

  const i = document.createElement("i");
  i.setAttribute("class", "remove fas fa-trash");

  /*
  ==========
  delete item
  ==========
  */
  i.addEventListener("click", (e) => {
    e.preventDefault();
    items = items.filter((el) => item.id != el.id);
    showItems(items);
    displayAlert("item removed", "danger");
  });

  const span = document.createElement("span");
  span.setAttribute("class", "disply__item__title");
  span.textContent = item.text;

  li.appendChild(span);
  li.appendChild(i);

  return li;
}

/*
  ==========
   show items in DOM
  ==========
*/
function showItems(array) {
  displayItems.innerHTML = "";
  array.forEach((item) => {
    displayItems.appendChild(creatElementDOM(item));
  });
}
