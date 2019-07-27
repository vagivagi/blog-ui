<template>
  <v-card>
    <v-container>
      <v-list>
        <template v-for="(entry, index) in entries">
          <v-list-tile :key="`first-${index}`">
            <v-list-tile-avatar>
              <v-icon color="green">description</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>
                <router-link :to="'/entries/' + entry.entryId">{{ entry.frontMatter.title }}</router-link>
              </v-list-tile-title>
              <v-list-tile-sub-title>
                <CategoriesLink :categories="entry.frontMatter.categories"/>
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider v-if="index + 1 < entries.length" :key="index"/>
        </template>
      </v-list>
    </v-container>
  </v-card>
</template>
<script lang="ts">
import axios from 'axios'
import CategoriesLink from '~/components/CategoriesLink'

export default {
  props: ['query', 'tag', 'categories'],
  components: {
    CategoriesLink
  },
  data() {
    return {
      entries: []
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
      let api = process.env.apiBaseUrl + '/entries'
      if (this.query !== undefined) {
        api = process.env.apiBaseUrl + '/entries?q=' + this.query
      } else if (this.tag != null) {
        api = process.env.apiBaseUrl + '/tags/' + this.tag + '/entries'
      } else if (this.categories != null) {
        api = process.env.apiBaseUrl + '/categories/' + this.categories + '/entries'
      }
      const res = await axios.get(api)
      this.entries = res.data
    }
  }
}
</script>
<style>
</style>
