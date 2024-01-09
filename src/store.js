import { reactive } from 'vue'

export const store = reactive({
  // Array e Url Api relativo alla lista delle Card
  cardsList: [],
  apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',

  // Array e Url Api relativo al filtro degli archetipi delle Card
  archetypes: [],
  archetipeUrl: 'https://db.ygoprodeck.com/api/v7/archetypes.php',

  loading: true,
})