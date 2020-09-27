class Game{
    constructor(){

    }
getState(){
    var gamestateref = database.ref('gamestate');
    gamestateref.on("value", function(data){
        gamestate = data.val();
    })
}
update(state){
    database.ref('/').update({
        gamestate:state
    });
}
async start(){
    if(gamestate == 0){
        player = new Player();
        var playercountref = await database.ref('playerCount').once("value");
        if(playercountref.exists()){
            playerCount = playercountref.val(); 
            player.getCount();
        }
        form = new Form();
        form.display();
    }
car1 = createSprite(100, 200, 60, 90);
car1.addImage("Tank", car1image);
car2 = createSprite(300, 200, 60, 90);
car2.addImage("Tank1", car2image);
car2.scale = 0.7;
car3 = createSprite(500, 200, 60, 90);
car3.addImage("Tank2", car2image);
car3.scale = 0.7;
car4 = createSprite(700, 200, 60, 90);
car4.addImage("Tank3", car2image);
car4.scale = 0.7;


cars = [car1, car2, car3, car4];

}
play(){
    form.hide();
    text("Game is Starting", windowWidth/2 - 300, windowHeight/2);
    Player.playerInfo();
    player.getCarsAtEnd();
    if(all_players != undefined){
        background("black");
        image(trackimage, 0, -windowHeight * 25, windowWidth, windowHeight * 50);
        var displayposition = 130;
        var index = 0;
        var x, y;
        x = 200;
        y = 0;
        for(var i in all_players){
            index = index + 1;
            x = x + 250;
            y = windowHeight - all_players[i].distance;
            cars[index - 1].x = x;
            cars[index - 1].y = y;
            if(index == player.index){
                cars[index - 1].shapeColor = "red";
                camera.position.x = windowWidth/2;
                camera.position.y = cars[index - 1].y;
            }
 }
    }
    if(keyDown(UP_ARROW) && player.index != null){
        player.distance += 50;
        player.update();
    } 
    if(player.distance == 3500){
        gamestate = 2;
        player.rank += 1;
        Player.updateCarsAtEnd(player.rank); 
    }
    drawSprites();
}
end(){
    console.log("gameEnded");
    text(player.rank, 200, 100);
    // gameover = createSprite(windowWidth/2, windowHeight/2);
    // // gameover.addImage("gameended", gameoverScreen);
    // // gameover.scale = 2;
    // drawSprites();
}
}