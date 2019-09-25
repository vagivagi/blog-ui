<template>
  <div class="main-content">
    <v-card>
      <v-card-title>
        <v-text-field
         v-model="searchText"
         @keydown.enter="search"
         @compositionstart="composing=true"
         @compositionend="composing=false"
         append-icon="search"
         label="記事検索"
         single-line
         hide-details />
      </v-card-title>
    </v-card>
    <br>
    <Entries v-bind:query="this.query"/>
  </div>
</template>

<script>
import Entries from '~/components/Entries.vue'

export default {
  props: {
    query: [String],
    searchText: [String]
  },
  data() {
    return {
      composing: false
    }
  },
  components: {
    Entries
  },
  methods: {
    setCanSearch() {
      this.canSearch = true
    },
    search: function () {
      if (this.composing) {
        return
      }
      this.query = this.searchText
    }
  },
  head() {
    return {
      title: `記事一覧`
    }
  }
}
</script>
