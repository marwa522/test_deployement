<template>
  <header>
    <Entete/>
  </header>

  <main>
    <div class="form-div">
      <h1>Nouveau Model</h1>
      <form @submit.prevent="submitForm" class="form-container">
        <p>
          Choisissez une collection
        <select v-model="selectedOption" class="custom-select">
          <option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option>
        </select>
          <br>
          OU
          <br>
        <button @click="addOption" class="option-button">Ajoutez</button>
        </p>
        <!-- <p>Vous avez choisi l'option : {{ selectedOptionLabel }}</p> -->
        <br>
        <label for="model">Nom model :</label>
        <input type="text" id="model" v-model="model" class="form-input">
        <br>
        <label>Description :</label>
        <textarea id="description" v-model="description" class="form-text"></textarea>
        <br>
        <label for="photo">Photo :</label>
        <input type="file" id="photo" @change="handlePhotoChange" class="form-input">
        <br>
        <button type="submit" class="form-button">Envoyer</button>
      </form>
      <div v-if="submitted" class="submitted-container">
        <h2>Données soumises :</h2>
        <p>Model : {{ model }}</p>
        <p>Description : {{ description }}</p>
        <p>Photo : {{ photo }}</p>
      </div>
    </div>
  </main>

  <footer>
    <BasDePage/>
  </footer>

</template>

<script>
import AOS from 'aos';
import axios from 'axios';
import 'aos/dist/aos.css';
import BasDePage from "@/components/BasDePage.vue";
import Entete from "@/components/Entete.vue";

export default {
  data() {
    return {
      selectedOption: '',
      options: [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' }
      ],
      model: '',
      description: '',
      photo: null,
      submitted: false
    }
  },
  computed: {
    selectedOptionLabel() {
      // Rechercher l'étiquette correspondante à l'option sélectionnée
      const selectedOption = this.options.find(option => option.value === this.selectedOption);
      return selectedOption ? selectedOption.label : '';
    }
  },
  methods: {
    addOption() {
      const label = prompt("Entrez le nom de la nouvelle option :");
      if (label) {
        const value = label.toLowerCase().replace(/\s/g, '');
        this.options.push({ label, value });
      }
    }
  },
  name: 'ModifCatalogue',
  components: {
    Entete,
    BasDePage,
  },
}
</script>


<style scoped>
.form-div {
  text-align: center;
  margin-bottom: 2%;
  margin-top: 2%;
  margin-left: 20%;
  margin-right: 20%;
  border: 1px solid black;
}

.form-container {
  max-width: 85%;
  margin: 0 auto;
  font-size: 25px;
}

.form-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid black;
  font-size: 15px;
}

.form-text{
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid black;
  font-size: 15px;
  height: 200px;
}

.form-button {
  display: block;
  width: 20%;
  padding: 10px;
  margin: 0 auto;
  margin-bottom: 2%;
  background-color: black;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 10px;
}

.submitted-container {
  margin-top: 20px;
  background-color: #f0f0f0;
  padding: 10px;
}

.option-button:hover{
  text-decoration: underline;
}

.custom-select{
  border: 1px solid black;
}
</style>
