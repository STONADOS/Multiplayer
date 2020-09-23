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
    background("black");
    if(position != undefined){
        if(keyDown("a")){
            writePosition(-5,0);
        }
        else if(keyDown("d")){
            writePosition(5,0);
        }
        else if(keyDown("w")){
            writePosition(0,-5);
        }
        else if(keyDown("s")){
            writePosition(0,+5);
        }
        camera.x = treasure.x;
        camera.y = treasure.y;


        textSize(20);
        text("PLAYER MA'AM", treasure.x - 80, treasure.y - 30);

        text("PLAYER JISHNU", ball.x - 80, ball.y - 30);

        drawSprites();
        }
        }
        
function writePosition(x,y){
    database.ref('treasure/position').set({
    x:treasureposition.x + x,
    y:treasureposition.y + y
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