<template>
  <div class="home">
    <img alt="Game Logo" src="../assets/logo.png" ref="/src/views/Home.vue">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PlayOptions from '@/components/PlayOptions.vue' // @ is an alias to /src

@Component({
  components: {
    PlayOptions
  }
})
export default class Home extends Vue {}
</script>
