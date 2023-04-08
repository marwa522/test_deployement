import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'

const routes= [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/creations',
    name: 'Creations',
    component: () =>
        import('../views/Creations.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () =>
        import('../views/Services.vue')
  },
  {
    path: '/marque',
    name: 'Marque',
    component: () =>
        import('../views/Marque.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () =>
        import('../views/Contact.vue')
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () =>
        import('../views/FAQ.vue')
  },
  {
    path: '/confidentialite',
    name: 'Confidentialite',
    component: () =>
        import('../views/Confidentialite.vue')
  },
  {
    path: '/politiquecommande',
    name: 'PolitiqueCommande',
    component: () =>
        import('../views/PolitiqueCommande.vue')
  },
  {
    path: '/cookies',
    name: 'Cookies',
    component: () =>
        import('../views/Cookies.vue')
  },

]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
