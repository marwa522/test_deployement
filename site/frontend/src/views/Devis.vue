<template>
    <div class="devis-formulaire">
        <header>
            <Entete />
        </header>
        <main>
            <div class="container">
                <h1 class="form-title">Formulaire de devis</h1>
                <form @submit.prevent="envoyerDemandeDevis" class="my-4">
                    <div class="form-group">
                        <label for="nom">Nom et Prénom :</label>
                        <input type="text" class="form-control" id="nom" name="nom" v-model="nom" autocomplete="on" required />
                    </div>

                    <div class="form-group">
                        <label for="email">Email :</label>
                        <input type="email" class="form-control" id="email" name="email" v-model="email" autocomplete="on" required />
                    </div>

                    <div class="form-group">
                        <label for="modele">Modèle :</label>
                        <select class="form-control" id="modele" name="modele" v-model="modele" autocomplete="on" required>
                            <option v-for="model in models" :key="model">{{ model }}</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="remarque">Remarque :</label>
                        <textarea class="form-control" id="remarque" name="remarque" rows="4" v-model="remarque" autocomplete="on"></textarea>
                    </div>

                    <button type="submit" class="btn btn-envoyer">Envoyer</button>
                </form>
                <div v-if="demandeEnvoyee" class="message-succes">
                    Demande de devis envoyée avec succès !
                </div>
            </div>
        </main>
        <footer>
            <BasDePage />
        </footer>
    </div>
</template>

<script>
import axios from "axios";
import Entete from "@/components/Entete.vue";
import BasDePage from "@/components/BasDePage.vue";

export default {
    name: "Devis",
    components: { BasDePage, Entete },
    data() {
        return {
            nom: "",
            email: "",
            modele: "",
            remarque: "",
            models: [],
            demandeEnvoyee: false
        };
    },
    mounted() {
        this.recupModels();
    },
    methods: {
        recupModels() {
            axios
                .get("http://localhost:3000/prod/")
                .then((response) => {
                    this.models = response.data.map((prod) => prod.nom);
                })
                .catch((error) => {
                    console.error(
                        "Erreur lors de la récupération de la liste des modèles:",
                        error
                    );
                });
        },
        envoyerDemandeDevis() {
            const demande = {
                nom: this.nom,
                email: this.email,
                modele: this.modele,
                remarque: this.remarque
            };

            axios
                .post("http://localhost:3000/devis", demande)
                .then(() => {
                    console.log("Demande de devis envoyée !");
                    this.nom = "";
                    this.email = "";
                    this.modele = "";
                    this.remarque = "";
                    this.demandeEnvoyee = true;
                })
                .catch((error) => {
                    console.error("Erreur lors de l'envoi de la demande de devis :", error);
                });
        }
    }
};
</script>

<style scoped>
.devis-formulaire {
    background-color: #333333;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.container {
    max-width: 500px;
    padding: 20px;
    margin: 0 auto;
    background-color: #000000;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    color: #ffffff;
}

.form-group {
    margin-bottom: 20px;
}

label {
    font-weight: bold;
}

input,
textarea,
select {
    width: 100%;
    padding: 10px;
    border: none;
    background-color: #ffffff;
    color: #000000;
}

.btn-envoyer {
    padding: 10px 20px;
    background-color: #ffffff;
    color: #000000;
    border: none;
    cursor: pointer;
}

.btn-envoyer:hover {
    background-color: #cccccc;
}

.message-succes {
    background-color: #4caf50;
    color: #ffffff;
    padding: 10px;
    text-align: center;
    margin-top: 10px;
}
.form-title {
    color: yellow;
}
</style>
