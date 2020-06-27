<template>
  <div class="main-content">
    <h2>Home</h2>
    <div class="profileBlock">
      <h3 class="headline">Latest Entries</h3>
      <LatestEntries />
    </div>
    <div class="profileBlock">
      <h3 class="headline">Profile</h3>
      <p>都内在住のシステムエンジニアです。主にJava周辺のサーバーサイドいじっています。<br>
      このサイトは自分用のメモや日記向けに開発しました。</p>
    </div>
    <div class="profileBlock">
      <h3 class="headline">Skill</h3>
        <h4 class="title">Language</h4>
        <p class="body-1">Java, JavaScript, TypeScript, Ruby, Go</p>
        <h4 class="title">Framework/Library</h4>
        <p class="body-1">Spring Framework, Spring Boot, Seasar2, Vue.js, Nuxt.js, React, Sinatra</p>
        <h4 class="title">Tool</h4>
        <p class="body-1">GitHub.com, GitHub Enterprise(Admin), Cloud Foundry, Heroku, AWS, Azure, Concourse CI, </p>
    </div>
    <div class="profileBlock">
    <h3 class="headline">GitHub Activities</h3>
    <GlassGraph v-bind:github-id="vagivagi" />
    </div>
    <div class="profileBlock">
      <h3 class="headline">Contact</h3>
      <p class="title"><a href="https://forms.gle/NGbfkEnM5VxUA6Eq7" target="_blank" rel="noopener">Google Form</a></p>
    </div>
  </div>
</template>

<script>
import GlassGraph from '~/components/GlassGraph.vue'
import LatestEntries from '~/components/LatestEntries.vue'

export default {
  components: {
    GlassGraph,
    LatestEntries
  },
  head() {
    return {
      title: `TOP`
    }
  }
}
</script>
<style scoped>
  .profileBlock {
    margin: 10px;
  }
</style>
