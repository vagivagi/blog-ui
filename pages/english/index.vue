<template>
  <div class="main-content">
    <v-treeview
      open-all
      dense
      :items="items"
    >
      <template slot="label" slot-scope="{ item }">
        <router-link :to="item.to">{{ item.name }}</router-link>
      </template>
    </v-treeview>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `英語勉強法まとめ`
    };
  },
  data: () => ({
      items: [
        {
          id: 1,
          name: '英語勉強法',
          to: '/blog',
          children: [
            { id: 2, name: '語彙', to : '/english' },
            { id: 3, name: '発音', to : '/english' },
            { id: 4, name: '文法', to : '/english' },
          ],
        }
      ]
  })
};
</script>
<style lang="scss">
</style>
