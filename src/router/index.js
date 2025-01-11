import { createRouter, createWebHistory } from 'vue-router'
import BlogPage from '../views/BlogPage.vue'
import BlogPostPage from '../views/BlogPostPage.vue'

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
    },
    {
      path: '/blog',
      name: 'Blog',
      component: BlogPage
    },
    {
      path: '/blog/:slug',
      name: 'BlogPost',
      component: BlogPostPage
    }
  ]
})

export default router