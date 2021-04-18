<template>
    <div class="scores">
        <ScoreTable :scores="scores" />
    </div>
</template>

<script>
import ScoreTable from '@/components/ScoreTable.vue'

export default {
  name: 'scoretable',
  components: { ScoreTable },
  data () {
    return {
      scores: [{ id: 0, name: 'chey', score: 70 }, { id: 1, name: 'me', score: 700 }]
    }
  }
}
</script>
