<template>
    <ul id="example-1">
        <li v-for="entry in entries" :key="entry.entryId">
            <router-link :to="'/entries/' + entry.entryId">{{ entry.frontMatter.title }}</router-link>
        </li>
    </ul>
</template>
<script lang="ts">
import axios from 'axios'

export default {
  data() {
    return {
      entries: Object
    }
  },
  created: async function () {
    await this.refresh()
  },
  methods: {
    refresh: async function () {
      const apiUrl = process.env.apiBaseUrl || 'http://localhost:8080'
      let api = apiUrl + '/entries'
      const res = await axios.get(api)
      this.entries = res.data
    }
  }
}
</script>