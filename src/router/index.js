import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ECommerceProjectView from '@/views/E-CommerceProjectView.vue'
import WordleView from '@/views/WordleView.vue'
import SpaceProjectView from '@/views/SpaceProjectView.vue'
import PokeIndexView from '@/views/PokeIndexView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
     path: '/e-commerce-project',
     name: 'e-commerce',
     component: ECommerceProjectView
    },
    {
      path: '/wordle-clone',
      name: 'wordle',
      component: WordleView
     }, 
     {
      path: '/space-project',
      name: 'space',
      component: SpaceProjectView
     },
     {
      path: '/poke-index-project',
      name: 'poke-index',
      component: PokeIndexView
     },
  ]
})

export default router
