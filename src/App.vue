<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue'
import CardsList from './components/CardsList.vue';
import { store } from './store';

export default {
  components: {
    AppHeader,
    CardsList
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCardsInfo() {
      axios
        .get(store.apiUrl)
        .then((response) => {
          store.cardsList = response.data.data;
          store.loading = false
        })
        .catch((error) => {
          console.log('Errore Chiamata Api', error);
        })
    }
  },
  created() {
    this.getCardsInfo();
  }
}
</script>

<template>
  <AppHeader />
  <CardsList />
</template>

<style lang="scss">
@use '../src/styles/general.scss' as *
</style>
