<template>
  <div class="main-content">
    <v-card>
      <v-card-title primary-title>
        <div class="headline">
          <v-icon color="blue">layers</v-icon><span>カテゴリ:</span>
          <CategoriesLink :categories="categories"/>
          <span>の記事一覧</span>
        </div>
      </v-card-title>
    </v-card>
    <br>
    <Entries v-bind:entries="entries" />
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import Entries from '~/components/Entries.vue';
import CategoriesLink from '~/components/CategoriesLink.vue';

export default {
  components: {
    Entries,
    CategoriesLink
  },
  data() {
    return {
      categories: this.$route.params.categories.split(','),
      entries: [] // 検索結果を格納
    };
  },
  created: async function () {
    await this.refresh(); // 初期データを取得
  },
  methods: {
    async refresh() {
      try {
        const apiUrl = process.env.API_BASE_URL || 'http://localhost:8080';
        let api = `${apiUrl}/entries`;
        if (this.categories) {
          api = `${apiUrl}/categories/${this.categories}/entries`;
        }
        const res = await axios.get(api);
        this.entries = res.data; // 検索結果を保存
      } catch (error) {
        console.error('データ取得中にエラーが発生しました:', error);
      }
    }
  },
  head() {
    return {
      title: `記事一覧`
    };
  }
};
</script>
