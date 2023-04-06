<template>
  <header>
    <Entete/>
  </header>
  <main>
    <p> Ceci est la page des services</p>
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
  name: "Services",
  components:{
    Entete,
    BasDePage,
  }
}
</script>

<style scoped>

</style>