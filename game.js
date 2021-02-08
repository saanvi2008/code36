class Game{
    constructor(){

    }

    getState(){
        var gamestateRef = database.ref('gamestate');
        gamestateRef.on("value",function(data){
        gamestate = data.val();

        })

        
        }
        update(state){
            //that goes in the main database and act there
            database.ref('/').update({
                gamestate : state
    
                        })}
    

        start(){
          if(gamestate === 0){
              form = new Form();
              player = new Player();
              player.getCount();
              form.display();
          }
        }
    }

