<template>
    <div class="min-h-screen bg-secondary">
      <nav class="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex-shrink-0 flex items-center">
              <router-link to="/" class="text-primary text-2xl font-bold">
                Waglogy
              </router-link>
            </div>
            <div class="hidden sm:flex sm:items-center sm:space-x-8">
              <router-link
                v-for="item in navigationItems"
                :key="item.path"
                :to="item.path"
                class="text-secondary hover:text-primary transition-colors px-3 py-2"
                :class="{ 'text-primary': isCurrentRoute(item.path) }"
              >
                {{ item.name }}
              </router-link>
            </div>
            <button
              @click="isMobileMenuOpen = !isMobileMenuOpen"
              class="sm:hidden p-2"
            >
              <MenuIcon v-if="!isMobileMenuOpen" class="h-6 w-6" />
              <XIcon v-else class="h-6 w-6" />
            </button>
          </div>
        </div>
        
        <!-- Mobile menu -->
        <div
          v-show="isMobileMenuOpen"
          class="sm:hidden"
        >
          <div class="pt-2 pb-3 space-y-1">
            <router-link
              v-for="item in navigationItems"
              :key="item.path"
              :to="item.path"
              class="block px-3 py-2 text-base font-medium"
              :class="[
                isCurrentRoute(item.path)
                  ? 'text-primary'
                  : 'text-secondary hover:text-primary'
              ]"
              @click="isMobileMenuOpen = false"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>
      </nav>
  
      <main class="pt-16">
        <slot></slot>
      </main>
  
      <footer class="bg-secondary text-white py-8 mt-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 class="text-xl font-bold mb-4">Waglogy</h3>
              <p class="text-gray-300">
                Innovative tech solutions for modern businesses
              </p>
            </div>
            <div>
              <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
              <ul class="space-y-2">
                <li v-for="item in navigationItems" :key="item.path">
                  <router-link
                    :to="item.path"
                    class="text-gray-300 hover:text-primary transition-colors"
                  >
                    {{ item.name }}
                  </router-link>
                </li>
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-semibold mb-4">Contact</h4>
              <ul class="space-y-2 text-gray-300">
                <li>contact@waglogy.com</li>
                <li>+91 9733814168</li>
                <li>737101 Gangtok, Sikkim,India</li>
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-semibold mb-4">Follow Us</h4>
              <div class="flex space-x-4">
                <a
                  v-for="social in socialLinks"
                  :key="social.name"
                  :href="social.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-300 hover:text-primary transition-colors"
                >
                  <component :is="social.icon" class="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div class="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>&copy; {{ new Date().getFullYear() }} Waglogy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { MenuIcon, XIcon, TwitterIcon, LinkedinIcon, GithubIcon, InstagramIcon } from 'lucide-vue-next'
  
  const route = useRoute()
  const isMobileMenuOpen = ref(false)
  
  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]
  
  const socialLinks = [
  { name: 'LinkedIn', icon: LinkedinIcon, url: 'https://in.linkedin.com/company/waglogy' },
    { name: 'Twitter', icon: TwitterIcon, url: 'https://github.com/Waglogy' },
    { name: 'GitHub', icon: GithubIcon, url: 'https://github.com/Waglogy' },
    { name: 'Instagram', icon: InstagramIcon, url: 'https://www.instagram.com/waglogy/' }
  ]
  
  const isCurrentRoute = (path) => {
    return route.path === path
  }
  </script>
  
  <style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  
  :root {
    --color-primary: #0c8bd5;
    --color-secondary: #323232;
  }
  
  /* Custom font import */
  @font-face {
    font-family: 'Expo 2';
    src: url('/fonts/Expo2.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  
  body {
    font-family: 'Expo 2', sans-serif;
  }
  
  .text-primary {
    color: var(--color-primary);
  }
  
  .bg-primary {
    background-color: var(--color-primary);
  }
  
  .text-secondary {
    color: var(--color-secondary);
  }
  
  .bg-secondary {
    background-color: var(--color-secondary);
  }
  </style>