<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <a :href="this.githubLink" target="_blank" rel="noopener">
          <v-img v-bind:src="this.imageLink"></v-img>
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
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
      imageLink: {
        type: String,
        required: true
      },
      githubLink: {
        type: String,
        required: true
      },
      id: this.githubId
    };
  },
  created: function() {
    this.imageLink =
      "https://grass-graph.moshimo.works/images/" + this.id + ".png";
    this.githubLink = "https://github.com/" + this.id;
  }
};
</script>