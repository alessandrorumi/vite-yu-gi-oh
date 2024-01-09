<script>
import SingleCard from './SingleCard.vue';
import { store } from '../store';
import AppLoader from './AppLoader.vue';

export default {
  name: 'CardsList',
  components: {
    SingleCard,
    AppLoader
  },
  data() {
    return {
      store,
    }
  },
}
</script>

<template>
  <div class="container p-5">
    <!-- Card Container -->
    <div class="card-container">

      <div v-if="!store.loading" class="row m-0 gy-3">
        <div v-for="card in store.cardsList" :key="card.id" class="mycard p-0">
          <SingleCard :info="card" />
        </div>
      </div>

      <AppLoader v-else />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables.scss' as *;

.container {
  background-color: #fff;

  .card-container {
    .row {
      display: flex;
      justify-content: space-between;

      .mycard {
        width: calc((20%) - 1rem);
        background-color: $mr-brown;
        text-align: center;
      }
    }
  }
}
</style>