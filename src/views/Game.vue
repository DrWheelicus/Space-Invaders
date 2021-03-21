<template>
    <div ref="game" id="game" class="game">
    </div>
</template>

<script>
// import phaser package and image assets
import Phaser from 'phaser'
import playerImg from '../assets/sprites/player.png'
import playerLeftImg from '../assets/sprites/playerLeft.png'
import playerRightImg from '../assets/sprites/playerRight.png'

// create vars to be used in game creation
let player
let leftKey
let rightKey

// execute these commands before the game is loaded
function preload () {
  // set the background colour
  this.cameras.main.setBackgroundColor('#24252A')

  // load the image assets
  this.load.image('player', playerImg)
  this.load.image('playerLeft', playerLeftImg)
  this.load.image('playerRight', playerRightImg)
}

// create the player
function makePlayer (x, y) {
  // add the image sprite to the player object
  const player = this.add.image(x, y, 'player').setOrigin(0.5, 1)

  // create a list of properties for the player
  player.properties = {}
  player.properties.speed = 2.5

  // return the player object
  return player
}

// execute these commands when creating the game
function create () {
  // make the player object
  player = this.makePlayer(this.sys.canvas.width / 2, this.sys.canvas.height - 5)

  // set the player scale to an appropriate size
  player.scale = 0.6

  // set the keys the appropriate keycodes
  leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
  rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
}

// update is executed once every frame
function update () {
  // if the user is pressing the 'right' key and the player is within the screen
  if (rightKey.isDown && player.x < this.sys.canvas.width - player.displayWidth * player.originX) {
    // move the player to the right and change the sprite
    player.x += player.properties.speed
    player.setTexture('playerRight')
  // if the user is pressing the 'left' key and the player is within the screen
  } else if (leftKey.isDown && player.x > 0 + player.displayWidth * player.originX) {
    // move the player to the left and change the sprite
    player.x -= player.properties.speed
    player.setTexture('playerLeft')
  } else {
    player.setTexture('player')
  }
}

// export the data
export default {
  data () {
    return {
      game: null
    }
  },
  mounted () {
    // create the config for the game
    const config = {
      parent: this.$refs.game,
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      scene: {
        preload: preload,
        create: create,
        update: update,

        extend: {
          makePlayer: makePlayer
        }
      }
    }
    // create the game
    this.game = new Phaser.Game(config)
  }
}
</script>
