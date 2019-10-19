<template>
  <div class="main-content">
    <div class="container">
      <v-card>
        <v-card-title class="pa-3">
          <h1 class="headline font-weight-bold">{{ entry.frontMatter.title }}</h1>
        </v-card-title>
        <v-card-text class="pa-1">
          <v-chip color="white">
            <v-icon color="blue" left>layers</v-icon>
            <CategoriesLink :categories="this.entry.frontMatter.categories" />
          </v-chip>
          <br />
          <v-chip
            color="white"
            text-color="orange"
            v-for="tag in this.entry.frontMatter.tags"
            :key="tag"
          >
            <v-avatar>
              <v-icon>label</v-icon>
            </v-avatar>
            <router-link :to="'/entries/tags/' + tag + '/'">{{ tag }}</router-link>
          </v-chip>
          <br />
          <v-chip color="white" text-color="black">
            <v-avatar>
              <v-icon>date_range</v-icon>
            </v-avatar>
            <strong>更新日時:</strong>
            <strong>{{ this.entry.updated.date }}</strong>
          </v-chip>
          <v-chip color="white" text-color="black">
            <v-avatar>
              <v-icon>date_range</v-icon>
            </v-avatar>
            <strong>作成日時:</strong>
            <strong>{{ this.entry.created.date }}</strong>
          </v-chip>
        </v-card-text>
      </v-card>
      <br />
      <v-card>
        <v-card-text v-html="$md.render(entry.content)" line-numbers />
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import Prism from 'prismjs'
import CategoriesLink from '~/components/CategoriesLink.vue'

export default {
  async asyncData({ params }) {
    // We can use async/await ES6 featuere
    const { data } = await axios.get(
      process.env.apiBaseUrl || 'http://localhost:8080' + `/entries/${params.id}`
    )
    return { entry: data }
  },
  components: {
    CategoriesLink
  },
  mounted() {
    Prism.highlightAll()
  },
  head() {
    return {
      title: this.entry.frontMatter.title
    }
  }
}
</script>
<style>
</style>
