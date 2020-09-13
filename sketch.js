var ball, database, position;
var treasure, treasureposition;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,50,50);
    ball.shapeColor = "gold";
    treasure = createSprite(500,500,50,50);
    var ballposition = database.ref('ball/position');
    ballposition.on("value", readPosition);
    var treasureposition = database.ref('treasure/position');
    treasureposition.on("value", readTreasure);

}

function draw(){
    background("white");
    if(position != undefined){
    if(keyDown(LEFT_ARROW)){
        writePosition(-5,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(5,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-5);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+5);
    }
    camera.x = ball.x;
    camera.y = ball.y;
    drawSprites();
}
}

function writePosition(x,y){
    database.ref('ball/position').set({
        x:position.x + x,
        y:position.y + y
    });
}

function readPosition(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}
function readTreasure(data){
    treasureposition = data.val();
    treasure.x = treasureposition.x;
    treasure.y = treasureposition.y;
}