import Phaser from 'phaser'
export default {
//   data () {
//     return {
//       initialize: false,
//       game: {
//         width: 800,
//         height: 600,
//         type: Phaser.AUTO,
//         scene: {
//           init () {
//             this.cameras.main.setBackgroundColor('#24252A')
//           },
//           create () {
//             this.helloWorld = this.add.text(
//               this.cameras.main.centerX,
//               this.cameras.main.centerY,
//               'Game Template',
//               { font: '40px Arial', fill: '#ffffff' }
//             )
//             this.helloWorld.setOrigin(0.5)
//           },
//           update () {
//             this.helloWorld.angle += 1
//           }
//         }
//       }
//     }
//   },
//   methods: {
//     initializeGame () {
//       this.initialize = true
//     }
//   }
// }
}

let player

function makePlayer (x, y) {
  player = this.add.image(x, y, 'player').setOrigin(0.5, 1)
  return player
}

function init () {
  this.cameras.main.setBackgroundColor('#24252A')
}

function preload () {
  this.load.image('player', 'sprites/player.png')
}

function create () {
  player = this.makePlayer(this.sys.canvas.width / 2, this.sys.canvas.height / 2)
}

function update () {
  // this.helloWorld.angle += 1
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game',
  scene: {
    init: init,
    preload: preload,
    create: create,
    update: update,

    extend: {
      makePlayer: makePlayer
    }
  }
}

const game = new Phaser.Game(config)
