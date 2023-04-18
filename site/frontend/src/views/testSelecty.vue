<template>
  <div class="text-center">
    <v-menu
        open-on-hover
    >
      <template v-slot:activator="{ props }">
        <v-btn
            v-bind="props"
        >
          Nos Créations
        </v-btn>
      </template>

      <v-list>
        <v-list-item
            v-for="(item, index) in collections"
            :key="index"
        >
          <v-list-item-title>{{ item.nom }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>

import axios from 'axios';
export default {
  data() {
    return {
      collections: [],
      nomCol: [],
      selectedCol: null,
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
      for (let e of this.collections) {
        this.nomCol.push(e.nom)

      }
    }
  }
}
</script>