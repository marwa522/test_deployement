<template>
  <body >
  <router-view/cd f>
  <!--test/-->
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