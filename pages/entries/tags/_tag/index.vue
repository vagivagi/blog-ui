<template>
  <div class="main-content">
    <v-card>
      <v-card-title primary-title>
        <div class="headline">
          <v-icon color="orange">
            label
          </v-icon>
          <span>タグ</span>
          <router-link :to="'/entries/tags/' + tag + '/'">
            {{ tag }}
          </router-link>
          <span>の記事一覧</span>
        </div>
      </v-card-title>
    </v-card>
    <br>
    <Entries :tag="tag" />
  </div>
</template>

<script>
import Entries from '~/components/Entries.vue'

export default {
  data() {
    return {
      tag: this.$route.params.tag
    }
  },
  components: {
    Entries
  },
  head() {
    return {
      title: `記事一覧`
    }
  }
}
</script>
