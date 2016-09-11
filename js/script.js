
/* array of quotes here */
var quotes = [
    {
      quote:"Isn\'t it more fun when you don\'t have permission",
    source: "Mia Wallace",
     citation:"Pulp Fiction",
    },
    
     {
      quote:"Revenge is never a straight line. It\'s a forest",
     source: "Hattori Hanzo",
     citation:"Kill Bill 1",
    },
    
    {
      quote:"I\'m a curious what makes you curious",
     source: "Django",
     citation:"Django Unchained",
    },
    
    {
      quote:"Oooh, that\'s bingo!",
     source: "Hanz Landa",
     citation:"Inglorious Basterds",
    },
    
    {
      quote:"I like the way you die, bitch!",
     source: "Django",
     citation:"Django Unchained",
    },   
    
     {
      quote: "I\'m blind, man. I'm fucking blind. You\'re not blind, you\'ve just got blood in your eyes. ",
     source: "Mr Orange",
     citation:"Reservoir Dogs",
    },   
    
     {
      quote:"That\'s when you know you've found somebody really special.",
     source: "Mia Wallace",
     citation:"Pulp Fiction",
    },     
];

// create a blank array to hold quote index
var allQuotes = [];

// function to fill the allQuotes 
function goQuotes(quote, index) {
    allQuotes.push(index);
}

// run the goQuotes function filling the allQuotes array
quotes.forEach(goQuotes);

// function that selects a random quote object from the quotes array
// returns the randomly selected quote 
var getRandomQuote = function getRandomQuote() {

    // if the allQuotes is empty fill it back up
    if (allQuotes.length < 1){
        quotes.forEach(goQuotes);
    }

    // generate a random number based off the allQuotes array length
    var randomNumber = Math.floor(Math.random() * allQuotes.length);

    // get an index from the allQuotes array
    var quoteIndex = allQuotes[randomNumber];

    // remove the index from the allQuotes array as its going to be used
    allQuotes.splice(randomNumber, 1);

    return quotes[quoteIndex];

};

// function that writes a random quote to the page
var printQuote = function printQuote(quoteObject) {

    var createQuote;

    if (quoteObject.source && quoteObject.citation) {
        createQuote = '<p class="quote">' + quoteObject.quote  + '</p> <p class="source">' + quoteObject.source  + '<span class="citation">' + quoteObject.citation  + '</span> </p>';
    } else {
        createQuote = '<p class="quote">' + quoteObject.quote  + '</p> <p class="source">' + quoteObject.source  + '<span class="citation">' + quoteObject.citation  + '</span> </p>';
    }
    document.getElementById('quote-box').innerHTML = createQuote;

};

// function that sets a random rgb color as the bg color

var changeBgColor = function changeBackground() {

    var randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

    if (randomColor !== 'rgb(255,255,255)') {
        document.body.style.background = randomColor;
    }
};
   
// event listener to respond to clicks on the page
// when user clicks the loadQuote button, the printQuote
document.getElementById('loadQuote').addEventListener("click",
    function() {
        printQuote(getRandomQuote());
        changeBgColor();
    }, false);

// displays quotes and change colour automatically
setInterval(function () {
    printQuote(getRandomQuote());
    changeBgColor();
}, 30000);
