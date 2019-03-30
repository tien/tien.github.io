function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const quotesList = [
  "This is how I look in real life",
  "Me everytime I see 🍰",
  "Unideintified smiling object",
  "Have you seen my pet 🦄",
  "Proud to be 🥝",
  "Only speak 🔥"
];

const mainQuote = document.getElementById("main-quote");

mainQuote.innerText = quotesList[getRandomInt(0, quotesList.length - 1)];
