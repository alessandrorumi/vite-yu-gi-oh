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
  <main class="py-5">
    <!-- Dropdown Button -->
    <div class="dropdown">
      <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown button
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>

    <div class="container mt-4 p-5">
      <!-- N° Carte (In base al filtro) -->
      <div class="filter-result">
        <span><b>Found X Cards</b></span>
      </div>
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

  </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables.scss' as *;

main {
  background-color: $mr-brown;
  padding: 0 10rem;

  .container {
    background-color: #fff;

    .filter-result {
      background-color: #000;
      height: 40px;
      @include vert-align-center;
    }

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
}
</style>