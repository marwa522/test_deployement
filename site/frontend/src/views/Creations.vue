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
      <div class="model1-imgs">
        <div v-for="image in images1" :key="image.id" >
          <img :src="image.url" alt="image">
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
import CarouselModel1 from "@/components/CarouselModel1.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  data() {
    return {
      images1: [
        { id: 1, url: 'model1.jpeg' },
        { id: 2, url: 'model2.jpeg' },
        { id: 3, url: 'model3.jpeg' },
        { id: 4, url: 'model4.jpeg' }
      ],
      showCarousel: false,
      images2: [
        { id: 1, url: 'model4.jpeg' },
        { id: 2, url: 'model3.jpeg' },
        { id: 3, url: 'model2.jpeg' },
        { id: 4, url: 'model1.jpeg' }
      ]
    }
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Creations",
  components:{
    Entete,
    BasDePage,
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

.model1-imgs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 50%;
}

.model1-imgs img{
  text-align: center;
  height: auto;
  width: 100%;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s;
}
.model1-imgs img:hover{
  transform: scale(0.9);
  cursor: pointer;
}
</style>