<template>
  <div>
    <div class="entete">
      <img id="logo1" class="image" src="logo1.png" alt="logo">
      <nav class="navbar">
        <ul class="nav-list">
          <li ><router-link to="/" class="no-underline">Accueil</router-link></li>
          <li ><router-link to="/creations" class="no-underline">Nos créations</router-link></li>
          <li ><router-link to="/services" class="no-underline">Nos services</router-link></li>
          <li ><router-link to="/marque" class="no-underline">La marque</router-link></li>
          <li ><router-link to="/contact" class="no-underline">Nous contacter</router-link></li>
          <li><router-link to="/faq" class="no-underline">FAQ</router-link></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return{
      collections : [],
      nomCol: [],
      selectedCol : null,
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
    }
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Entete",
}
</script>

<style scoped>
.entete{
  background-color: black;
  color: white;
}

#logo1{
  display: block;
  margin: auto;
  width : 100px;
  height: 100px;
}
.nav-list li {
  margin: 0 50px;
}
.navbar {
  display: flex;
  justify-content: center;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  box-sizing: content-box;
  font-size: larger;
}
.no-underline {
  text-decoration: none;
  color: white;
}
</style>