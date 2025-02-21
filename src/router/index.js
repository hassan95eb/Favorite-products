import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/favorite',
      name: 'Favorit',
      component: () => import('../views/FavoriteView.vue'),
    },
  ],
})
export default router
