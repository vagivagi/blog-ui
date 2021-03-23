<template>
  <div class="main-content">
    <br/>
    <h2 class="headline">タグから記事検索</h2>
    <v-divider></v-divider>
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
