<template>
  <v-card>
    <v-container>
      <v-list>
        <template v-for="(entry, index) in entries">
          <v-list-item :key="`first-${index}`">
            <v-list-item-content>
              <v-list-item-title>
                <router-link :to="'/entries/' + entry.entryId">{{ entry.frontMatter.title }}</router-link>
              </v-list-item-title>
              <v-list-item-subtitle>
                <CategoriesLink :categories="entry.frontMatter.categories"/>
              </v-list-item-subtitle>
              <v-list-item-subtitle>投稿日時 : {{entry.created.date | moment}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider v-if="index + 1 < entries.length" :key="index"/>
        </template>
      </v-list>
    </v-container>
  </v-card>
</template>
<script lang="ts">
import CategoriesLink from './CategoriesLink.vue';
import moment from 'moment';

export default {
  props: {
    entries: {
      type: Array,
      required: true
    }
  },
  components: {
    CategoriesLink
  },
  filters: {
    moment(value) {
      return moment(value).format('YYYY/MM/DD HH:mm');
    }
  }
};
</script>