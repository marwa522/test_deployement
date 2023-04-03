<template>
  <header>
    <Entete/>
  </header>
  <main v-if="corps === 'Accueil'">
    <Accueil/>
  </main>
  <main v-if="corps === 'Creations'">
    <Creations/>
  </main>
  <main v-if="corps === 'Services'">
    <Services/>
  </main>
  <main v-if="corps === 'Marque'">
    <Marque/>
  </main>
  <main v-if="corps === 'Contact'">
    <Contact/>
  </main>
  <main v-if="corps === 'FAQ'">
    <FAQ/>
  </main>
  <footer>
    <BasDePage/>
  </footer>
</template>

<script>
import Accueil from './views/Accueil.vue'
import BasDePage from "@/views/BasDePage.vue";
import Entete from "@/views/Entete.vue";

export default {
  components: {
    Entete,
    BasDePage,
    Accueil
  },
  data: function () {
    return {
      corps: "Accueil"
    };
  }
}
</script>