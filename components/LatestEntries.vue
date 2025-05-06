<template>
    <ul>
        <li v-for="entry in entries" :key="entry.entryId">
            <router-link :to="'/entries/' + entry.entryId">{{ entry.frontMatter.title }}</router-link>
        </li>
    </ul>
</template>
<script lang="ts">
import axios from 'axios'

export default {
  async asyncData({ params }) {
    const baseUrl = process.env.API_BASE_URL || 'http://localhost:8080';
    const api = `${baseUrl}/entries`;
    const res = await axios.get(api);
    return {
      tag: params.tag,
      entries: res.data.slice(0, 5)
    };
  }
}
</script>