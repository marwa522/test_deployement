<template>
  <header><Entete/></header>

  <main >
    <v-container v-for="collection in collections" >
      <v-row dense>
        <v-col cols="12">
          <v-card
              color=""
              theme="dark"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5">
                  {{collection.nom}}
                </v-card-title>

                <v-card-subtitle>{{ collection.description }}</v-card-subtitle>

                <v-card-actions>
                  <v-btn
                      class="ms-2"
                      variant="outlined"
                      size="small"
                      @click="thisCollection = collection.nom, recupModels(collection.nom);"
                      @dblclick="thisCollection = ''">
                    Voir les modèles de cette collection
                  </v-btn>
                </v-card-actions>

              </div>
              <div>
                <v-avatar class="ma-3" size="200" rounded="0"><v-img  src="model1.jpeg"></v-img></v-avatar>
                <v-avatar class="ma-3" size="200" rounded="0"><v-img  src="model2.jpeg"></v-img></v-avatar>
              </div>

            </div>
            <div v-if="thisCollection === collection.nom">
              <div class="model" v-for="model in models" v-bind:key="model.id" >
                <h2 >{{model.nom}} {{this.recuPhoto(model)}}</h2>
                <p class="descModel">
                  {{model.description}}
                </p><br>
                <div class="imgModel">
                  <div class="photo" v-for="photo in photos.slice(2,6)"  :key="photo.id" >
                    <button @click="overlay = !overlay; overlayImg=photo" >
                      <img :src=photo alt="image1"/>
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
            </div>
          </v-card>

        </v-col>

      </v-row>

    </v-container>
  </main>

  <footer><BasDePage/></footer>
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
    recupModels(collection) {

      axios.get('http://localhost:3000/prod/' ,{
        params:{
          col: collection
        }})
          .then(response => {
            this.models = response.data;
          })
          .catch(error => {
            console.error('Erreur lors de la récupération de la liste des modèles:', error);
          })
    },
    recuPhoto(photo){
      this.photos = Object.values(photo);
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
main {
  min-height: 800px;
}
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