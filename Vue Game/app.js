new Vue({

  el: "#app",

  data: {
          monster: 100,
          player: 100,
          start: true,
          list: []
  },
  computed: {
  monWidth: function() {
     return this.monster + "%";
  },
  playWidth: function() {
    return this.player + "%";
 }
},
 methods: {
   //This function reduces the player and monster property
  attack: function () {
    const playerAttack = this.randomDamage(6, 12);
    const monsterAttack = this.randomDamage(5, 10);
    this.attackCalcu(playerAttack, monsterAttack);
    this.winif(this.monster, this.player)
  },
     //This function reduces the player and monster property to a greater extent
  specialAttack: function () {
    const playerAttack = this.randomDamage(10, 20);
    const monsterAttack = this.randomDamage(5, 15);
    this.attackCalcu(playerAttack, monsterAttack);
    this.winif(this.monster, this.player);
  },

  //This fuction is reduces the prpoery for moster and player and unshipt object to the array list
  attackCalcu: function(play, monst) {
    this.player = this.player - monst;
    this.monster = this.monster - play;
    this.list.unshift({message: "Player hit Monster for " + play + " points" })
    this.list.unshift({message: "Monster hit Player for " + monst + " points" });
  },

  //This function heals the player and the monster can still attack
  heal: function() {
    if(this.player < 90) {
    const playerheal = this.randomDamage(8, 20);
    const monsterAttack = this.randomDamage(10, 15);
    this.player = this.player + playerheal;
    this.player = this.player - monsterAttack;
    this.list.unshift({message: "Player healed for " + playerheal + " points" })
    this.addToList("Monster", monsterAttack);
    this.winif(this.monster, this.player);
    } else {
      const monsterAttack = this.randomDamage(10, 15);
      this.player = this.player - monsterAttack;
      this.list.unshift({message: "Player unable to heal more" })
      this.addToList("Monster", monsterAttack);
    }
  },
  // This is used to reset the game
  reset: function() {
    this.player = 100;
    this.monster = 100;
    this.list =[];
  },
  //condition function to check who wins
  winif: function(monst, play) {
      if(play <= 0) {
        alert("The Monster won");
        this.reset();
        this.start = true;
      }
      else if (monst <= 0) {
        alert("The Player has won");
        this.reset();
        this.start = true;
      }
  },
  //function to add message to a list
  addToList(player, num){
    return this.list.unshift({message: player + " hit Player for " + num + " points" })
  },
  //This is the function for a random number
  randomDamage(min, max){
    return Math.floor((Math.random() * (max - min)) + min);
  },
 }


})

 