<template>
    <ul>
        <li v-for="entry in entries" :key="entry.entryId">
            <router-link :to="'/entries/' + entry.entryId">{{ entry.frontMatter.title }}</router-link>
        </li>
    </ul>
</template>
<script lang="ts">
export default {
  props: {
    entries: {
      type: Array,
      required: true // 親コンポーネントからデータを必須で受け取る
    }
  }
};
</script>