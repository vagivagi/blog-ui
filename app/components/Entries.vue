<template>
  <v-card>
    <v-container>
      <v-list>
        <template v-for="(entry, index) in entries">
          <v-list-item :key="`first-${index}`">
            <v-list-item-avatar>
              <v-icon color="green">description</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>
                <router-link :to="'/entries/' + entry.entryId">{{ entry.frontMatter.title }}</router-link>
              </v-list-item-title>
              <v-list-item-subtitle>
                <CategoriesLink :categories="entry.frontMatter.categories"/>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider v-if="index + 1 < entries.length" :key="index"/>
        </template>
      </v-list>
    </v-container>
  </v-card>
</template>
<script lang="ts">
import axios from 'axios'
import CategoriesLink from './CategoriesLink.vue'

export default {
  props: ['query', 'tag', 'categories'],
  components: {
    CategoriesLink
  },
  data() {
    return {
      entries: Object
    }
  },
  created: async function () {
    await this.refresh()
  },
  watch: {
    query: async function () {
      await this.refresh()
    }
  },
  methods: {
    refresh: async function () {
      const apiUrl = process.env.apiBaseUrl || 'http://localhost:8080'
      let api = apiUrl + '/entries'
      if (this.query !== undefined) {
        api = apiUrl + '/entries?q=' + this.query
      } else if (this.tag != null) {
        api = apiUrl + '/tags/' + this.tag + '/entries'
      } else if (this.categories != null) {
        api = apiUrl + '/categories/' + this.categories + '/entries'
      }
      const res = await axios.get(api)
      this.entries = res.data
    }
  }
}
</script>
<style>
</style>
