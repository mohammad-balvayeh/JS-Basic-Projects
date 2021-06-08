const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
euismod nisi porta lorem mollis. Morbi tristique senectus et netus.`;

const form = document.querySelector(".form");
const blog = document.querySelector(".blog");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userNumber = e.target.number.value;

  blog.innerHTML = showPragraphs(userNumber);
});

function showPragraphs(number) {
  let myPraph = [];
  for (let i = 0; i < number; i++) {
    myPraph.push(`<p class="paragraph">
    <span>${i + 1}</span>
         ${paragraph}
        </p>`);
  }
  return myPraph.join("");
}
