<template>
  <div class="main-content">
    <div class="profileBlock">
      <h3 class="headline">Latest Entries</h3>
      <br>
      <LatestEntries />
      <br>
      <div>
        <p>
          <a href="./entries">全ての記事はこちら</a>
        </p>
      </div>
    </div>
    <div class="profileBlock">
      <h3 class="headline">Profile</h3>
      <p>
        都内在住のシステムエンジニアです。主にJava周辺のサーバーサイドいじっています。<br />
        このサイトは自分用のメモや日記向けに開発しました。プロフィールはただいま更新中。
      </p>
    </div>
    <div class="profileBlock">
      <GitHubProfile />
      <h3 class="headline">GitHub Activities</h3>
      <GrassGraph />
    </div>
    <div class="profileBlock">
      <h3 class="headline">Contact</h3>
      <p class="title">
        <a
          href="https://forms.gle/NGbfkEnM5VxUA6Eq7"
          target="_blank"
          rel="noopener"
          >Google Form</a
        >
      </p>
    </div>
  </div>
</template>

<script>
import GrassGraph from "~/components/GrassGraph.vue";
import GitHubProfile from "~/components/GitHubProfile.vue";
import LatestEntries from "~/components/LatestEntries.vue";

export default {
  components: {
    GrassGraph,
    GitHubProfile,
    LatestEntries
  },
  head() {
    return {
      title: `TOP`
    };
  }
};
</script>
<style scoped>
.profileBlock {
  margin: 10px;
}
</style>
