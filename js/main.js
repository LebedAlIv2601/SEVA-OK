var GameState = {
  preload: function() {
this.game.physics.startSystem(Phaser.Physics.ARKADE); 
this.cursors = this.game.input.keyboard.createCursorKeys(); 
  },

  init: function() {

  },
  create: function(){
    game.stage.backgroundColor = "#33ffff";
this.blocks = ['green', 'yellow', 'red', 'blue']
this.k = 3;
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
      if(randNumber > 0.995 /*&& this.fire === false*/){
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
          this.fire = false;
        } else if (this.l == 0 && this.keyW.isDown && this.fire === true){
        console.log('Левый ранил')
          this.right -= 50;
          // this.left += 50;
          this.fire = false;
      }
              if (this.l == 1 && this.cursors.right.isDown && this.fire === true){
          console.log('Правый ранил')
          // this.right += 50;
          this.left -= 50;
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
  };
//initiate the Phaser framework
var game = new Phaser.Game(1080, 464, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');