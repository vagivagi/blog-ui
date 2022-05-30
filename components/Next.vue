<template>
  <v-btn :to="'/entries/' + nextId" v-if="show" exact>
    <v-icon left>arrow_forward</v-icon>
    <span>{{ title }}</span>
  </v-btn>
</template>
<script lang="ts">
import axios from "axios";

export default {
  props: {
    currentId: { default: 0, type: Number},
    title: { default: "Next", type: String},
    show: { default: true, type: Boolean}
  },
  computed: {
    nextId: function () {
      return this.currentId + 1
    }
  },
  created () {
    const path =
      (process.env.API_BASE_URL || "http://localhost:8080") +
      `/entries/` + this.nextId ;
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