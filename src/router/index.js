import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/',
      component: () => import('@/layouts/auth-layout.vue'),
      children: [
        {
          path: '/',
          name: 'login',
          component: () => import('@/views/auth/login.vue')
        }
      ]
    },
    {
      path: '/dashboard',
      redirect: '/dashboard/home',
      component: () => import('@/layouts/default.vue'),
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/home.vue')
        }
      ]
    }
  ]
})

export default router
