import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ConceptsView from '../views/ConceptsView.vue'
import CRUDview from '../views/CRUDView.vue'
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
      path: '/concepts',
      name: 'concpets',
      component: ConceptsView
    },
    {
      path:'/crud',
      name:'crud',
      component: CRUDview
    }
  ]
})

export default router
