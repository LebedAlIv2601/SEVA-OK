
var GameState = {

  preload: function() {

  this.cursors = this.game.input.keyboard.createCursorKeys();
  this.load.image('scene', 'assets/images/scene.png');
  this.load.spritesheet('cowboy1', 'assets/images/cowboy1.png', 260, 260, 2);
  this.load.spritesheet('cowboy2', 'assets/images/cowboy2.png', 260, 260, 2);

  },
  init: function() {

  },

  create: function() {

  this.background = this.game.add.sprite(0,0,'scene');
  this.background.scale.setTo(2,2);
  this.cowboy1 = game.add.sprite(100, 300, 'cowboy1');
    this.cowboy1.scale.setTo(0.5,0.5)

  this.cowboy2 = game.add.sprite(900, 300, 'cowboy1');
    this.cowboy2.scale.setTo(-0.5,0.5)

    this.cowboy1.animations.add('animate1', [0,1], 20, false)
    this.cowboy1.inputEnabled = true
    this.cowboy1.input.pixelPerfectClick = true
    this.cowboy1.events.onInputDown.add(this.animateCowboy1, self)

    this.cowboy2.animations.add('animate2', [0,1], 20, false)
    this.cowboy2.inputEnabled = true
    this.cowboy2.input.pixelPerfectClick = true
    this.cowboy2.events.onInputDown.add(this.animateCowboy2, self)

  
  },

  update: function() {
  },

animateCowboy1: function(sprite, event) {
sprite.play('animate1')
},
  
animateCowboy2: function(sprite, event) {
sprite.play('animate2')
},

};

var game = new Phaser.Game(1080, 464, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');