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
  async asyncData() {
    const baseUrl = process.env.API_BASE_URL || 'http://localhost:8080';
    const api = `${baseUrl}/entries`;
    const res = await axios.get(api);
    return {
      entries: res.data // 静的生成時にデータを埋め込む
    };
  },
  head() {
    return {
      title: `記事一覧`
    };
  }
};
</script>