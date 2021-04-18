<template>
    <div class="scores">
        <h1>High Scores</h1>
        <ScoreTable :scores="scores" />
    </div>
</template>

<script>
import ScoreTable from '@/components/ScoreTable.vue'
import api from '@/api'
export default {
  name: 'scoretable',
  components: { ScoreTable },
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
