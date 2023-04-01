<template>
  <header class="entete">
    <div>
      <img id="logo1" class="image" src="public/logo1.png" alt="logo">
      <nav class="navbar">
        <ul class="nav-list">
          <li>Accueil</li>
          <li>Nos créations</li>
          <li>Nos services</li>
          <li>La marque</li>
          <li>Nous contacter</li>
          <li>FAQ</li>
        </ul>
      </nav>
    </div>
  </header>
  <main>
    <img id="model3" src="public/model3.jpeg"  alt="photo page d'accueil"  class="pr-img">
    <div class="pr-text">
      <div data-aos="flip-right" class="pr-text1">KABORI CREATIONS <br>
          Robes d'événements sur-mesure <br>
          BRUXELLES <br>
      </div>
      <div data-aos="flip-left" class="pr-text2" >
          KABORI CREATIONS a pour ambition de vous accompagner lors d'événements importants: mariages, soirées, gala, cocktails, baptêmes, anniversaires, tapis rouge etc.
          Je souhaite vous faire vivre un moment inoubliable en vous proposant des créations authentiques ou en créant avec vous et pour vous des pièces uniques et sur-mesure.
          Du croquis à la réalisation finale en passant par le patron, je collabore étroitement avec des artisans belges pour vous proposer des pièces raffinées et travaillées.
      </div>
    </div>
  </main>
  <footer class="bas-de-pagegit">
    <nav class="navbar">
      <ul class="nav-list">
        <li>Accueil</li>
        <li>Nos créations</li>
        <li>Nos services</li>
        <li>La marque</li>
        <li>Nous contacter</li>
        <li>FAQ</li>
      </ul>
    </nav>
  </footer>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Accueil',
  mounted() {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-out',
      delay: 100,
    });
  },

}

</script>


<style>
.entete{
  background-color: black;
  color: white;
}
.bas-de-page{
  background-color: black;
  color: white;
}
#logo1{
  display: block;
  margin: auto;
  width : 100px;
  height: 100px;
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

.nav-list li {
  margin: 0 50px;
}
#model3 {
  width: 100%;
}
.presentation{
  display: flex;
  justify-content: center;
}

.pr-img {
  position: relative; /* permet de positionner le texte-container par rapport à l'image */
  width: 100%;
  height: auto; /* la hauteur s'adaptera à la taille de l'image */
}

.pr-text1 {
  position: absolute; /* positionnement absolu par rapport au conteneur parent (image-container) */
  top: 50%; /* positionne le haut du conteneur à la moitié de l'image */
  left: 25%; /* positionne la gauche du conteneur à la moitié de l'image */
  background-color: rgba(255, 255, 255, 0.1); /* ajoute un fond semi-transparent pour le texte */
  padding: 10px; /* ajoute un peu d'espace autour du texte */
  color : white;
  text-align: center;
  height:175px;
  font-size: xx-large ;
  margin-top: 50px;
  border: 1px solid black;
  width: 80%;
  max-width: 800px;
}
.pr-text2{
  position: absolute; /* positionnement absolu par rapport au conteneur parent (image-container) */
  top: 150%; /* positionne le haut du conteneur à la moitié de l'image */
  right: 25%; /* positionne la gauche du conteneur à la moitié de l'image */
  background-color: rgba(255, 255, 255, 0.1); /* ajoute un fond semi-transparent pour le texte */
  padding: 10px; /* ajoute un peu d'espace autour du texte */
  color : white;
  text-align: center;
  height:500px;
  font-size: xx-large ;
  margin-top: 50px;
  border: 1px solid black;
  width: 100%;
  max-width: 800px;
}
.pr-text {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
