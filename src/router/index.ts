import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SuepenceView from '../views/SuepenceView.vue'
import PromiseView from '../views/PromiseView.vue'
import CanvasView from '../views/CanvasView.vue'

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/suspence',
      name: 'suspence',
      component: SuepenceView
    },
    {
      path: '/promise',
      name: 'promise',
      component: PromiseView
    },
    {
      path: '/canvas',
      name: 'canvas',
      component: CanvasView
    }
  ]
})

export default router
