<template>
  <v-app>
    <nav>
      <v-toolbar dense>
        <v-toolbar-title class="pr-4" small>
          <router-link :to="to" class="toolbar-title" tag="h4">{{ title }}</router-link>
        </v-toolbar-title>
        <v-spacer class="d-flex d-sm-none"></v-spacer>
        <v-toolbar-items>
          <v-btn v-for="(item, i) in items" :key="i" :to="item.to" text>
            <v-icon :color="item.color" left>{{ item.icon }}</v-icon>
            <span class="d-none d-sm-flex">{{ item.title }}</span>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </nav>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <Cta />
    <v-footer :fixed="fixed" text-xs-center>
      <v-flex text-xs-center>
        <span>&copy; {{ year.getFullYear() }}</span>
      </v-flex>
    </v-footer>
  </v-app>
</template>

<script>
import Cta from "~/components/Cta.vue";

export default {
  components: {
    Cta
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      show: false,
      year: new Date(),
      items: [
        {
          icon: "description",
          color: "green",
          title: "記事",
          to: "/entries"
        },
        {
          icon: "layers",
          title: "カテゴリー",
          color: "blue",
          to: "/categories"
        },
        {
          icon: "label",
          title: "タグ",
          color: "orange",
          to: "/tags"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "vagivagi blog",
      to: "/"
    };
  }
};
</script>
<style>
.toolbar-title {
  color: black;
  text-decoration: none;
}
</style>
