<template>
  <header>
    <Entete/>
  </header>
  <main>
    <p>Ceci est la page de la politique des cookies</p>
  </main>
  <footer>
    <BasDePage/>
  </footer>
</template>

<script>
import Entete from "@/components/Entete.vue";
import BasDePage from "@/components/BasDePage.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Cookies",
  components: {BasDePage, Entete}
}
</script>

<style scoped>

</style>