<template>
  <div class="main-content">
    <!-- <v-card>
      <v-card-title>
        <v-text-field
         v-model="query"
         @keydown.enter="search"
         @compositionstart="composing=true"
         @compositionend="composing=false"
         append-icon="search"
         label="記事検索"
         single-line
         hide-details />
      </v-card-title>
    </v-card>
    <br> -->
    <Entries :entries="entries"/>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import Entries from '~/components/Entries.vue';

export default {
  components: {
    Entries
  },
  data() {
    return {
      composing: false,
      query: '', // 検索クエリ
      entries: [] // 検索結果を格納
    };
  },
  created: async function () {
    await this.refresh(); // 初期データを取得
  },
  watch: {
    query: async function () {
      if (!this.composing) {
        await this.refresh(); // クエリ変更時にデータを更新
      }
    }
  },
  methods: {
    async refresh() {
      try {
        const apiUrl = process.env.API_BASE_URL || 'http://localhost:8080';
        let api = `${apiUrl}/entries`;

        // クエリに応じて API エンドポイントを変更
        if (this.query) {
          api = `${apiUrl}/entries?q=${this.query}`;
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