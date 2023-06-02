<template>
  <header>
    <Entete/>
  </header>
<p> Ceci est la page des questions fréquemment posées </p>
  <footer>
    <BasDePage/>
  </footer>
</template>

<script>
import Entete from "@/components/Entete.vue";
import BasDePage from "@/components/BasDePage.vue";

export default {
  name: "FAQ",
  components:{
    Entete,
    BasDePage,
  }
}
</script>

<style scoped>

</style>