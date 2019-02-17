var GameState = { 
init: function() { 

},
preload: function() { 

},
create: function() { 

},
update: function() { 

},
}
var game = new Phaser.Game(205, 400, Phaser.AUTO); 

game.state.add('GameState', GameState); 
game.state.start('GameState');
