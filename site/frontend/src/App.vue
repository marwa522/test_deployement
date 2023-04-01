<template>
  <header>
    <Header/>
  </header>
  <main>
    <Accueil />
  </main>
  <footer>
    <Footer/>
  </footer>
</template>

<script>
import Accueil from './views/Accueil.vue'
import Footer from "@/views/BasDePage.vue";
import Header from "@/views/Entete.vue";

export default {
  components: {
    Header,
    Footer,
    Accueil
  }
}
</script>