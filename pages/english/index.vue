<template>
  <EnglishPage :contentPath="path"/>
</template>

<script>
import EnglishPage from "~/components/EnglishPage.vue";

export default {
  components: {
    EnglishPage
  },
  head() {
    return {
      title: `コロナ禍なので、英語の勉強を頑張ってみた`
    };
  },
  data: function() {
    return {
      id: this.githubId,
      path: "index.md"
    };
  }
};
</script>
<style lang="scss">
</style>
