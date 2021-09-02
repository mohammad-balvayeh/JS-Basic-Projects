const showClassName = "fa-eye";
const HideClassName = "fa-eye-slash";

const password = document.querySelector(".password");
const showHideBtn = document.querySelector("#show-hide-btn");

showHideBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (password.type == "password") {
    password.type = "text";
    showHideBtn.classList.remove(showClassName);
    showHideBtn.classList.add(HideClassName);
  } else {
    password.type = "password";
    showHideBtn.classList.remove(HideClassName);
    showHideBtn.classList.add(showClassName);
  }
});
