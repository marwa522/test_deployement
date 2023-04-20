<template>
  <header>
    <Entete/>
  </header>
  <main class="background-image">
    <div class="collection" v-for="collection in collections" :value="collection.id"  :key="collection.id" >
      <h1><button @click="thisCollection = collection.nom, recupModels();" @dblclick="thisCollection = ''" >{{ collection.nom }}</button></h1>
      <p>{{ collection.description }}</p> <br><br>


      <div class="model1" v-for="model in models" :value="model.id" v-bind:key="model.id"  v-if="thisCollection === collection.nom" >
        <h2 ><button @click="thisModel = model, recuPhoto();" @dblclick="thisModel= ''">{{model.nom}}</button></h2>
        <p class="desc-model1">
          {{model.description}}
        </p><br>
        <div class="img-model1">
          <div class="photo" v-for="photo in photos"  :key="photo.id"  v-if="thisModel.nom === model.nom">
            <button @click="overlay = !overlay; overlayImg=photo" >
              <img :src=photo alt="image1"/>
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
    </div>


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
      collections : [],
      thisCollection : '',
      models : [],
      thisModel:"",
      photos : [],
      images1: [
        { id: 1, url: 'model1.jpeg' },
        { id: 2, url: 'model2.jpeg' },
        { id: 3, url: 'model3.jpeg' },
        { id: 4, url: 'model4.jpeg' }
      ],
      model1: 1,
      overlay: false,
      overlayImg:"",
    }
  },

  mounted() {
    this.recupCollections();
  },
  methods: {
    recupCollections() {
      axios.get('http://localhost:3000/collections')
          .then(response => {
            this.collections = response.data;
          })
          .catch(error => {
            console.error('Erreur lors de la récupération de la liste des collections :', error);
          })
    },
    recupModels() {

      axios.get('http://localhost:3000/prod/' + this.thisCollection )
          .then(response => {
            this.models = response.data;
          })
          .catch(error => {
            console.error('Erreur lors de la récupération de la liste des modèles:', error);
          })
    },
    recuPhoto(){
      this.photos = [];
      this.photos.push(this.thisModel.photo1);
      this.photos.push(this.thisModel.photo2);
      this.photos.push(this.thisModel.photo3);
      this.photos.push(this.thisModel.photo4);
    }
  },

  // e

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