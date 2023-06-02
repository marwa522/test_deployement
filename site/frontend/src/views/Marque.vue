<template>
  <header>
    <Entete/>
  </header>
  <main>
    <v-parallax src="model2.jpeg" class="contain">
      <v-timeline align="center">
        <v-timeline-item hide-dot v-for="element in elements" :key="element.titre">
          <template v-slot:opposite>
            <v-img src="logo1.png" max-width="200" width="200"></v-img>
          </template>
          <v-card max-width="500">
            <v-card-title class="card-title">
              <h2 class="font-weight-light">
                {{element.titre}}
              </h2>
            </v-card-title>
            <v-card-text>
              {{element.description}}
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-parallax>

  </main>
  <footer>
    <BasDePage/>
  </footer>
</template>

<script>
import Entete from "@/components/Entete.vue";
import BasDePage from "@/components/BasDePage.vue";
export default {
  data () {
    return {
      elements :[
        {"titre":"Qui sommes nous ?", "description" : "Kabori Creations est votre partenaire pour les grands événements. Des bals aux mariages en passant par les soirées de cocktails, les galas ou les événements tapis rouge nous travaillons quotidiennement à vous faire vivre un moment magique. Nous sommes une équipe enthousiaste, prête à vous écouter, vous conseiller et vous proposer des créations authentiques.\n" +
              "\n" +
              "Officiellement créé en 2022, notre marque inspiration plurielle vous propose des robes d’événements uniques et personnalisées. Notre ambition est de vous garantir des tenues de grande qualité, avec une dose d’élégance et une touche de créativité."},
        {"titre":"Pourquoi existons nous ?", "description" : "Notre raison d’être est une évidence et une vraie mission de vie: renforcer l’unicité de chaque femme à travers des pièces fortes et distinguées.\n" +
              "\n" +
              "Chaque jour, nous travaillons à concevoir des modèles originaux et uniques qui correspondent à des personnes toutes autant uniques. Le pari est de vous donner un sentiment de confiance en soi, de confort et d’unicité tout en étant élégante et glamour."},
        {"titre":"Que faisons nous", "description" : "Pour réaliser cette ambition, nous prenons le temps de créer avec vous, une atmosphère de confiance et de proximité afin de connaître précisément vos besoins et envies.\n" +
              "Nous les analysons et nous vous proposons des croquis personnalisés qui sont à la croisée de l’événement à célébrer, de votre style vestimentaire et de notre touche de créativité.\n" +
              "\n" +
              "Certains modèles vous sont déjà proposés. Il ne reste plus qu’à les réaliser à la juste taille pour vous. Évidemment, ils sont personnalisables.\n" +
              "\n" +
              "Cependant, nous réalisons un maximum de 24 exemplaires par modèles, afin de conserver le caractère unique et authentique de la création."},
        {"titre":"Rejoignez la Bori Ladies Team", "description" : "On entend souvent dire qu’il faut assumer son corps, qu’il faut assumer son apparence physique. Ici, nous pensons que nous n’avons pas à l’assumer, mais à l’affirmer. On assume des fautes, des erreurs, des écarts de conduite. On n’assume pas qui on est physiquement, on l’affirme.\n" +
              "\n" +
              "Vous êtes magnifiques et incroyablement belles. Comme vous êtes. N’en doutez jamais. Rejoignez la ‘’Bori-Ladies Team’’ et affirmons votre beauté et votre élégance à travers des pièces qui vous ressemblent. Rejoignez une tribu de femmes fortes, confiantes et élégantes."}
      ]
    }
  },

  // eslint-disable-next-line vue/multi-word-component-names
  name: "Marque",
  components:{
    Entete,
    BasDePage,
  }
}
</script>

<style scoped>
.card-title{
  background-color: #212121;
  color: white;
}
</style>