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
var myScore = 0;
var timeloss;
var scoreIncrimenter;


//sorting the cards
cards.sort(function() { 
	return 0.5 - Math.random() 
});

// var displayCard = function (){
//    this.classList.toggle("open");
//    this.classList.toggle("show");
//    this.classList.toggle("disabled");
// }



  
var flipCard = function () {
  //get the card id of the card getting flipped
  cardID = this.getAttribute('data-id');
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

};

var checkForMatch = function() {
  
  //checking if the strings in the cardsinPlay array are matches
  if(cardsInPlay[0] === cardsInPlay[1]){
    alert("You found a match!");
    score++;
  } else {
    alert("Sorry, try again.");
    
  }
}

var createBoard = function() {

  //forloop for 
  for (var i = 0; i < cards.length; i++) {

    var cardElement = document.createElement('img');

    scoreIncrimenter = 0;

    //setting the default image of the pic as the back
    cardElement.setAttribute('src', "pictures/the-back.jpg");
    cardElement.setAttribute('data-id', i);

    //adding an event listener to the cards so they can flip when clicked
    cardElement.addEventListener('click', flipCard);

    //appending the cards to the game board
    document.getElementById('game-board').appendChild(cardElement);


  }

}

function addScore(){
	if 
}

//calling the function create board
createBoard();










