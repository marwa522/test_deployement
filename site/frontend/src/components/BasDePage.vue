<template>
  <div class="bas-de-page">
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
  <div>
    <ul class="infos-comp">
      <li class="info-comp">
        <router-link to="/confidentialite" class="no-underline">
        POLITIQUE DE CONFIDENTIALITÉ
        </router-link>
      </li>
      <li class="info-comp">
        <router-link to="/politiquecommande" class="no-underline">
        COMMANDES, LIVRAISONS ET RETOURS
        </router-link>
      </li>
      <li class="info-comp">
        <router-link to="/cookies" class="no-underline">
        POLITIQUE EN MATIÈRE DE COOKIES
        </router-link>
      </li>
    </ul>
  </div>

</template>

<script>

export default {
  name: "BasDePage",

}
</script>

<style scoped>
.navbar, .infos-comp {
  display: flex;
  justify-content: center;
}

.nav-list, .infos-comp{
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  box-sizing: content-box;
  font-size: larger;
}
.bas-de-page, .infos-comp{
  background-color: black;
  color: white;
}
.nav-list li, .info-comp {
  margin: 0 50px;
}

.no-underline {
  text-decoration: none;
  color: white;
}
</style>