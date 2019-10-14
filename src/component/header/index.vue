<template>
  <header>{{ title }}</header>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      title: ''
    }
  },
  mounted() {
    const arr = this.$store.state.tagsView.visitedViews
    this.title = arr[arr.length - 1].title
  }
}
</script>
<style lang="scss">
</style>
