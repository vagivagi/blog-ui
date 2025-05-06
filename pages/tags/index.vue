<template>
  <div class="main-content">
    <br/>
    <h2 class="headline">タグから記事検索</h2>
    <v-divider></v-divider>
    <br/>
    <Tags v-bind:tags="tags"/>
  </div>
</template>

<script>
import Tags from '~/components/Tags.vue'
import axios from 'axios'

export default {
  components: {
    Tags
  },
  async asyncData() {
    const baseUrl = process.env.API_BASE_URL || 'http://localhost:8080';
    const api = `${baseUrl}/tags`;
    const res = await axios.get(api);
    return {
      tags: res.data // 静的生成時にデータを埋め込む
    };
  },
  head() {
    return {
      title: `タグ一覧`
    }
  }
}
</script>
