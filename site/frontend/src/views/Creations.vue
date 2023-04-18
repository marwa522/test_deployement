<template>
  <header>
    <Entete :variable-exportee="selectedCol"/>
  </header>
  <main class="background-image">
    <h1>Titre collection</h1>
    <p>Ici se trouvera le texte descriptif de la collection</p> <br><br>


    <div class="model1">
      <h2>Model1</h2>
      <p class="desc-model1">
        Qu'est-ce que le Lorem Ipsum?
        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.
      </p><br>
      <div class="img-model1">
        <div class="photo" v-for="image in images1"  :key="image.id" >
          <button @click="overlay = !overlay; overlayImg=image.url" >
            <img :src=image.url alt="image1"/>
          </button>
          <v-overlay v-if="overlay" v-model="overlay"  class="overlay">
            <button @click="overlay = !overlay">
              <img :src=overlayImg alt="image1" class="overlay-img"/>
            </button>
          </v-overlay>
        </div>

      </div>

    </div>
    <br><hr><br>
    <div class="model2">
      <h2>Model2</h2>
      <p class="desc-model2">
        Qu'est-ce que le Lorem Ipsum?
        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.
      </p><br>
      <div class="img-model2">
        <div class="photo" v-for="image in images2"  :key="image.id" >
          <button @click="overlay = !overlay; overlayImg=image.url" >
            <img :src=image.url alt="image1"/>
          </button>
          <v-overlay v-if="overlay" v-model="overlay" class="overlay">
            <button @click="overlay = !overlay">
              <img :src=overlayImg alt="image1" class="overlay-img"/>
            </button>
          </v-overlay>
        </div>

      </div>

    </div>
    <br><hr><br>

  </main>
  <footer >
    <BasDePage/>
  </footer>
</template>

<script>
import Entete from "@/components/Entete.vue";
import BasDePage from "@/components/BasDePage.vue";
import axios from 'axios';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  data() {
    return {
      selectedCol : null,
      images1: [
        { id: 1, url: 'model1.jpeg' },
        { id: 2, url: 'model2.jpeg' },
        { id: 3, url: 'model3.jpeg' },
        { id: 4, url: 'model4.jpeg' }
      ],
      model1: 1,
      overlay: false,
      overlayImg:"",
      images2: [
        { id: 1, url: 'model4.jpeg' },
        { id: 2, url: 'model3.jpeg' },
        { id: 3, url: 'model2.jpeg' },
        { id: 4, url: 'model1.jpeg' }
      ],
      model2: 2,
    }
  },

  // eslint-disable-next-line vue/multi-word-component-names
  name: "Creations",
  components:{
    Entete,
    BasDePage,
  },
  watch: {
    overlay (val) {
      val && setTimeout(() => {
        this.overlay = false
      }, 200000)
    },
  },
}
</script>

<style scoped>
/*.background-image{
  background-image: url('model2.jpeg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}*/
.model1, .model2{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.desc-model1, .desc-model2{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

h1,h2, p {
  align-content: center;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: 20%;
  margin-right: 20%;
}

.img-model1,.img-model2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 50%;


}

.img-model1 img, .img-model2 img {
  text-align: center;
  height: auto;
  width: 100%;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s;
}

.img-model1 img:hover, .img-model2 img:hover {
  transform: scale(0.9);
}
.photo{
  height: auto;
  justify-content: center;
  align-content: center;
}
.overlay-img{
  height: auto;
  width: 35%;
  justify-content: center;
  align-content: center;

}
.overlay{
  text-align: center;
  height: auto;
  width: 100%;
  justify-content: center;
  align-items: center;
}
</style>