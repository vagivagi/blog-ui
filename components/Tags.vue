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
import axios from 'axios'
import { PropType } from 'vue'

export default {
  data() {
    return {
      tags: {
        type: Object
      }
    }
  },
  created: async function () {
    await this.refresh()
  },
  methods: {
    refresh: async function () {
      const res = await axios.get(process.env.API_BASE_URL + '/tags')
      this.tags = res.data
    }
  }
}
</script>
<style>
</style>
