
class Card {
    constructor(value, suit) {
      this.value = value;
      this.suit = suit;
    }//Card class takes value & suit as arguments and assigns them to properties 
  }
  
  class Deck {
    constructor() {
      this.cards = [];
      const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
      for (let i = 2; i <= 14; i++) {
        for (const suit of suits) {
          this.cards.push(new Card(i, suit));
        }//Deck class creates an empty array. Then a loop to create a standard deck of 52 cards by iterating through 2-14 and four suits.
      }
    }
  
      shuffle() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }//Deck class also has a shuffle method that randomly shuffles the cards in the cards array.
    }


    deal(numCards) {
      return this.cards.splice(0, numCards);

    }//Deck class also has a deal method that returns a number of cards from the beginning of the cards array and removes them from the array.
  }

  class Player {
    constructor(name) {
      this.name = name;
      this.hand = [];
    }// Player class takes in a name and creates an empty hand array.
  
    playCard() {
      return this.hand.shift();
    }// Player class also has a playCard method that removes and returns the first card from the players hand
  }
  
  const deck = new Deck();
  deck.shuffle();
  const player1 = new Player('Player 1');
  const player2 = new Player('Player 2');
  player1.hand = deck.deal(26);
  player2.hand = deck.deal(26);
  let player1Score = 0;
  let player2Score = 0;
  //This code creates a new instances of the deck class, shuffles the deck, creates two new instances of the Player class, deals 26 cards to each player, and keeps track of each players score.
  while (player1.hand.length > 0 && player2.hand.length > 0) {
    const card1 = player1.playCard();
    const card2 = player2.playCard();
    console.log(`${player1.name} plays ${card1.value} of ${card1.suit}`);
    console.log(`${player2.name} plays ${card2.value} of ${card2.suit}`);
  
    if (card1.value > card2.value) {
      player1Score++;
      console.log(`${player1.name} wins this round`);
    } else if (card1.value < card2.value) {
      player2Score++;
      console.log(`${player2.name} wins this round`);
    } else {
      console.log(`It's a tie!`);
    }
    console.log(`Current score: ${player1.name}: ${player1Score} - ${player2.name}: ${player2Score}\n`);
  }//in the while loop as long as both players have atleat 1 card the loop continues.
   //each player plays a card & the played cards are posted to the console
  //The code then compares the cards and whoever has the highest card, their score will be incremented by 1
  //Then the current scores are posted to the console.
  
  console.log(`All cards have been played.`);
  if (player1Score > player2Score) {
    console.log(`${player1.name} wins the game!`);
  } else {
    console.log(`${player2.name} wins the game!`);
  }//This loop declares the winner based on the final scores.

 
 