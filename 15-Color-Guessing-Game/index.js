const colorDiplay = document.querySelector(".color-diplay");
const gameControl = document.querySelector(".game-control");
const messageArea = document.querySelector(".message");
const titleWraper = document.querySelector(".title-wraper");
const boxArea = document.querySelector(".box-area");
const gameMode = document.querySelectorAll(".game-mode");

createElement(6);

/*****  Create Random Number For Generate Color *****/
function randomNumberGenerator() {
  return Math.floor(Math.random() * 255);
}

/*****  Create RGB Color *****/
function rgbColorGenerator() {
  return `rgb(${randomNumberGenerator()}, ${randomNumberGenerator()}, ${randomNumberGenerator()})`;
}

/*****  Create Color List Array *****/
function createColorList(number) {
  let colorList = [];
  for (let i = 0; i < number; i++) {
    colorList.push(rgbColorGenerator());
  }
  return colorList;
}

/*****  Show Message*****/
function showMessage(message, className) {
  messageArea.textContent = message;
  messageArea.classList.add(className);
}

/*****  Create DOM Element *****/
function createElement(number) {
  const colorListArray = createColorList(number);
  for (let i = 0; i < number; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    div.style.backgroundColor = colorListArray[i];
    boxArea.appendChild(div);
  }
  const box = document.querySelectorAll(".box");

  box.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();

      const clickedColor = item.style.backgroundColor;
      if (clickedColor == colorDiplay.textContent) {
        titleWraper.style.backgroundColor = clickedColor;

        showMessage("Correct!", "green");
        gameControl.textContent = "PLAY AGAIN? ";

        box.forEach((item) => {
          item.style.backgroundColor = clickedColor;
        });
      } else {
        item.style.backgroundColor = "transparent";

        showMessage("Try Again", "red");
      }
    });
  });

  const random = Math.floor(Math.random() * colorListArray.length);
  colorDiplay.textContent = colorListArray[random];
}

/*****  Game Control Event Listener *****/
gameControl.addEventListener("click", (e) => {
  e.preventDefault();
  location.reload();
});

/*****  Game Mode Button Event Listener *****/
gameMode.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    gameMode.forEach((item) => item.classList.toggle("selected"));

    boxArea.innerHTML = "";
    messageArea.textContent = "";
    titleWraper.style.backgroundColor = "#11a9e2";

    const gameModeText = e.target.dataset.mode;

    if (gameModeText.toLowerCase() == "easy") {
      createElement(3);
    }
    if (gameModeText.toLowerCase() == "hard") {
      createElement(6);
    }
  });
});
