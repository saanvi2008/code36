var database;

var gamestate = 0;
var playerCount = 0;

var form, player, game;


function setup(){
  database = firebase.database();

  //create the game object an then called the funtions
  game = new Game();
  game.getState();
  game.start();
  
  console.log(database);
  createCanvas(500,500);

 
}

function draw(){
  
    drawSprites();
  
}

