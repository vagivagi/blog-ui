<template>
  <div class="main-content">
    <Tags />
  </div>
</template>

<script>
import Tags from '~/components/Tags.vue'

export default {
  components: {
    Tags
  },
  head() {
    return {
      title: `タグ一覧`
    }
  }
}
</script>
