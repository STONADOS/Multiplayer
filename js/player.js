class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null; 
    }
getCount(){
    var playerCountref = database.ref('playerCount');
    playerCountref.on("value", function(data){
        playerCountref = data.val();
    })
}
updateCount(count){
    database.ref('/').update({
        playerCount:count
    })
}
update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
    })
}
static playerInfo(){
    var playerinforef = database.ref('players');
    playerinforef.on("value", (data)=>{
    all_players = data.val(); 
    })
}
}