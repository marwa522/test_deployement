<template>
  <header>
      <Entete/>
  </header>
  <main class="backgroundImage">
    <div class="collection" v-for="collection in collections"   :key="collection.id" >
      <h1><button @click="thisCollection = collection.nom, recupModels();" @dblclick="thisCollection = ''" >{{ collection.nom }}</button></h1>
      <p>{{ collection.description }}</p> <br><br>


      <div class="model" v-for="model in models" v-bind:key="model.id"  v-if="thisCollection === collection.nom" >
        <h2 ><button @click="thisModel = model, recuPhoto();" @dblclick="thisModel= ''">{{model.nom}}</button></h2>
        <p class="descModel">
          {{model.description}}
        </p><br>
        <div class="imgModel">
          <div class="photo" v-for="photo in photos"  :key="photo.id"  v-if="thisModel.nom === model.nom">
            <button @click="overlay = !overlay; overlayImg=photo" >
              <img :src=photo alt="image1"/>qz
            </button>

            <v-overlay v-if="overlay" v-model="overlay"  class="overlay">
              <button @click="overlay = !overlay">
                <img :src=overlayImg alt="image1" class="overlayImg"/>
              </button>
            </v-overlay>

          </div>
        </div>
        <p class="prix">{{model.prix}}€</p>
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

      axios.get('http://localhost:3000/prod/' ,{
        params:{
          col: this.thisCollection
        }})
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
/*.backgroundImage{
  background-image: url('model2.jpeg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}*/
.model{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.descModel{
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

.imgModel{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 50%;


}

.imgModel img{
  text-align: center;
  height: auto;
  width: 100%;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s;
}

.imgModel img:hover{
  transform: scale(0.9);
}
.photo{
  height: auto;
  justify-content: center;
  align-content: center;
}
.overlayImg{
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
.prix{
  align-content: center;
  justify-content: center;
  text-align: center;
}
</style>