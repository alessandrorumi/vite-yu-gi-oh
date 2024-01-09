<script>
import { store } from '../store';

export default {
  name: 'AppSearch',
  data() {
    return {
      store,
    }
  },
}
</script>

<template>
  <!-- Dropdown Button -->
  <div class="dropdown pt-4">
    <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Choose Archetype
    </button>
    <ul class="dropdown-menu">
      <li class="dropdown-item" v-for="archetype in store.archetypes">{{ archetype.archetype_name }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables.scss' as *;
</style>
