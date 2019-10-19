<template>
 <span v-html="render()"></span>
</template>
<script lang="ts">

export default {
  props: {
    categories: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  methods: {
    render: function () {
      const buf = []
      const ret = []
      for (const c of this.categories) {
        buf.push(c)
        ret.push('<a href="/entries/categories/' + buf + '/">' + c + '</a>')
      }
      return ret.join('/')
    }
  }
}
</script>
