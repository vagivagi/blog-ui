<template>
  <div class="main-content">
    <EnglishStudyNav />
    <v-container fluid>
    <v-row>
      <v-col>
        <div class="profile" v-html="$md.render(index)" />
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
import EnglishStudyNav from "~/components/EnglishStudyNav.vue";
import axios from "axios";

export default {
  components: {
    EnglishStudyNav
  },
  head() {
    return {
      title: `コロナ禍なので、英語の勉強を頑張ってみた`
    };
  },
  data: function() {
    return {
      id: this.githubId,
      index: "Now Rendering"
    };
  },
  mounted () {
    const path =
      "https://api.github.com/repos/vagivagi/english-post/contents/index.md";
    const config = {
      headers: {
        'Accept': 'application/vnd.github.v3.raw',
        'Authorization' : 'token ' + process.env.GITHUB_ACCESS_TOKEN
      }
    };
    axios
      .get(path, config)
      .then(response => (this.index = response.data));
  }
};
</script>
<style lang="scss">
</style>
