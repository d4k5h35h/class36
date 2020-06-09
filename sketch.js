var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;

var allPlayers;
function preload(){
  bg1 = loadImage("images/startbg.png");
  bg2 = loadImage("images/background.jpg");  
}

function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
if(gameState === 0){
  background(bg1);
} 
else if(gameState === 1){
  background(bg2);
}
  if(playerCount === 4){
    game.update(1);
  }
    if(gameState === 1){
     clear();
     game.play(); 
    }
}
