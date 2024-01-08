<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue';
import { store } from './store';

export default {
  components: {
    AppHeader,
    AppMain
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
          store.cardsList = response.data.data
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
  <AppMain />
</template>

<style lang="scss">
@use '../src/styles/general.scss' as *
</style>
