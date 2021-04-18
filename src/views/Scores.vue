<template>
    <div class="scores">
        <h1>High Scores</h1>
        <h4 v-if="loading" variant="info">Loading...</h4>
        <h4 v-if="scores.length == 0">No scores have been submitted yet. Be the first to do it!</h4>
        <table v-else class='highscores'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="score in scores" :key="score.id">
                    <td>{{ score.name }}</td>
                    <td>{{ score.score }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style>
.highscores{
  margin-left: auto;
  margin-right: auto;
}
</style>

<script>
import api from '@/api'
export default {
  data () {
    return {
      loading: false,
      scores: []
    }
  },
  async created () {
    this.refreshScores()
  },
  methods: {
    async refreshScores () {
      this.loading = true
      this.scores = await api.getHighscores()
      this.scores.sort((a, b) => b.score - a.score)
      this.loading = false
    }
  }
}
</script>
