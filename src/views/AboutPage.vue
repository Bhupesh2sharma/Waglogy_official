<template>
    <div>
      <!-- Hero Section -->
      <section class="relative py-20 bg-gradient-to-br from-secondary to-primary">
        <div class="container relative z-10">
          <div class="max-w-3xl mx-auto text-center text-white">
            <h1 class="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              About Waglogy
            </h1>
            <p class="text-xl text-gray-200 mb-8 animate-fade-in animation-delay-200">
              Driving innovation through technology
            </p>
          </div>
        </div>
      </section>
  
      <!-- Story Section -->
      <section class="section bg-white">
        <div class="container">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl font-bold text-secondary mb-6">Our Story</h2>
              <div class="space-y-4 text-gray-600">
                <p>
                  Founded in 2022, Waglogy emerged from a vision to transform how businesses leverage technology. Our journey began with a small team of passionate developers and has grown into a comprehensive tech solutions provider.
                </p>
                <p>
                  We believe in the power of innovation to solve complex business challenges and create meaningful impact. Our commitment to excellence and customer satisfaction has helped us build lasting partnerships with clients across industries.
                </p>
              </div>
            </div>
            <div class="relative">
              <div class="about-image-container">
                <img 
                  :src="banner"
                  alt="Waglogy team at work"
                  class="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Values Section -->
      <section class="section bg-gray-50">
        <div class="container">
          <h2 class="text-3xl font-bold text-secondary text-center mb-12">Our Values</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div
              v-for="(value, index) in values"
              :key="index"
              class="value-card"
            >
              <div class="value-icon-container">
                <component :is="value.icon" size="32" class="text-primary" />
              </div>
              <h3 class="text-xl font-bold text-secondary mb-3">{{ value.title }}</h3>
              <p class="text-gray-600">{{ value.description }}</p>
            </div>
          </div>
        </div>
      </section>
  
  
      <!-- Timeline Section -->
      <section class="section bg-gray-50">
        <div class="container">
          <h2 class="text-3xl font-bold text-secondary text-center mb-12">Our Journey</h2>
          <div class="max-w-3xl mx-auto">
            <div
              v-for="(milestone, index) in timeline"
              :key="index"
              class="timeline-item"
            >
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <div class="text-primary font-bold mb-2">{{ milestone.year }}</div>
                <h3 class="text-xl font-bold text-secondary mb-2">{{ milestone.title }}</h3>
                <p class="text-gray-600">{{ milestone.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import banner from "../assets/banner.png"
  import { 
    HeartIcon, 
    LightbulbIcon, 
    UsersIcon,
    LinkedinIcon,
    TwitterIcon,
    GithubIcon
  } from 'lucide-vue-next'
  
  const values = [
    {
      icon: HeartIcon,
      title: 'Client First',
      description: 'We prioritize our clients success and build lasting partnerships through trust and dedication.'
    },
    {
      icon: LightbulbIcon,
      title: 'Innovation',
      description: 'We constantly explore new technologies and approaches to deliver cutting-edge solutions.'
    },
    {
      icon: UsersIcon,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and open communication to achieve exceptional results.'
    }
  ]
  
 
  const timeline = [
    {
      year: '2022',
      title: 'Company Founded',
      description: 'Waglogy was established with a vision to transform digital solutions.'
    },
    {
      year: '2022',
      title: 'First Major Project',
      description: 'Successfully delivered our first enterprise-level solution.'
    },
    {
      year: '2023',
      title: 'Team Expansion',
      description: 'Grew our team and opened new office locations.'
    },
    {
      year: '2024',
      title: 'Innovation Award',
      description: 'Received recognition for our innovative solutions.'
    },
    {
      year: '2025',
      title: 'Global Reach',
      description: 'Expanded our services to international markets.'
    }
  ]
  </script>
  
  <style scoped>
  .about-image-container {
    @apply relative;
  }
  
  .about-image-container::before {
    content: '';
    @apply absolute inset-0 bg-primary/10 rounded-xl transform rotate-6 transition-transform duration-500;
  }
  
  .about-image-container:hover::before {
    @apply rotate-0;
  }
  
  .value-card {
    @apply bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2;
  }
  
  .value-icon-container {
    @apply mb-4 p-4 rounded-full bg-primary/10 inline-flex justify-center items-center text-primary;
  }
  
  
  
  .timeline-item {
    @apply relative pl-12 mb-10;
  }
  
  .timeline-marker {
    @apply absolute left-0 top-0 w-3 h-3 bg-primary rounded-full;
  }
  
  .timeline-content {
    @apply pl-8;
  }
  
  .timeline-item:last-child {
    @apply mb-0;
  }
  
  .timeline-item::before {
    content: '';
    @apply absolute left-0 top-1/2 w-1 h-full bg-primary;
    transform: translateY(-50%);
  }
  </style>
  