class Form{
    constructor(){



    }
//created buttons text input herer
    display(){
        var title = createElement("h2")
        title.html("MULTIPLAYER CAR RACING GAME");
        title.position(180,0);

        var input = createInput("name");

        var button = createButton("play");

        var greeting = createElement("h4");
        input.position(180,160);

        button.position(250,200);

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();
            playerCount = playerCount+1;
            player.update(name);
            player.updateCount(playerCount);

            greeting.html("Hello" + name);
            greeting.position(130,160);
        })

    }
}
