<template>
  <v-navigation-drawer
      clipped
      fixed
      app
    >
      <v-treeview
      open-all
      dense
      :items="items"
    >
      <template slot="label" slot-scope="{ item }">
        <router-link :to="item.to">{{ item.name }}</router-link>
      </template>
    </v-treeview>
    </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
      items: [
        {
          id: 1,
          name: '英語勉強法',
          to: '/english',
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