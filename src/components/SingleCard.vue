<script>
export default {
  name: 'SingleCard',
  props: {
    info: Object
  }
}
</script>

<template>
  <div class="image">
    <img :src="info.card_images[0].image_url" :alt="info.name">
  </div>
  <div class="text p-2">
    <h5>{{ info.name }}</h5>
    <h6>{{ info.archetype }}</h6>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables.scss' as *;

h6 {
  color: lightgrey;
}
</style>
