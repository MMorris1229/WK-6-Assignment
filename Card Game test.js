

const chai = ('chai'); 
const expect = chai.expect; 
let Deck = require('./Card Game'); 

describe('Deck', () => { 
  let deck; 
  
  beforeEach(() => { deck = new Deck(); 
  }); 


  it('should shuffle the deck of cards', () => { 
    const initialOrder = [...deck.cards];
     deck.shuffle(); 
     expect(deck.cards).to.not.deep.equal(initialOrder);
     });
  }); 

 
