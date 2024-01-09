<script>
import { store } from '../store';

export default {
  name: 'MessageResults',
  data() {
    return {
      store,
    }
  },
  computed: {
    cardArchetype() {
      return store.cardsList.length
    }
  }
}
</script>

<template>
  <!-- N° Carte (In base al filtro) -->
  <div class="filter-result px-3">
    <section v-if="cardArchetype > 0"><b>{{ cardArchetype }} Cards founded</b></section>
    <section v-else><b>No Cards founded</b></section>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables.scss' as *;

.filter-result {
  background-color: #000;
  height: 40px;
  @include vert-align-center;
}
</style>