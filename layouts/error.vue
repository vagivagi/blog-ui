<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <div v-else>
      <h1>
        {{ otherError }}
      </h1>
      <a href="https://github.com/vagivagi/vagivagi.com">Read on Github repository</a>
    </div>
    <br>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'Sorry for inconvenience. Please check article directly'
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
