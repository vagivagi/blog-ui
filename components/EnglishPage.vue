<template>
  <div class="main-content">
    <EnglishStudyNav />
    <v-container fluid>
    <v-row>
      <v-col>
        <EnglishContent :contentPath="contentPath" />
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
  props: {
    contentPath: String  
  }
};
</script>
<style lang="scss">
</style>
