function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const quotesList = [
  "This is how I look in real life",
  "Me everytime I see 🍰",
  "Unidentified smiling object",
  "Have you seen my pet 🦄",
  "Proud to be 🥝",
  "Only speak 🔥",
];

const mainQuote = document.getElementById("main-quote");

// Get prev quote from localstorage
// This will evaluate to NaN when parseInt with null or undefined
const prevQuoteIndex = parseInt(window.localStorage.getItem("quoteIndex"), 10);

let dice = getRandomInt(0, quotesList.length - 1);

if (prevQuoteIndex !== NaN) {
  // If prev quote have been set in local storage
  // Re-role dice until we got a different index number
  while (dice === prevQuoteIndex) {
    dice = getRandomInt(0, quotesList.length - 1);
  }

  mainQuote.innerText = quotesList[dice];
} else {
  // just set a random quote
  mainQuote.innerText = quotesList[dice];
}

window.localStorage.setItem("quoteIndex", dice.toString());
