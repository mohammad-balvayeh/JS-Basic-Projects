const toggleBtn = document.querySelector(".sidebar-btn");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  sidebar.classList.toggle("show-sidebar");
});
closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  sidebar.classList.remove("show-sidebar");
});
