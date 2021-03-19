<template>
  <div class="main-content">
    <v-banner class="headline">タグから記事検索</v-banner>
    <br/>
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
