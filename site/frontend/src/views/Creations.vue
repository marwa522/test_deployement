<template>
  <header>
    <Entete/>
  </header>
  <main>
    <div class="model1">
      <h1>Ici se trouvera le texte descriptif de la collection</h1>
      <p class="desc-model1">
      Qu'est-ce que le Lorem Ipsum?
      Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.
      </p>
      <h2>Model1</h2>
      <div class="img-model1">
        <div class="photo">
          <img src="model1.jpeg" alt="image1" />
        </div>
        <div class="photo">
          <img src="model2.jpeg" alt="image2">
        </div>
        <div class="photo">
          <img src="model3.jpeg" alt="image3">
        </div>
        <div class="photo">
          <img src="model4.jpeg" alt="image4">
        </div>
      </div>
    </div>

  </main>
  <footer >
    <BasDePage/>
  </footer>
</template>

<script>
import Entete from "@/components/Entete.vue";
import BasDePage from "@/components/BasDePage.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Creations",
  components:{
    Entete,
    BasDePage
  }
}
</script>

<style scoped>
.model1{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  text-align: center;
}
.desc-model1{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.img-model1 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap : 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 50%;


}

.img-model1 img{
  text-align: center;
  height: auto;
  width: 100%;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s;
}
.img-model1 img:hover{
  transform: scale(0.9);
}
</style>