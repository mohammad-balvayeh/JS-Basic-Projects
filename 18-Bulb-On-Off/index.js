const bulbOnUrl = "./../shared/img/bulb/bulb-on.png";
const bulbOffUrl = "./../shared/img/bulb/bulb-off.png";

const bulbImg = document.querySelector(".bulb-image");
const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const bulbImgUrl = bulbImg.getAttribute("src");

  if (bulbImgUrl.trim() == bulbOnUrl.trim()) {
    bulbImg.src = bulbOffUrl;
    btn.textContent = "turn on";
  } else {
    bulbImg.src = bulbOnUrl;
    btn.textContent = "turn off";
  }
});
