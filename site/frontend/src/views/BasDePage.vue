<template>
  <div class="bas-de-page">
    <nav class="navbar">
      <ul class="nav-list">
        <li @click="corps = 'Accueil'">Accueil</li>
        <li @click="corps = 'Creations'">Nos créations</li>
        <li @click="corps = 'Services'">Nos services</li>
        <li @click="corps = 'Marque'">La marque</li>
        <li @click="corps = 'Contact'">Nous contacter</li>
        <li @click="corps = 'FAQ'">FAQ</li>
      </ul>
    </nav>
  </div>
  <div>
    <ul class="infos-comp">
      <li class="info-comp">
        POLITIQUE DE CONFIDENTIALITÉ
      </li>
      <li class="info-comp">
        COMMANDES, LIVRAISONS ET RETOURS
      </li>
      <li class="info-comp">
        POLITIQUE EN MATIÈRE DE COOKIES
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BasDePage"
}
</script>

<style scoped>
.navbar, .infos-comp {
  display: flex;
  justify-content: center;
}

.nav-list, .infos-comp {
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
</style>