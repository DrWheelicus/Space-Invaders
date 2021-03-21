import Phaser from 'phaser'
export default {
  data () {
    return {
      initialize: false,
      game: {
        width: 800,
        height: 600,
        type: Phaser.AUTO,
        scene: {
          init () {
            this.cameras.main.setBackgroundColor('#24252A')
          },
          create () {
            this.helloWorld = this.add.text(
              this.cameras.main.centerX,
              this.cameras.main.centerY,
              'Game Template',
              { font: '40px Arial', fill: '#ffffff' }
            )
            this.helloWorld.setOrigin(0.5)
          },
          update () {
            this.helloWorld.angle += 1
          }
        }
      }
    }
  },
  methods: {
    initializeGame () {
      this.initialize = true
    }
  }
}
