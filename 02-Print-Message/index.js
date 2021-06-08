const form = document.querySelector(".form");
const errorMessage = document.querySelector(".error-message");
const userMessage = document.querySelector(".user-message");
const input = document.querySelector("#input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const userText = e.target.userText.value;

  if (userText.trim().length <= 0) {
    errorMessage.style.display = "block";

    setTimeout(() => {
      errorMessage.style.display = "none";
    }, 2000);
  } else {
    userMessage.textContent = userText.toUpperCase();
  }
  input.value = "";
});
