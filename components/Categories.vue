<template>
  <v-card>
    <v-container>
      <ul class="categories">
      <template v-for="(c, index) in categories">
        <li :key="index">
          <v-icon color="blue">layers</v-icon>
          <CategoriesLink :categories="c.categories"/>
        </li>
      </template>
      </ul>
    </v-container>
  </v-card>
</template>
<script lang="ts">
import axios from 'axios'
import CategoriesLink from './CategoriesLink.vue'

export default {
  components: {
    CategoriesLink
  },
  data() {
    return {
      categories: {
        type: Object,
        required: true
      }
    }
  },
  created: async function () {
    const res = await axios.get(process.env.apiBaseUrl + '/categories')
    this.categories = res.data
  }
}
</script>
<style>
ul.categories {
  list-style: none;
}
</style>
