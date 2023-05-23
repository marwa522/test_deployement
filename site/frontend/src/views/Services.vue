<template>
  <header>
    <Entete/>
  </header>
  <main >
    <br>
    <v-container fluid fill-height>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="8.5">
          <v-card class="mx-auto">
            <v-tabs v-model="tab" align-tabs="center">
              <v-tab :value="service.titre" v-for="service in services" :key="service.titre">{{ service.titre }}</v-tab>
            </v-tabs>

            <v-card-text>
              <v-window v-model="tab">
                <v-window-item :value="service.titre" v-for="service in services" :key="service.titre">
                  <div class="fenetre">
                    <p >{{ service.description }}</p>
                    <img :src="service.image"  >
                  </div>
                </v-window-item>
              </v-window>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
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
      tab: null,
      services :[
        {"titre":"Robes de collection", "description" : "Vous craquez pour une création disponible ?\n" +
              "Vous n’avez qu’à la commander en nous communiquant vos mensurations.\n" +
              "Nous vous enverrons le formulaire correspondant au modèle choisi.\n" +
              "Vous pouvez évidemment personnaliser le modèle choisi à votre convenance.\n" +
              "\n" +
              "Le processus se présente ainsi:\n" +
              "\n" +
              "Choix d’un modèle de collection\n" +
              "Prise de contact\n" +
              "Echanges (pour personnalisation éventuelle)\n" +
              "Commande\n" +
              "Conception\n" +
              "Livraison.\n" +
              "\n" +
              "Vous obtenez votre tenue entre 14 jours et 1 mois en fonction de notre agenda du moment.",
        "image":"model3.jpeg"},
        {"titre":"Créations exclusives", "description" : "Vous souhaitez avoir une création exclusive et unique?\n" +
              "Nous la créerons ensemble.\n" +
              "Je dessinerai et réaliserai pour vous, une création unique selon vos goûts et votre style.\n" +
              "\n" +
              "En résumé, le processus se présente ainsi:\n" +
              "\n" +
              "Prise de contact\n" +
              "Échanges\n" +
              "Proposition de croquis\n" +
              "Validation de la proposition\n" +
              "Conception\n" +
              "Livraison.\n" +
              "\n" +
              "Vous recevrez votre commande entre 14 jours à 02 mois à partir du moment où le modèle est validé, en fonction du modèle commandé, de la disponibilité des matériaux, de l’agenda du moment, etc.",
          "image":"model2.jpeg"},
        {"titre":"Croquis personnalisés", "description" : "Vous souhaitez réaliser vous-même votre robe,\n" +
              "mais pas d'idées originales pour la créer?\n" +
              "Nous créons avec vous et pour vous, un modèle originale pour vous.",
          "image":"model4.jpeg"},
        {"titre":"Transformations de robes", "description" : "Cette robe de soirée au fond de votre dressing, vous l'adorez n'est-ce pas?\n" +
              "Mais le modèle est désuet, ou vous avez l’impression de l’avoir tellement mise au point de vouloir lui donner un coup de jeune ?\n" +
              "Un renouveau?\n" +
              "Nous modifions votre robe pour que vous aillez l’impression d’en avoir une nouvelle.\n" +
              "\n" +
              "Processus:\n" +
              "\n" +
              "Prise de contact\n" +
              "Échanges sur la robe à transformer\n" +
              "Proposition de croquis\n" +
              "Validation de la proposition\n" +
              "Expédition\n" +
              "Transformation\n" +
              "Réexpédition",
          "image":"model5.jpeg"}
      ]
       }
  },

  // eslint-disable-next-line vue/multi-word-component-names
  name: "Services",
  components:{
    Entete,
    BasDePage,
  }
}
</script>

<style scoped>
main{
  min-height: 800px;
  background-color: #212121;
}
.fenetre{
  display: flex;
}
.fenetre p {
  display: block;
  float: left;
  text-align: justify-all;
  font-size: x-large
}
.fenetre img {
  display: block;
  float: right;
  max-width: 300px;
}

</style>