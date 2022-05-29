<template>
  <div class="main-content">
    <v-banner class="headline">Latest Entries</v-banner>
    <br />
    <LatestEntries />
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
import GitHubProfile from "~/components/GitHubProfile.vue";
import LatestEntries from "~/components/LatestEntries.vue";

export default {
  components: {
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
