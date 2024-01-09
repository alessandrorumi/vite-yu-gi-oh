<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue'
import CardsList from './components/CardsList.vue';
import AppSearch from './components/AppSearch.vue';
import MessageResults from './components/MessageResults.vue';
import { store } from './store';

export default {
  components: {
    AppHeader,
    CardsList,
    AppSearch,
    MessageResults
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    // Ottieni info carte
    getCardsInfo() {
      let filteredUrl = store.apiUrl;
      if (store.searchArchetype) {
        filteredUrl += `&archetype=${store.searchArchetype}`
      }
      axios
        .get(filteredUrl)
        .then((response) => {
          store.cardsList = response.data.data;
          store.loading = false
        })
        .catch((error) => {
          console.log('Errore Chiamata Api', error);
        })
    },
    // Ottieni archetipi
    getArchetypeCard() {
      axios
        .get(store.archetipeUrl)
        .then((response) => {
          store.archetypes = response.data;
        })
        .catch((error) => {
          console.log('Errore Chiamata Api', error);
        })
    },
  },
  created() {
    this.getCardsInfo();
    this.getArchetypeCard();
  }
}
</script>

<template>
  <AppHeader />
  <main>
    <AppSearch @filter="getCardsInfo" />
    <MessageResults />
    <CardsList />
  </main>
</template>

<style lang="scss">
@use '../src/styles/general.scss' as *;
@use '../src/styles/partials/mixins' as *;
@use '../src/styles/partials/variables.scss' as *;

main {
  background-color: $mr-brown;
  padding: 0 10rem;
}
</style>
