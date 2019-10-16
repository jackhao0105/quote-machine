
/*
  Name App       : Quotes Machine Generator
  Description    : Practice Javascript ( fetch, DOM, function,...)
  Date           : Oct 16th 2019
  Language       : JavaScript
  Developer      : Jack Hao
*/


var quotesData = '';
let textCurrent ='', authorCurrent = '';
var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"]

// Get Source
var url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
          var items = data;
          quotesData = items ;     
        })

function getRandomQuote() {
  return quotesData.quotes[Math.floor(Math.random() * quotesData.quotes.length)];
}

function getQuote(){
  let randomNumber = getRandomQuote();
  console.log(randomNumber);
  
  // assing the random number with quote current
  textCurrent = randomNumber.quote;    
  authorCurrent  = randomNumber.author;

  // display
  display(textCurrent, authorCurrent);
  
  //change background color
  var color = Math.floor(Math.random() * colors.length)
  document.querySelector('body').style.backgroundColor         = colors[color];
  document.querySelector('body').style.color                   = colors[color];

  
  let button = document.querySelectorAll(".button");
  // overate throught all class have name button
  button.forEach(e => e.style.backgroundColor= colors[color] )
  

}

function display(main,sub){
  let text = document.getElementById('text');
  let author = document.getElementById('author');

  text.innerHTML = main;
  author.innerHTML = sub;

  const tweetButton = document.getElementById('tweet-quote');
  tweetButton.setAttribute('href', `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${main} - ${sub}`);
}

// make dynamic
document.getElementById('new-quote').addEventListener('click', getQuote);
