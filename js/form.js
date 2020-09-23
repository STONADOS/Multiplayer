class Form{
    constructor(){
        this.title = createElement('h2');
        this.input = createInput("Player");
        this.button = createButton('PLAY');
        this.greeting = createElement('h3'); 
    }
hide(){
    this.button.hide();
    this.input.hide();
}
display(){
    this.title.html("MULTIPLAYER");
    this.title.position(windowWidth/2 - 100, windowHeight);
    // this.input.size(100, 100);
    this.input.position(windowWidth/2 - 300, windowHeight/2);
    this.button.position(windowWidth/2 - 100, windowHeight/2);
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount += 1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello "+ player.name);
        this.greeting.position(windowWidth/2, windowHeight/2);
    });

}

}