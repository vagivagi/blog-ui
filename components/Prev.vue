<template>
  <v-btn :to="'/entries/' + previousId" v-if="show" exact large>
    <v-icon left>arrow_back</v-icon>
    <span>{{ title }}</span>
  </v-btn>
</template>
<script lang="ts">
import axios from "axios";

export default {
  props: {
    currentId: { default: 0, type: Number},
    title: { default: "前の記事", type: String},
    show: { default: true, type: Boolean}
  },
  computed: {
    previousId: function () {
      return this.currentId - 1
    }
  },
  created () {
    const path =
      (process.env.API_BASE_URL || "http://localhost:8080") +
      `/entries/` + this.previousId ;
    return axios
      .get(path)
      .then(() => {
        this.show = true;
        return;
      })
      .catch(() => {
        this.show = false;
        return;
      });
  }
}
</script>