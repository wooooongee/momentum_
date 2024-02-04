const quotes = [
  {
    quote:
      "It's not at all important to get it right the first time. It's vitally important to get it right the last time.",
    author: "Andrew Hunt and David Thomas",
  },
  {
    quote: "The best way to predict the future is to implement it.",
    author: "David Heinemeier Hansson",
  },
  {
    quote:
      "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
  },
  {
    quote:
      "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    author: "Patrick McKenzie",
  },
  {
    quote:
      "It’s not that I’m so smart, it’s just that I stay with problems longer.",
    author: "Albert Einstein",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote:
      "There are only two hard things in computer science: cache invalidation and naming things.",
    author: "Phil Karlton",
  },
  {
    quote:
      "The most disastrous thing that you can ever learn is your first programming language.",
    author: "Alan Kay",
  },
  {
    quote: "The best error message is the one that never shows up.",
    author: "Thomas Fuchs",
  },
  {
    quote:
      "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
    author: "John Woods",
  },
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;