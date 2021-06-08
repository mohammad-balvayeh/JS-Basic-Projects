const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "./../shared/img/person/person-01.jpg",
    info: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "./../shared/img/person/person-02.jpg",
    info: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "./../shared/img/person/person-03.jpg",
    info: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "./../shared/img/person/person-04.jpg",
    info: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const personImg = document.querySelector(".person-img");
const personName = document.querySelector(".person-name");
const personJob = document.querySelector(".person-job");
const personInfo = document.querySelector(".person-info");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

const findIndexHandler = (array, name) => {
  return array.findIndex((item) => {
    return name.toLowerCase() === item.name.toLowerCase();
  });
};

prevBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let i = findIndexHandler(reviews, personName.textContent);

  if (i == 0) {
    personName.textContent = reviews[reviews.length - 1].name;
    personJob.textContent = reviews[reviews.length - 1].job;
    personInfo.textContent = reviews[reviews.length - 1].info;
    personImg.src = reviews[reviews.length - 1].img;
  } else {
    personName.textContent = reviews[i - 1].name;
    personJob.textContent = reviews[i - 1].job;
    personInfo.textContent = reviews[i - 1].info;
    personImg.src = reviews[i - 1].img;
  }
});

nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let i = findIndexHandler(reviews, personName.textContent);
  if (i == reviews.length - 1) {
    personName.textContent = reviews[0].name;
    personJob.textContent = reviews[0].job;
    personInfo.textContent = reviews[0].info;
    personImg.src = reviews[0].img;
  } else {
    personName.textContent = reviews[i + 1].name;
    personJob.textContent = reviews[i + 1].job;
    personInfo.textContent = reviews[i + 1].info;
    personImg.src = reviews[i + 1].img;
  }
});

randomBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let i = Math.floor(Math.random() * reviews.length);

  personName.textContent = reviews[i].name;
  personJob.textContent = reviews[i].job;
  personInfo.textContent = reviews[i].info;
  personImg.src = reviews[i].img;
});
