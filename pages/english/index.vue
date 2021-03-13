<template>
  <div class="main-content">
    <EnglishStudyNav />
    <h4 class="headline">概要</h4>
    <v-divider/>
    <br>
    <p class="text-justify">
      英語の勉強方法や記録をまとめるページです。<br>
      どんな方法で勉強しているか、どれくらい勉強したかをまとめる予定です。
    </p>
  </div>
</template>

<script>
import EnglishStudyNav from "~/components/EnglishStudyNav.vue";

export default {
  components: {
    EnglishStudyNav
  },
  head() {
    return {
      title: `コロナ禍なので、英語の勉強を頑張ってみた`
    };
  }
};
</script>
<style lang="scss">
</style>
