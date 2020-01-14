/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// collection of quotations
var quotes = [
  {
    quote:
      "I'm not smart.  I try to observe.  Millions saw the apple fall but Newton was the one who asked why.",
    source: 'Bernard Baruch',
    citation: 'New York Post',
    year: 1965,
    tag: 'Insightful'
  },
  {
    quote: 'Our character is what we do when we think no one is looking',
    source: 'Harriett Jackson Brown Jr.',
    citation: "Life's Little Instruction Book",
    year: 1991,
    tag: 'Inspirational'
  },
  {
    quote:
      'Uncertainty and expectation are the joys of life. Security is an insipid thing.',
    source: 'William Congreve',
    citation: 'Love for Love',
    year: 1695,
    tag: 'Thoughtful'
  },
  {
    quote:
      "Wisdom tends to grow in proportion to one's awareness of one's ignorance.",
    source: 'Anthony de Mello',
    citation: 'One Minute Wisdom',
    year: 1989,
    tag: 'Meaningful'
  },
  {
    quote:
      'History teaches us that men and nations behave wisely once they have exhausted all other alternatives.',
    source: 'Abba Eban',
    citation: 'The Times',
    year: 1970,
    tag: 'Insightful'
  }
];

// getRandomQuote function - function that pulls a quote out at random
function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

// getRandomColor function - generates a random rgb color value
function getRandomColor() {
  var randomColor;
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  randomColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  return randomColor;
}

// printQuote function - function that prints a random quote to the page
function printQuote() {
  var randomQuote = getRandomQuote();
  var quoteHTML = '';

  // Generate HTML for the page to include quote properties
  quoteHTML += '<div class="tag">' + randomQuote.tag + '</div>';
  quoteHTML += '<p class="quote">' + randomQuote.quote + '</p>';
  quoteHTML += '<p class="source">' + randomQuote.source;

  if (randomQuote.citation) {
    quoteHTML += '<span class="citation">' + randomQuote.citation + '</span>';
  }

  if (randomQuote.year) {
    quoteHTML += '<span class="year">' + randomQuote.year + '</span>';
  }

  quoteHTML += '</p>';

  // Display HTML to the page
  document.getElementById('quote-box').innerHTML = quoteHTML;

  // Change background color
  document.body.style.backgroundColor = getRandomColor();
}

// click event listener for the print quote button
document
  .getElementById('load-quote')
  .addEventListener('click', printQuote, false);

// print a new quote every 20 seconds
window.setInterval(printQuote, 20000);
