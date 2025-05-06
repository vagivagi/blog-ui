<template>
  <v-btn :to="'/entries/' + previousId" v-if="show" exact>
    <v-icon left>arrow_back</v-icon>
    <span>{{ title }}</span>
  </v-btn>
</template>
<script lang="ts">
export default {
  props: {
    currentId: { default: 0, type: Number },
    title: { default: "Prev", type: String },
    show: { default: true, type: Boolean }
  },
  computed: {
    previousId: function () {
      return this.currentId - 1;
    }
  }
};
</script>