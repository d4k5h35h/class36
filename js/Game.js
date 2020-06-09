class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form();
      form.display();
    }
  }
  play(){
    form.hide();
    textSize(30);
    text("Game Started!!!",120,100);
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      displayPosition = 120;
      
      for(var plr in allPlayers){
       
        if(plr === "player" + player.index){
          fill(255,0,0);
        }
        else{
          fill(0);
        }
        displayPosition = displayPosition + 20;
        textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,displayPosition);

      }
    }
    if(keyIsDown && player.index !== null){
      player.distance = player.distance + 50;
      player.update();

    }
 } 
}