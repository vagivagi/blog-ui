<template>
  <v-card>
    <v-container>
      <ul class="categories">
      <template v-for="(c, index) in categories">
        <li :key="index">
          <v-icon color="blue">layers</v-icon>
          <CategoriesLink :categories="c.categories"/>
          <br>
        </li>
      </template>
      </ul>
    </v-container>
  </v-card>
</template>
<script lang="ts">
import axios from 'axios'
import CategoriesLink from '~/components/CategoriesLink'

export default {
  components: {
    CategoriesLink
  },
  data() {
    return {
      categories: []
    }
  },
  created: async function () {
    await this.refresh()
  },
  methods: {
    refresh: async function () {
      const res = await axios.get(process.env.apiBaseUrl + '/categories')
      this.categories = res.data
    }
  }
}
</script>
<style>
ul.categories {
  list-style: none;
}
</style>
