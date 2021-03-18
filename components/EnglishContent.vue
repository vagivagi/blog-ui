<template>
  <div>
    <div v-if="content !== ''" class="content" v-html="$md.render(content)" />
    <v-progress-circular
        v-else
        indeterminate
        color="primary"></v-progress-circular>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    contentPath: String  
  },
  data: function() {
    return {
      id: this.githubId,
      content: ""
    };
  },
  created: async function () {
    await this.refresh()
  },
  watch: {
    query: async function () {
      await this.refresh()
    }
  },
  methods: {
    refresh: async function () {
      const apiPath = "https://api.github.com/repos/vagivagi/english-post/contents/" + this.contentPath;
        const config = {
            headers: {
                'Accept': 'application/vnd.github.v3.raw',
                'Authorization' : 'token ' + process.env.GITHUB_ACCESS_TOKEN
            }
        }
      await axios
        .get(apiPath, config)
        .then(response => (this.content = response.data));
    }
  }
};
</script>
<style lang="scss">
.content {
  h1,
  h2,
  h3,
  h4,
  p,
  pre {
    margin-top: 0px;
    margin-bottom: 20px;
  }
  ul {
    margin-top: 5;
    margin-bottom: 10px;
  }
  li {
    margin-top: 5px;
    margin-bottom: 10px;
  }
}
</style>
