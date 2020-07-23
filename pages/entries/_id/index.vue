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
        <div v-html="$md.render(entry.content)"/>
    
    </div>
  </div>
</template>

<script lang="ts">
import Prism from 'prismjs'
import CategoriesLink from '~/components/CategoriesLink.vue'

export default {
  asyncData(context) {
    const path = (process.env.apiBaseUrl || 'http://localhost:8080') + `/entries/${context.route.params.id}`
    return context.app.$axios
      .$get(path)
      .then((res) => {
        return { entry: res }
      })
      .catch((e) => {
        if (e.response === undefined) {
          context.error({
            statusCode: 500,
            message: 'Internal Server Error'
          })
          return
        }
        context.error({
          statusCode: e.response.status,
          message: 'Post not found'
        })
      })
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
