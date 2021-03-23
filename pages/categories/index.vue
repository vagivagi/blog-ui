<template>
  <div class="main-content">
    <br/>
    <h2 class="headline">カテゴリーから記事検索</h2>
    <v-divider></v-divider>
    <br/>
    <Categories />
  </div>
</template>

<script>
import Categories from '~/components/Categories.vue'

export default {
  components: {
    Categories
  },
  head() {
    return {
      title: `カテゴリ一覧`
    }
  }
}
</script>
