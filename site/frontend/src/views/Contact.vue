<template>
    <div class="container" id="contact">
        <div class="row">
            <div class="col-md-6">
                <h2>Contactez-nous</h2>
                <form @submit.prevent="submitForm">
                    <div class="form-group">
                        <label for="name">Nom et Prénom</label>
                        <input type="text" class="form-control" id="name" v-model="form.name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" v-model="form.email" required>
                    </div>
                    <div class="form-group">
                        <label for="phone">Téléphone</label>
                        <input type="tel" class="form-control" id="phone" v-model="form.phone">
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea class="form-control" id="message" rows="5" v-model="form.message" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary btn-animate btn-white">Envoyer</button>
                </form>
                <div class="mt-5 follow-us">
                    <h4>Suivez-nous sur :</h4>
                    <div class="social-media-icons">
                        <a href="https://www.facebook.com/yourpage" target="_blank">
                            <img src="Facebook_icon.svg.png" alt="facebook logo" />
                        </a>
                        <a href="https://www.instagram.com/yourpage" target="_blank">
                            <img src="insta.png" alt="Instagram logo" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div v-if="show">
                    <h2>Confirmation</h2>
                    <p v-if="success" class="text-success">Message envoyé avec succès !</p>
                    <p v-else class="text-danger">Erreur lors de l'envoi du message.</p>
                </div>
            </div>
                 <div class="col-md-6">
                    <h2>Informations de contact</h2>
                   <p><i class="fas fa-phone-alt"></i> +32 1 23 45 67 89</p>
                   <p><i class="fas fa-envelope"></i> info@sitekabori.com</p>
                 </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Contact',
    data () {
        return {
            form: {
                name: '',
                email: '',
                phone: '',
                message: ''
            },
            show: false,
            success: false
        }
    },
    methods: {
        submitForm () {
            axios.post('http://localhost:3000/contact', this.form)
                .then(response => {
                    console.log(response);
                    this.show = true;
                    this.success = true;
                    this.form.name = '';
                    this.form.email = '';
                    this.form.phone = '';
                    this.form.message = '';
                })
                .catch(error => {
                    console.error('Erreur lors de l\'envoi du message:', error);
                    this.show = true;
                    this.success = false;
                });
        }
    }
}
</script>

<style scoped>
#contact {
    background-color: black;
    color: white;
    padding: 50px;
}

#contact h2 {
    margin-bottom: 30px;
    color: rgba(255, 213, 0, 0.99);
    font-family: Arial, sans-serif;
}

#contact p {
    margin-bottom: 10px;
}

#contact a {
    color: white;
    margin-right: 10px;
}

#contact input[type=text],
#contact input[type=email],
#contact input[type=tel],
#contact textarea {
    background-color: transparent;
    border: none;
    border-bottom: 2px solid white;
    color: white;
    margin-bottom: 20px;
    width:100%;
    padding: 10px;
    font-size: 16px;
}

#contact input[type=text]:focus,
#contact input[type=email]:focus,
#contact input[type=tel]:focus,
#contact textarea:focus {
    outline: none;
    border-bottom: 2px solid #fba300;
}

.btn-white {
    background-color: white;
    color: black;
}

.form-control {
    height: 50px;
}
.btn-primary {
    background-color: white;
    color:  black;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    transition: all 0.3s ease;
}

.btn-primary:hover {
    background-color: #e6e6e6;
    color: #007bff;

}


.social-media-icons {
    display: flex;
    justify-content: center;
    align-items: center;
}

.social-media-icons a {
    margin: 12px 10px;
}

.social-media-icons img {
    width: 40px;
    height: 40px;
}
.follow-us {
    margin-bottom: 100px;
    color: rgb(255,215,0);
}
</style>



