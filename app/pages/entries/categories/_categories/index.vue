<template>
  <div class="main-content">
    <v-card>
      <v-card-title primary-title>
        <div class="headline">
          <v-icon color="blue">layers</v-icon><span>カテゴリ:</span>
          <CategoriesLink :categories="this.categories"/>
          <span>の記事一覧</span>
        </div>
      </v-card-title>
    </v-card>
    <br>
    <Entries :categories="this.$route.params.categories" />
  </div>
</template>

<script>
import Entries from '~/components/Entries.vue'
import CategoriesLink from '~/components/CategoriesLink.vue'

export default {
  data() {
    return {
      categories: this.$route.params.categories.split(',')
    }
  },
  components: {
    Entries,
    CategoriesLink
  },
  head() {
    return {
      title: `記事一覧`
    }
  }
}
</script>
