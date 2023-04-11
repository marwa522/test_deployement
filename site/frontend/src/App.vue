<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
  <!--test-selecty/-->
</template>

<script>
import Carouselimg from "@/components/Carouselimg.vue";
import testOverlay from "@/views/testSelecty.vue";
import TestSelecty from "@/views/testSelecty.vue";
export default {
  name: 'App',
  components : {
    TestSelecty,
    Carouselimg,
    testOverlay
  }
}
</script>
