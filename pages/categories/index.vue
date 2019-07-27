<template>
  <div class="main-content">
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
