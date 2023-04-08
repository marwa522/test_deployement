<template>
    <v-carousel v-model="model" show-arrows="hover"  hide-delimiters>
      <v-carousel-item v-for="image in images1" :value="image.id"  :key="image.id">
        <v-img :src="image.url" />
      </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
  data () {
    return {
      images1: [
        { id: 1, url: 'model1.jpeg' },
        { id: 2, url: 'model2.jpeg' },
        { id: 3, url: 'model3.jpeg' },
        { id: 4, url: 'model4.jpeg' }
      ],
      model: 0,
    }
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Carouselimg',
}
</script>

<style>

</style>