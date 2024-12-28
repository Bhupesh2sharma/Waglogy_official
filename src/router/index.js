import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesPage.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsPage.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutPage.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactPage.vue')
    }
  ]
})

export default router