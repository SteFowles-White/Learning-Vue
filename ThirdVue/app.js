const cards = [
    {
      front: 'The "First Computer Programmer"',
      back: 'Ada Lovelace',
      flipped: false,
    },
    {
      front: 'Invented the "Clarke Calculator"',
      back: 'Edith Clarke',
      flipped: false,
  
    },
    {
      front: 'Famous World War II Enigma code breaker',
      back: 'Alan Turing',
      flipped: false,
    },
    {
      front: 'Created satellite orbit analyzation software for NASA',
      back: 'Dr. Evelyn Boyd Granville',
      flipped: false,
    },
  ]; 
//display our data
//flip the card on click
//get info on new cars from user
//ass a new card when user hits the enter
//delete the cards
//animate card flip
//display the erro message if form fields are blank
  new Vue({
    el: '#flashcard-app',
    data: {
      cards: cards,
    },
    methods: {

      toggleCard: function(item){
        item.flipped = !item.flipped;

      }

    }
  });