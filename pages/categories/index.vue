<template>
  <div class="main-content">
    <v-banner class="headline">カテゴリーから記事検索</v-banner>
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
