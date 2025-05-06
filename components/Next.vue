<template>
  <v-btn :to="'/entries/' + nextId" v-if="show" exact>
    <v-icon left>arrow_forward</v-icon>
    <span>{{ title }}</span>
  </v-btn>
</template>
<script lang="ts">
export default {
  props: {
    currentId: { default: 0, type: Number },
    title: { default: "Next", type: String },
    show: { default: true, type: Boolean } // 静的生成時に埋め込む
  },
  computed: {
    nextId: function () {
      return this.currentId + 1;
    }
  }
};
</script>