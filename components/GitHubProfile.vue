<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <div class="profile" v-html="$md.render(profile)" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Prism from "prismjs";
import axios from "axios";

export default {
  props: {
    githubId: {
      type: String,
      required: false,
      default: 'vagivagi'
    }
  },
  data: function() {
    return {
      id: this.githubId,
      profile: "Now Rendering"
    };
  },
  mounted () {
    Prism.highlightAll();
    const path =
      "https://raw.githubusercontent.com/" +
      // this.githubId +
      "vagivagi/vagivagi" +
      // this.githubId +
      "/main/README.md";
    axios
      .get(path)
      .then(response => (this.profile = response.data));
  }
};
</script>
