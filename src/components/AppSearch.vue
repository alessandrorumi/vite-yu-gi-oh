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
    <select class="form-select" aria-label="Default select example" v-model="store.searchArchetype"
      @change="$emit('filter')">
      <option selected>Choose Archetype</option>
      <option v-for="archetype in store.archetypes" :value="archetype.archetype_name">{{
        archetype.archetype_name }}
      </option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables.scss' as *;

.form-select {
  width: 15rem;
}
</style>
