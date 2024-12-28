<template>
  <div v-if="isLoading" class="loading-page">
    <img src="/logo.svg" alt="Logo" class="loading-logo" />
    <p class="loading-text">"Great things take time. Hang tight!"</p>
  </div>
  <div v-else>
    <MainLayout>
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </MainLayout>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import MainLayout from './components/layout/MainLayout.vue';

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 3000); // Simulate a delay
});
</script>


<style>
/* Import Google Font */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

/* Loading Page Styles */
.loading-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--color-primary);
  overflow: hidden;
}

.loading-logo {
  width: 100px;
  height: 100px;
  animation: spin 2s linear infinite;
}

.loading-text {
  margin-top: 1rem;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  animation: fadeInOut 2s ease-in-out infinite;
}


@keyframes fadeInOut {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Page Transition Animations */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Global Styles */
:root {
  --color-primary: #0c8bd5;
  --color-secondary: #323232;
}

body {
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}



  
  /* Page Transition Animations */
  .page-enter-active,
  .page-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  
  .page-enter-from {
    opacity: 0;
    transform: translateY(20px);
  }
  
  .page-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }
  
  /* Global Styles */
  :root {
    --color-primary: #0c8bd5;
    --color-secondary: #323232;
  }
  
  body {
    font-family: 'Inter', sans-serif; /* Changed from Expo 2 to Inter */
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
  
  /* Button Styles */
  .btn {
    @apply px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2;
  }
  
  .btn-primary {
    @apply bg-primary text-white hover:bg-primary/90 focus:ring-primary/50;
  }
  
  .btn-secondary {
    @apply bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary/50;
  }
  
  .btn-outline {
    @apply border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary/50;
  }
  
  /* Card Styles */
  .card {
    @apply bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl;
  }
  
  /* Section Styles */
  .section {
    @apply py-16 px-4 sm:px-6 lg:px-8;
  }
  
  .section-title {
    @apply text-3xl sm:text-4xl font-bold text-center mb-12;
  }
  
  /* Container */
  .container {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }
  
  /* Grid Layouts */
  .grid-cols-auto-fit {
    @apply grid gap-6;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
  
  /* Accessibility */
  .sr-only {
    @apply absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0;
  }
  
  /* Focus Styles */
  .focus-visible {
    @apply focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2;
  }
  
  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    @apply bg-gray-100;
  }
  
  ::-webkit-scrollbar-thumb {
    @apply bg-primary/50 rounded-full hover:bg-primary;
  }
  
  /* Loading States */
  .loading {
    @apply animate-pulse bg-gray-200;
  }
  
  /* Text Selection */
  ::selection {
    @apply bg-primary/20 text-secondary;
  }
  </style>