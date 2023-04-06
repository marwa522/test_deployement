<template>
  <header>
    <Entete/>
  </header>
<p> Ceci est la page de la marque</p>
  <footer>
    <BasDePage/>
  </footer>
</template>

<script>
import Entete from "@/components/Entete.vue";
import BasDePage from "@/components/BasDePage.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Marque",
  components:{
    Entete,
    BasDePage,
  }
}
</script>

<style scoped>

</style>