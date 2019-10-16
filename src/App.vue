<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
.main-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  .app-main {
    flex: 1;
    overflow: scroll;
  }
}
</style>
