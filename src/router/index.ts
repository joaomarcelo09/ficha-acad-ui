import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FichaViewVue from '@/views/FichaView.vue'
import AthleteViewVue from '@/views/AthleteView.vue'
import FichaForm from '@/forms/FichaForm.vue'
import AthleteForm from '@/forms/AthleteForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ficha',
      name: 'ficha',
      children: [
        {
          path: 'form',
          name: 'form-ficha',
          component: FichaForm
        },
        {
          path: 'list',
          name: 'list-ficha',
          component: FichaViewVue
        }
      ]
    },
    {
      path: '/atleta',
      name: 'athlete',
      children: [
        {
          path: 'form',
          name: 'form-atleta',
          component: AthleteForm
        },
        {
          path: 'list',
          name: 'list-atleta',
          component: AthleteViewVue
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
