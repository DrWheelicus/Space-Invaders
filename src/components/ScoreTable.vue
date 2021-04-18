<template>
<div class="scoretable">
        <h1>High Scores</h1>

        <table>
            <tr v-bind:key="score.id" v-for="score in scores">
                <td>{{score.name}}</td>
                <td>{{score.score}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
  name: 'ScoreTable',
  props: {
    scores: Array
  }
}
</script>

<style lang="scss">
h1{
    font-family: 'Press Start 2P', cursive;
}
table{
    margin-left: auto;
    margin-right: auto;
    color: white;
    font-family: 'Press Start 2P', cursive;
}
</style>
