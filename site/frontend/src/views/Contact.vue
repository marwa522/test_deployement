<template>
    <div class="container">
        <h1 class="text-center">Nous contacter</h1>
        <div class="row">
            <div class="col-md-6">
                <h3>Informations de contact</h3>
                <div class="contact-info">
                    <p><strong>Adresse:</strong> {{contactInfo.address}}</p>
                    <p><strong>Téléphone:</strong> {{contactInfo.phone}}</p>
                    <p><strong>Email:</strong> {{contactInfo.email}}</p>
                    <h3>Suivez-nous</h3>
                    <div class="social-media">
                        <a :href="contactInfo.facebook"><i class="fab fa-facebook"></i></a>
                        <a :href="contactInfo.twitter"><i class="fab fa-twitter"></i></a>
                        <a :href="contactInfo.instagram"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <h3>Nous envoyer un message</h3>
                <form @submit.prevent="submitForm" class="contact-form">
                    <div class="form-group">
                        <label for="name">Nom</label>
                        <input type="text" class="form-control" id="name" v-model="form.name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" v-model="form.email" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea class="form-control" id="message" v-model="form.message" rows="5" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Envoyer</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            contactInfo: {},
            form: {
                name: '',
                email: '',
                message: ''
            }
        }
    },
    mounted() {
        // appel vers l'API pour récupérer les informations de contact
        axios.get('/api/contact')
            .then(response => {
                this.contactInfo = response.data
            })
            .catch(error => {
                console.log(error)
            })
    },
    methods: {
        submitForm() {
            // appel vers l'API pour envoyer le message
            axios.post('/api/contact', this.form)
                .then(response => {
                    alert('Votre message a été envoyé avec succès')
                    // réinitialisation du formulaire
                    this.form.name = ''
                    this.form.email = ''
                    this.form.message = ''
                })
                .catch(error => {
                    console.log(error)
                    alert('Une erreur est survenue lors de l\'envoi du message')
                })
        }
    }
}
</script>

 <style>

.contact-info {
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.social-media a {
    margin-right: 10px;
    color: #fff;
    background-color: #333;
    display: inline-block;
    width: 40px;
    height: 40px;}  </style>


