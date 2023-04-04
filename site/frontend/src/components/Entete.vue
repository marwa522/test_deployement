<template>
  <div>
    <div class="entete">
      <img id="logo1" class="image" src="logo1.png" alt="logo">
      <nav class="navbar">
        <ul class="nav-list">
          <li ><router-link to="/">Accueil</router-link></li>
          <li ><router-link to="/creations">Nos créations</router-link></li>
          <li >Nos services</li>
          <li >La marque</li>
          <li >Nous contacter</li>
          <li>FAQ</li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
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
</style>