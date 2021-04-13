<template>
  <div class="home page">
    <particles-bg color="#FFFFFF" num=50 type="cobweb" :bg=true />
    <kinesis-container>
      <kinesis-element :strength="10" type="depth">
        <img
          alt="Game Logo"
          src="../assets/logo.png"
          ref="/src/views/Home.vue"
        />
      </kinesis-element>
    </kinesis-container>
    <ejs-button cssClass='e-info'>Play</ejs-button>
    <h1>About</h1>
    <p>(Currently unnamed) game works very similarly to the classic Space Invaders. The main objective of the game is to defend your home planet from the oncoming waves of enemy ships. The player can control their ship by using the arrow keys to move, and the space key to shoot. Upon defeating an entire wave of enemy ships, a new wave will spawn, which moves at increasingly faster speeds. The game is endless, and your main goal as the player is to achieve the highest score possible!</p>
  </div>
</template>

<style lang="scss">
.home {
  font-family: 'Press Start 2P', cursive;
  color: white;
  padding-top: 15rem;
}

body {
  background-color: #050507;
}

p {
  margin-left: 10rem;
  margin-right: 10rem;
}

.e-btn {
  margin: 25px 5px 20px 20px;
}
</style>

<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class Home extends Vue {}
</script>
