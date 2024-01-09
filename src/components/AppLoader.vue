<script>
export default {
  name: 'AppLoader'
}
</script>

<template>
  <div class="loader">
    <div class="text">Loading...</div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables.scss' as *;

.loader {
  width: 100%;
  height: 100vh;

  .text {
    color: #000;
  }
}
</style>