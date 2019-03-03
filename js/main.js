var GameState = {
  preload: function() {
this.game.physics.startSystem(Phaser.Physics.ARKADE); 
this.cursors = this.game.input.keyboard.createCursorKeys(); 
this.load.image('scene', 'assets/images/scene.png');
  this.load.spritesheet('cowboy1', 'assets/images/cowboy111.png', 260, 260, 2);

  },

  init: function() {

  },
  create: function(){

this.background = this.game.add.sprite(0,0,'scene');
  this.background.scale.setTo(2,2);
  this.cowboy1 = game.add.sprite(100, 300, 'cowboy1');
    this.cowboy1.scale.setTo(0.5,0.5)

  this.cowboy2 = game.add.sprite(900, 300, 'cowboy1');
    this.cowboy2.scale.setTo(-0.5,0.5)

    this.cowboy1.animations.add('animate1', [1,0], 20, false)
    this.cowboy1.inputEnabled = true
    this.cowboy1.input.pixelPerfectClick = true
    this.cowboy1.events.onInputDown.add(this.animateCowboy1, self)

    this.cowboy2.animations.add('animate2', [1,0], 20, false)
    this.cowboy2.inputEnabled = true
    this.cowboy2.input.pixelPerfectClick = true
    this.cowboy2.events.onInputDown.add(this.animateCowboy2, self)



/*this.k = 3;*/
this.delay = 1000;
this.timer = 0;
this.fire = false;
this.right = 100;
this.left = 100;
this.game = 1;
  // console.log(Phaser.Keyboard.A)
  //console.log(this.game.input.keyboard)
  this.keyA = this.input.keyboard.addKey(65);
  this.keyW = this.input.keyboard.addKey(87);
  this.keyS = this.input.keyboard.addKey(83);
  this.keyD = this.input.keyboard.addKey(68);
  },

  update: function() {  




    // if(this.cursors.up.isDown) {
    //   console.log("Input!")
    // } else if (this.keyA.isDown) {
    //   console.log('Ili')
    // }
    if (this.game == 1){
      this.timer++;
    }
    
    // console.log('правые: ', this.right);
    // console.log('левые: ', this.left);
    // console.log(this.timer)
    if(this.timer > 100 && this.game == 1) {
      var randNumber = Math.random();
      if(randNumber > 0.995 && this.fire === false){
        this.fire = true;
        this.l = Math.floor(Math.random() * 4);
        if (this.l == 0){
          console.log('!Вверх!');
        } else if (this.l == 1){
          console.log('!Вправо!')
        } else if (this.l == 2){
          console.log('!Лево!')
        } else if ( this.l == 3){
          console.log('!вниз!');
        }
      }
        // this.timer = 0;
        
        if (this.l == 0 && this.cursors.up.isDown && this.fire === true){
          console.log('Правый ранил')
          // this.right += 50;
          this.left -= 50;
          animateCowboy1();
          this.fire = false;
        } else if (this.l == 0 && this.keyW.isDown && this.fire === true){
        console.log('Левый ранил')
          this.right -= 50;
          // this.left += 50;
          this.fire = false;
      }    else if (this.l == 0 && this.fire === true && (this.keyA.isDown || this.cursors.left.isDown || this.keyS.isDown || this.cursors.down.isDown || this.keyD.isDown || this.cursors.right.isDown )){
           // SEVA SMOTRY SUDA        
      }


              if (this.l == 1 && this.cursors.right.isDown && this.fire === true){
          console.log('Правый ранил')
          // this.right += 50;
          this.left -= 50;
          animateCowboy1();
          this.fire = false;
        } else if (this.l == 1 && this.keyD.isDown && this.fire === true){
        console.log('Левый ранил')
          this.right -= 50;
          // this.left += 50; 
          this.fire = false;       
      }
              if (this.l == 2 && this.cursors.left.isDown && this.fire === true){
          console.log('Правый ранил')
          // this.right += 50;
          this.left -= 50;
          animateCowboy1();
          this.fire = false;
        } else if (this.l == 2 && this.keyA.isDown && this.fire === true){
        console.log('Левый ранил')
          this.right -= 50;
          // this.left += 50;
          this.fire = false;    
      }
              if (this.l == 3 && this.cursors.down.isDown && this.fire === true){
          console.log('Правый ранил')
          // this.right += 50;
          this.left -= 50;
          animateCowboy1();
          this.fire = false;
        } else if (this.l == 3 && this.keyS.isDown && this.fire === true){
        console.log('Левый ранил')
          this.right -= 50;
          // this.left += 50;
          this.fire = false;
      }
    }
    if (this.right == 0 && this.game == 1){
       this.game = 0;
       console.log('Левый вин')
    } else if (this.left == 0 && this.game == 1){
       this.game = 0;
       console.log('Правый вин');    
    }
    },

      animateCowboy1: function(sprite, event){
      sprite.play('animate1');
    },
      animateCowboy2: function(sprite, event) {
      sprite.play('animate2')
    },

  };


//initiate the Phaser framework
var game = new Phaser.Game(1080, 464, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');