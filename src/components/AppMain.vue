<script>
import SingleCard from './SingleCard.vue';

export default {
  name: 'AppMain',
  components: {
    SingleCard
  }
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
        <div class="row m-0 gy-3">
          <div class="mycard">
            <SingleCard />
          </div>
          <div class="mycard">
            <SingleCard />
          </div>
          <div class="mycard">
            <SingleCard />
          </div>
          <div class="mycard">
            <SingleCard />
          </div>
          <div class="mycard">
            <SingleCard />
          </div>
          <div class="mycard">
            <SingleCard />
          </div>
          <div class="mycard">
            <SingleCard />
          </div>
          <div class="mycard">
            <SingleCard />
          </div>
          <div class="mycard">
            <SingleCard />
          </div>
          <div class="mycard">
            <SingleCard />
          </div>
        </div>
      </div>
    </div>

  </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables.scss' as *;

main {
  min-height: 800px;
  background-color: rgb(153, 102, 36);
  padding: 0 10rem;

  .container {
    background-color: #fff;
    min-height: 600px;

    .filter-result {
      background-color: #000;
      height: 40px;
      color: #fff;
      @include vert-align-center;
    }

    .card-container {
      .row {
        display: flex;
        justify-content: space-between;

        .mycard {
          border: 3px solid black;
          width: calc((20%) - 1rem);
          min-height: 100px;
        }
      }
    }
  }
}
</style>