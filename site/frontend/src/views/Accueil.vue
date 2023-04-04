<template>
  <header>
    <Entete/>
  </header>
  <main>
    <img id="model3" src="model3.jpeg"  alt="photo page d'accueil"  class="pr-img">
    <div class="pr-text">
      <div data-aos="flip-left" class="pr-text1">KABORI CREATIONS <br>
          Robes d'événements sur-mesure <br>
          BRUXELLES <br>
      </div>
      <div data-aos="flip-left" class="pr-text2" >
          KABORI CREATIONS a pour ambition de vous accompagner lors d'événements importants:<br>
          mariages, soirées, gala, cocktails, baptêmes, anniversaires, tapis rouge etc.
          Je souhaite vous faire<br>
          vivre un moment inoubliable en vous proposant des créations authentiques ou en créant avec vous<br>
          et pour vous des pièces uniques et sur-mesure. Du croquis à la réalisation finale en passant par le<br>
          patron, je collabore étroitement avec des artisans belges pour vous proposer des pièces raffinées et<br> travaillées.
      </div>
    </div>
    <div class="kaborimage">
      <div id="kabodium">
        <h1 id="titre-event">Kabori sur un podium</h1>
        <ul class="event-imgs">
          <li>
            <img src="chevronGauche.jpg" alt="flèche vers la gauche" width="75px" height="75px">
          </li>
          <li>
            <img src="model1.jpeg" alt="model1" class="event-img">
          </li>
          <li>
            <img src="model2.jpeg" alt="model2" class="event-img">
          </li>
          <li>
            <img src="model3.jpeg" alt="model3" class="event-img">
          </li>
          <li>
            <img src="model4.jpeg" alt="model4" class="event-img">
          </li>
          <li>
            <img src="model5.jpeg" alt="model5" class="event-img">
          </li>
          <li>
            <img src="chevronDroite.png" alt="flèche à droite" width="75px" height="75px">
          </li>
        </ul>
      </div>
      <div id="kaborcreation">
        <h1 id="titre-event">Nos créations</h1>
        <ul class="model-imgs">
          <li>
            <img src="chevronGauche.jpg" alt="flèche vers la gauche" width="75px" height="75px">
          </li>
          <li>
            <img src="model1.jpeg" alt="model1" class="model-img">
          </li>
          <li>
            <img src="model2.jpeg" alt="model2" class="model-img">
          </li>
          <li>
            <img src="model3.jpeg" alt="model3" class="model-img">
          </li>
          <li>
            <img src="model4.jpeg" alt="model4" class="model-img">
          </li>
          <li>
            <img src="model5.jpeg" alt="model5" class="model-img">
          </li>
          <li>
            <img src="chevronDroite.png" alt="flèche à droite" width="75px" height="75px">
          </li>
        </ul>

      </div>
    </div>
  </main>
  <footer >
    <BasDePage/>
  </footer>
</template>

<script>
import AOS from 'aos';
import { mapGetters } from 'vuex';
import 'aos/dist/aos.css';
import BasDePage from "@/components/BasDePage.vue";
import Entete from "@/components/Entete.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Accueil',
  components: {
    Entete,
    BasDePage,
  },
  mounted() {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-out',
      delay: 100,
    });
  },
  computed: {
    ...mapGetters(['corps'])
  }

}

</script>


<style>

#model3 {
  width: 100%;
}

.pr-img {
  position: relative; /* permet de positionner le texte-container par rapport à l'image */
  width: 100%;
  height: auto; /* la hauteur s'adaptera à la taille de l'image */
}

.pr-text1 {
  position: absolute; /* positionnement absolu par rapport au conteneur parent */
  top: 75%; /* positionne le haut du conteneur à la moitié de l'image */
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
  position: absolute; /* positionnement absolu par rapport au conteneur parent */
  top: 150%; /* positionne le haut du conteneur à la moitié de l'image */
  right: 0.75%; /* positionne la gauche du conteneur à la moitié de l'image */
  background-color: rgba(255, 255, 255, 0.1); /* ajoute un fond semi-transparent pour le texte */
  padding: 5px; /* ajoute un peu d'espace autour du texte */
  color : white;
  text-align: center;
  height:350px;
  font-size: xx-large ;
  margin-top: 50px;
  border: 1px solid black;
  width: 100%;
  max-width: 1500px;
}
.pr-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Cambria Math";
}
.event-imgs, .model-imgs{
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
}
.event-img, .model-img {
  height: 400px;
  width: 257px;
  display: flex;
  list-style: none;
  margin: 5px;
  padding: 0;
  box-sizing: content-box;
  font-size: larger;
}
#titre-event{
  text-align: center;
  font-family: "Cambria Math";
  color: black;
}

</style>
