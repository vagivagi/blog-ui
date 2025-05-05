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
  data() {
    return {
      tags: {
        type: Object
      }
    }
  },
  created: async function () {
    await this.refresh()
  },
  methods: {
    async refresh() {
      try {
        const apiUrl = process.env.API_BASE_URL || 'http://localhost:8080';
        let api = `${apiUrl}/tags`;
        const res = await axios.get(api);
        this.tags = res.data; // 検索結果を保存
      } catch (error) {
        console.error('データ取得中にエラーが発生しました:', error);
      }
    }
  },
  head() {
    return {
      title: `タグ一覧`
    }
  }
}
</script>
