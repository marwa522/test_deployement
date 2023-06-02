<template>
  <header>
    <Entete/>
  </header>
  <main>
    <p> Ceci est la page de la politique de commande</p>
  </main>
  <footer>
    <BasDePage/>
  </footer>
</template>

<script>
import Entete from "@/components/Entete.vue";
import BasDePage from "@/components/BasDePage.vue";

export default {
  name: "PolitiqueCommande",
  components: {BasDePage, Entete}
}
</script>

<style scoped>

</style>