<script>
export default {
  name: 'AppSearch'
}
</script>

<template>
  <!-- Dropdown Button -->
  <div class="dropdown pt-4">
    <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Choose Archetype
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Test</a></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables.scss' as *;
</style>
