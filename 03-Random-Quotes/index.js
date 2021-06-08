const generateBtn = document.querySelector(".generate-qoute");
const qouteBody = document.querySelector(".qoute-body");
const qouteAuthor = document.querySelector(".qoute-author");

const quotes = [
  {
    body: "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
    author: " Life",
  },
  {
    body: "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
    author: "John Kenneth Galbraith",
  },
  {
    body: "God save me from my friends. I can protect myself from my enemies.",
    author: "Claude Louis Hector de Villars ",
  },
  {
    body: "The price of anything is the amount of life you exchange for it.",
    author: "David Thoreau",
  },
  {
    body: "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
    author: "Charles Lindbergh",
  },
  {
    body: "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
    author: " Tyne Daly",
  },
];

generateBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const qoute = getQoute(quotes);
  qouteBody.textContent = qoute.body;
  qouteAuthor.textContent = qoute.author;
});
function getQoute(array) {
  const randomNumber = Math.floor(Math.random() * array.length);
  return array[randomNumber];
}
