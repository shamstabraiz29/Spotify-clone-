import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/artists',
      name: 'artists',
      component: () => import('../views/Artists.vue'),
    },
    {
      path: '/albums',
      name: 'albums',
      component: () => import('../views/Albums.vue'),
    },
    {
      path: '/radio',
      name: 'radio',
      component: () => import('../views/Radio.vue'),
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/Search.vue'),
    },
    {
      path: '/podcasts',
      name: 'podcasts',
      component: () => import('../views/Podcasts.vue'),
    },
  ],
})

export default router
