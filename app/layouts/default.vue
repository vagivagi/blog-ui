<template>
  <v-app>
    <nav>
    <v-toolbar
      class="hidden-sm-and-down">
      <v-toolbar-title class="pr-4">
        <router-link :to="to" class="toolbar-title">{{ title }}</router-link>
      </v-toolbar-title>
      <v-toolbar-items>
      <v-btn
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        flat>
        <v-icon left>{{ item.icon }}</v-icon>
        <div>{{ item.title }}</div>
      </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <div class="hidden-md-and-up">
      <v-expansion-panel>
        <v-expansion-panel-content
        expand
        v-model="show">
          <div slot="header">
           <strong>
             <router-link :to="to" class="toolbar-title">{{ title }}</router-link>
           </strong>
          </div>
          <v-card
           v-for="(item, i) in items"
           :key="i"
           flat
           v-model="show"
           >
             <router-link class="nav-item" :to="item.to">
              <v-card-text>{{ item.title }}</v-card-text>
             </router-link>
          </v-card>
        </v-expansion-panel-content>
        </v-expansion-panel>
      </div>
    </nav>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <Cta />
    <v-footer
      :fixed="fixed"
      app
      text-xs-center
    >
      <v-flex text-xs-center>
        <span>&copy; 2019</span>
      </v-flex>
    </v-footer>
  </v-app>
</template>

<script>
import Cta from '~/components/Cta.vue'

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
      items: [
        {
          icon: 'description',
          title: '記事一覧',
          to: '/entries'
        },
        {
          icon: 'layers',
          title: 'カテゴリ',
          to: '/categories'
        },
        {
          icon: 'label',
          title: 'タグ',
          to: '/tags'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'vagivagi blog',
      to: '/entries'
    }
  }
}
</script>
<style>
.toolbar-title {
  color: black;
  text-decoration: none;
}
</style>
