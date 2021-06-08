const tab = document.querySelectorAll(".tab");
const stepInfo = document.querySelectorAll(".step-info");

tab.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const dataId = item.dataset.id;
    tab.forEach((item) => {
      item.classList.remove("step-active");
    });
    item.classList.add("step-active");
    stepInfo.forEach((item) => {
      if (item.dataset.id == dataId) {
        item.classList.add("info-active");
      } else {
        item.classList.remove("info-active");
      }
    });
  });
});
