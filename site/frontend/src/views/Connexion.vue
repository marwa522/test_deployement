<template>
    <div>
        <header>
            <Entete />
        </header>
        <main>
            <div class="login-page">
                <div class="login-container">
                    <h1 class="login-title">{{ mode === 'connexion' ? 'Connexion' : 'Inscription' }}</h1>
                    <form class="login-form" @submit.prevent="submitForm">
                        <div class="form-group">
                            <label for="email">Adresse email :</label>
                            <input type="email" id="email" v-model="email" required>
                        </div>
                        <div class="form-group" v-if="mode === 'connexion' || mode === 'creation'">
                            <label for="password">Mot de passe :</label>
                            <input type="password" id="password" v-model="password" required>
                        </div>
                        <div class="form-group" v-if="mode === 'creation'">
                            <label for="confirmPassword">Confirmer le mot de passe :</label>
                            <input type="password" id="confirmPassword" v-model="confirmPassword" required>
                        </div>
                        <button type="submit" class="btn-primary btn-login">
                            {{ mode === 'connexion' ? 'Se connecter' : 'Créer un compte' }}
                        </button>
                    </form>
                    <div class="signup-link">
                        <p>
                            {{ mode === 'connexion' ? "Vous n'avez pas de compte ?" : "Vous avez déjà un compte ?" }}
                            <a href="#" @click="switchMode">{{ mode === 'connexion' ? 'Créer un compte' : 'Se connecter' }}</a>
                        </p>
                    </div>
                </div>
            </div>
        </main>
        <footer>
            <BasDePage />
        </footer>
    </div>
</template>

<script>
import Entete from "@/components/Entete.vue";
import BasDePage from "@/components/BasDePage.vue";

export default {
    name: "LoginPage",
    components: { Entete, BasDePage },
    data() {
        return {
            mode: "connexion",
            email: "",
            password: "",
            confirmPassword: "",
        };
    },
    methods: {
        switchMode() {
            this.mode = this.mode === "connexion" ? "creation" : "connexion";
        },
        submitForm() {
            if (this.mode === "connexion") {
                this.performConnexion();
            } else {
                this.performInscription();
            }
        },
        performConnexion() {
            // Add your logic for login/authentication here
        },
        performInscription() {
            if (this.password !== this.confirmPassword) {
                // Passwords don't match, handle error
            }
            // Add your logic for user registration here
        },
    },
};
</script>

<style scoped>
.login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #333333;
}

.login-container {
    width: 600px;
    padding: 20px;
    margin-top: -100px;
    background-color: #000000;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    color: #ffffff;
}

.login-title {
    text-align: center;
    color: yellow;
    font-size: 24px;
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 10px;
}

label {
    font-weight: bold;
}

input[type="email"],
input[type="password"] {
    width: 100%;
    padding: 10px;
    border: none;
    background-color: #f0f0f0;
    color: #000000;
}

.btn-primary {
    padding: 6px 8px;
    background-color: white;
    color: black;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.3s ease;
}

.btn-login {
    font-size: 14px;
}

.signup-link {
    text-align: center;
}

.signup-link a {
    color: darkgreen;
    text-decoration: underline;
    cursor: pointer;
}

.signup-link {
    text-align: center;
}

.signup-link a {
    color: darkgreen;
    text-decoration: underline;
    cursor: pointer;
}
</style>
