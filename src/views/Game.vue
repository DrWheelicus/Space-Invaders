<template>
    <div>
      <div ref="game" id="game" class="game">
      </div>
      <div class="controls">
        <table style="width:25%;margin:auto">
          <tr>
            <th>Action</th>
            <th>Control</th>
          </tr>
          <tr>
            <td>Move Left</td>
            <td>Left Arrow</td>
          </tr>
          <tr>
            <td>Move Right</td>
            <td>Right Arrow</td>
          </tr>
          <tr>
            <td>Fire</td>
            <td>Spacebar</td>
          </tr>
        </table>
      </div>
    </div>
</template>

<script>
// import phaser package and image assets
import Phaser from 'phaser'
import playerImg from '../assets/sprites/player.png'
import playerLeftImg from '../assets/sprites/playerLeft.png'
import playerRightImg from '../assets/sprites/playerRight.png'
import playerLaserImg from '../assets/sprites/laserGreen.png'

// creating a class for the laser to use
class Laser extends Phaser.Physics.Arcade.Sprite {
  constructor (scene, x, y) {
    super(scene, x, y, 'playerLaser')
  }

  fire (x, y) {
    this.body.reset(x, y)

    this.setActive(true)
    this.setVisible(true)

    this.setVelocityY(-900)
  }

  preUpdate (time, delta) {
    super.preUpdate(time, delta)

    if (this.y <= 0) {
      this.setActive(false)
      this.setVisible(false)
    }
  }
}

// creating a class for the group of player lasers to use
class PlayerLaserGroup extends Phaser.Physics.Arcade.Group {
  constructor (scene) {
    super(scene.physics.world, scene)

    this.createMultiple({
      classType: Laser,
      frameQuantity: 30,
      active: false,
      visible: false,
      key: 'playerLaser'
    })
  }

  // called when a laser is to be fired
  fireLaser (x, y) {
    const laser = this.getFirstDead(false)
    if (laser) {
      laser.fire(x, y)
    }
  }
}

// creating a GameScene class to be used as the game itself
class GameScene extends Phaser.Scene {
  // used when a laser is to be fired
  shootLaser () {
    this.playerLaserGroup.fireLaser(this.player.x, this.player.y - 20)
  }

  // called before the game is loaded
  preload () {
    // load the image assets
    this.load.image('player', playerImg)
    this.load.image('playerLeft', playerLeftImg)
    this.load.image('playerRight', playerRightImg)
    this.load.image('playerLaser', playerLaserImg)
  }

  // used to make the playable character
  makePlayer (x, y) {
    // add the image sprite to the player object
    this.player = this.add.image(x, y, 'player').setOrigin(0.5, 1)

    // create a list of properties for the player
    this.player.properties = {}
    this.player.properties.speed = 2.5
    this.player.properties.laserSpeed = 5
    this.player.properties.maxLasers = 1
  }

  // used to create the game itself
  create () {
    // set the background colour
    this.cameras.main.setBackgroundColor('#24252A')

    // make a laser group
    this.playerLaserGroup = new PlayerLaserGroup(this)

    // make the player object
    this.makePlayer(this.sys.canvas.width / 2, this.sys.canvas.height - 5)

    // set the player scale to an appropriate size
    this.player.scale = 0.6

    // set the keys the appropriate keycodes
    this.leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
    this.rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
  }

  // update() is called once every frame
  update () {
    /*
    *     Player Movement
    */
    // if the user is pressing the 'right' key and the player is within the screen
    if (this.rightKey.isDown && this.player.x < this.sys.canvas.width - this.player.displayWidth * this.player.originX) {
      // move the player to the right and change the sprite
      this.player.x += this.player.properties.speed
      this.player.setTexture('playerRight')
    // if the user is pressing the 'left' key and the player is within the screen
    } else if (this.leftKey.isDown && this.player.x > 0 + this.player.displayWidth * this.player.originX) {
      // move the player to the left and change the sprite
      this.player.x -= this.player.properties.speed
      this.player.setTexture('playerLeft')
    } else {
      this.player.setTexture('player')
    }

    /*
    *   Player Firing
    */
    if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
      this.shootLaser()
    }
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
      physics: {
        default: 'arcade',
        arcade: {
          debug: false,
          gravity: { y: 0 }
        }
      },
      scene: GameScene
    }
    // create the game
    this.game = new Phaser.Game(config)
  }
}
</script>
