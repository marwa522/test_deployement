import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Creations from '../views/Creations.vue'

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
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
