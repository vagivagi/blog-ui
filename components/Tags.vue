<template>
  <v-card>
    <v-container>
      <template v-for="(tag, index) in tags">
        <div :key="index">
          <v-icon color="orange">
            label
          </v-icon>
          <router-link :to="'/entries/tags/' + tag.value + '/'">{{ tag.value }}</router-link>
          <br>
        </div>
      </template>
    </v-container>
  </v-card>
</template>
<script lang="ts">

export default {
  props: {
    tags: {
      type: Array,
      required: true
    }
  }
}
</script>
<style>
</style>
