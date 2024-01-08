<script>
export default {
  name: 'AppHeader'
}
</script>

<template>
  <header>
    <div class="logo ms-3 me-4">
      <img src="../assets/yu-gi-oh-logo.svg" alt="">
    </div>
    <h1>Yu-Gi-Oh Api</h1>
  </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables.scss' as *;

header {
  height: 60px;
  @include vert-align-center;

  .logo {
    img {
      width: 100px;
    }
  }
}
</style>
