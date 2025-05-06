<template>
  <div class="main-content">
    <v-banner class="headline">Latest Entries</v-banner>
    <br />
    <LatestEntries :entries="latestEntries"/>
    <br />
    <div>
      <p>
        <a href="./entries">全ての記事はこちら</a>
      </p>
    </div>
    <v-banner class="headline">Profile</v-banner>
    <div class="profileBlock">
      <GitHubProfile />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import GitHubProfile from "~/components/GitHubProfile.vue";
import LatestEntries from "~/components/LatestEntries.vue";

export default {
  components: {
    GitHubProfile,
    LatestEntries
  },
  async asyncData() {
    const baseUrl = process.env.API_BASE_URL || "http://localhost:8080";
    const api = `${baseUrl}/entries`;
    try {
      const res = await axios.get(api);
      return {
        latestEntries: res.data.slice(0, 5) // 最新の5件を取得
      };
    } catch (error) {
      console.error("データ取得中にエラーが発生しました:", error);
      return {
        latestEntries: [] // エラー時は空配列を返す
      };
    }
  },
  head() {
    return {
      title: `TOP`
    };
  }
};
</script>
<style lang="scss">
.profileBlock {
  h1,
  h2,
  h3,
  h4,
  p,
  pre {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  ul {
    margin-top: 10px;
    margin-bottom: 5px;
  }
  li {
    margin-top: 5px;
    margin-bottom: 5px;
  }
}
</style>
