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
    show: { default: true, type: Boolean },
    exists: { default: false, type: Boolean } // 静的生成時に埋め込む
  },
  computed: {
    previousId: function () {
      return this.currentId - 1;
    }
  },
  data() {
    return {
      show: this.exists // 静的生成時に埋め込まれたデータを使用
    };
  }
};
</script>