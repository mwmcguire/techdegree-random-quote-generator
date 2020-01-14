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
    year: 1965
  },
  {
    quote: 'Our character is what we do when we think no one is looking',
    source: 'Harriett Jackson Brown Jr.',
    citation: "Life's Little Instruction Book",
    year: 1991
  },
  {
    quote:
      'Uncertainty and expectation are the joys of life. Security is an insipid thing.',
    source: 'William Congreve',
    citation: 'Love for Love',
    year: 1695
  },
  {
    quote:
      "Wisdom tends to grow in proportion to one's awareness of one's ignorance.",
    source: 'Anthony de Mello',
    citation: 'One Minute Wisdom',
    year: 1989
  },
  {
    quote:
      'History teaches us that men and nations behave wisely once they have exhausted all other alternatives.',
    source: 'Abba Eban',
    citation: 'The Times',
    year: 1970
  }
];

// getRandomQuote function - function that pulls a quote out at random
function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

// printQuote function - function that prints a random quote to the page
function printQuote() {
  var randomQuote = getRandomQuote();
  var quoteHTML = '';

  quoteHTML += '<p class="quote">' + randomQuote.quote + '</p>';
  quoteHTML += '<p class="source">' + randomQuote.source;

  if (randomQuote.citation) {
    quoteHTML += '<span class="citation">' + randomQuote.citation + '</span>';
  }

  if (randomQuote.year) {
    quoteHTML += '<span class="year">' + randomQuote.year + '</span>';
  }

  quoteHTML += '</p>';

  document.getElementById('quote-box').innerHTML = quoteHTML;
}

// click event listener for the print quote button
document
  .getElementById('load-quote')
  .addEventListener('click', printQuote, false);
