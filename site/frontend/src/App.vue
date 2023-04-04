<template>
  <body >
  <router-view/>
  </body>

</template>

<script>
import Accueil from './views/Accueil.vue';
import Creations from './views/Creations.vue';
import test from './views/test.vue';

export default {
  components: {
    Accueil,
    Creations,
    test
  }
}
</script>