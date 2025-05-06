<template>
  <div class="main-content">
    <v-card>
      <v-card-title primary-title>
        <div class="headline">
          <v-icon color="orange">
            label
          </v-icon>
          <span>タグ</span>
          <router-link :to="'/entries/tags/' + tag + '/'">
            {{ tag }}
          </router-link>
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

export default {
  components: {
    Entries
  },
  async asyncData({ params }) {
    const baseUrl = process.env.API_BASE_URL || 'http://localhost:8080';
    const api = `${baseUrl}/tags/${params.tag}/entries`;
    const res = await axios.get(api);
    return {
      tag: params.tag,
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
