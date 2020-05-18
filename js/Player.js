class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      rank:this.rank
    });
  }

  getRank() {
    database.ref('carsFinished').once("value", (data) => {
      this.rank = data.val();
    });
  }

  static updateRank(r) {
    database.ref('/').update({
      carsFinished: r
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data) => {
      allPlayers = data.val();
    })
  }
}
