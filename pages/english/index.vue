<template>
  <div class="main-content">
    <EnglishStudyNav />
    <v-container fluid>
    <v-row>
      <v-col>
        <EnglishContent :contentPath="path" />
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
import EnglishStudyNav from "~/components/EnglishStudyNav.vue";
import EnglishContent from "~/components/EnglishContent.vue";

export default {
  components: {
    EnglishStudyNav,
    EnglishContent
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
