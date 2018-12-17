//cards array
var cards = [
	{
		name: "Ace-of-Wands",
		cardImage: "pictures/ace-of-wands.png"
	},
	{
		name: "Death",
		cardImage: "pictures/death.png"
	},
	{
		name: "Five-of-Kings",
		cardImage:"pictures/five-of-kings.png"
	},
	{
		name: "King-of-Rings",
		cardImage: "pictures/king-of-rings.png"
	},
	{
		name: "Knight-of-Rings",
		cardImage: "pictures/knight-of-rings.png"
	},
	{
		name: "Page-of-Rings",
		cardImage: "pictures/page-of-rings.png"
	},
	{
		name: "Queen-of-Rings",
		cardImage: "pictures/queen-of-rings.png"
	},
	{
		name: "The-Fool",
		cardImage: "pictures/the-fool.png"
	},
	{
		name: "The-Lovers",
		cardImage: "pictures/the-lovers.png"
	},
	{
		name: "The-Magician",
		cardImage: "pictures/the-magician.png"
	},
	{
		name: "The-Moon",
		cardImage: "pictures/the-moon.png"
	},
	{
		name: "The-Star",
		cardImage: "pictures/the-star.png"
	},
	{
		name: "The-sun",
		cardImage: "pictures/the-sun.png"
	},
	{
		name: "Three-of-Rings",
		cardImage: "pictures/three-of-rings.png"
	},
	{
		name: "Three-of-Swords",
		cardImage: "pictures/three-of-swords.png"
	},
	{
		name: "Ace-of-Cups2",
		cardImage: "pictures/ace-of-cups.png"
	},
	{
		name: "Death2",
		cardImage: "pictures/death.png"
	},
	{
		name: "Five-of-Kings2",
		cardImage:"pictures/five-of-kings.png"
	},
	{
		name: "King-of-Rings2",
		cardImage: "pictures/king-of-rings.png"
	},
	{
		name: "Knight-of-Rings2",
		cardImage: "pictures/knight-of-rings.png"
	},
	{
		name: "Page-of-Rings2",
		cardImage: "pictures/page-of-rings.png"
	},
	{
		name: "Queen-of-Rings2",
		cardImage: "pictures/queen-of-rings.png"
	},
	{
		name: "The-Fool2",
		cardImage: "pictures/the-fool.png"
	},
	{
		name: "The-Lovers2",
		cardImage: "pictures/the-lovers.png"
	},
	{
		name: "The-Magician2",
		cardImage: "pictures/the-magician.png"
	},
	{
		name: "The-Moon2",
		cardImage: "pictures/the-moon.png"
	},
	{
		name: "The-Star2",
		cardImage: "pictures/the-star.png"
	},
	{
		name: "The-sun2",
		cardImage: "pictures/the-sun.png"
	},
	{
		name: "Three-of-Rings2",
		cardImage: "pictures/three-of-rings.png"
	},
	{
		name: "Three-of-Swords2",
		cardImage: "pictures/three-of-swords.png"
	}];
var cardsInPlay = [];
var cardsFlipped= [];
var score = document.getElementsByClassName('score')[0];
var timer = document.getElementsByClassName('timer')[0];
var myMatchedCards;
var endGame = document.getElementsByClassName('game-over')[0];
var scoreIncrimenter;
var timeLoss;


document.addEventListener("DOMContentLoaded", function(){
	//shuffle the cards

	document.getElementById('start').addEventListener('click', createBoard);
	var myReset = document.getElementById("reset");
  	myReset.addEventListener('click', createBoard);

	//calling the function create board	
});

  
var flipCard = function () {
  //get the card id of the card getting flipped
  cardID = this.getAttribute('id');
  console.log(this);

  
  //push card id object/string into new array
  cardsInPlay.push(cards[cardID].cardImage);
  


  this.setAttribute('src', cards[cardID].cardImage);
  console.log(cards[cardID].cardImage);
  console.log(cards[cardID].suit)
  if (cardsInPlay.length === 2) {
    checkForMatch();
    //empties cardsinPlay array
    cardsInPlay =[];
  }
  if(cardsFlipped == cards.length){
<<<<<<< HEAD
	alert("Board cleared... generating new board");
=======
	alert("YOU WON! PLAY AGAIN SCORE: 100");
>>>>>>> 0c096af546aba6d9d73689ade5d32eb8469382a8
	document.getElementById('game-board').innerHTML = "";
	createBoard();
}

};



var checkForMatch = function() {
  
  //checking if the strings in the cardsinPlay array are matches
  if(cardsInPlay[0] === cardsInPlay[1]){
<<<<<<< HEAD
    console.log("You found a match!");
=======
    alert("You found a match!");
>>>>>>> 0c096af546aba6d9d73689ade5d32eb8469382a8
    cardsFlipped += 2;
    var images = document.getElementsByClassName(cardsInPlay[0]);
    var images2 = document.getElementsByClassName(cardsInPlay[1]);
    images[0].removeEventListener('click', flipCard);
    images2[0].removeEventListener('click', flipCard);
    var myMatchedCards = images;
  } else {
    console.log("Sorry, try again.");
    var images = document.getElementsByClassName(cardsInPlay[0]);
    var images2 = document.getElementsByClassName(cardsInPlay[1]);
    setTimeout( function(){
    	images[0].setAttribute('src', 'pictures/the-back.jpg');
    	images2[0].setAttribute('src', 'pictures/the-back.jpg');
	}, 700);
  }
}


function flipBoard(){
	var cardsDown = document.getElementsByTagName('img');
	for (var i = 0; i < cardsDown.length; i++){
		cardsDown[i].setAttribute('src', 'pictures/the-back.jpg');
		cardsDown[i].addEventListener('click', flipCard);
	}

}

function destroyBoard(){
	var myCards = document.getElementById("game-board");
	myCards.innerHTML = "";
}


var createBoard = function() {
	destroyBoard();
	//shuffling the deck
	cards.sort(function() { 
		return 0.5 - Math.random() 
	});

	timeLoss = 59;
    scoreIncrementer = 0;
    flippedCards = [];
  
  //forloop for 
  for (var i = 0; i < cards.length; i++) {

    var cardElement = document.createElement('img');

    scoreIncrimenter = 0;

    //setting the default image of the pic as the back
    cardElement.setAttribute('src', cards[i].cardImage);
    cardElement.setAttribute('id', i);
    cardElement.classList.add(cards[i].cardImage);

    //appending the cards to the game board
    document.getElementById('game-board').appendChild(cardElement);


  }
  	
  	console.log("hello");
	setTimeout(flipBoard, 10000);
}













