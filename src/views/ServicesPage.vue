<template>
    <div>
      <!-- Hero Section -->
      <section class="relative py-20 bg-gradient-to-br from-secondary to-primary">
        <div class="container relative z-10">
          <div class="max-w-3xl mx-auto text-center text-white">
            <h1 class="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Our Services
            </h1>
            <p class="text-xl text-gray-200 mb-8 animate-fade-in animation-delay-200">
              Comprehensive tech solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>
  
      <!-- Detailed Services Section -->
      <section class="section bg-white">
        <div class="container">
          <div class="space-y-24">
            <div 
              v-for="(service, index) in services" 
              :key="service.id"
              :id="service.id"
              class="service-detail-card"
            >
              <div class="grid md:grid-cols-2 gap-12 items-center">
                <div class="order-2 md:order-none" :class="{ 'md:order-2': index % 2 === 0 }">
                  <div class="service-icon-wrapper">
                    <component :is="service.icon" size="48" class="text-primary" />
                  </div>
                  <h2 class="text-3xl font-bold text-secondary mb-4">{{ service.title }}</h2>
                  <p class="text-gray-600 mb-6">{{ service.description }}</p>
                  <ul class="space-y-3">
                    <li 
                      v-for="feature in service.features" 
                      :key="feature"
                      class="flex items-start"
                    >
                      <CheckCircleIcon class="h-6 w-6 text-primary mt-1 mr-3" />
                      <span class="text-gray-700">{{ feature }}</span>
                    </li>
                  </ul>
                </div>
                <div class="order-1 md:order-none" :class="{ 'md:order-1': index % 2 === 0 }">
                  <div class="service-image-container">
                    <img 
                      :src="service.image" 
                      :alt="service.title"
                      class="rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- CTA Section -->
      <section class="section bg-secondary text-white">
        <div class="container text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Ready to Get Started?
          </h2>
          <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-200">
            Let's discuss how we can help transform your business with our services.
          </p>
          <router-link 
            to="/contact"
            class="btn btn-primary animate-fade-in animation-delay-400"
          >
            Contact Us
          </router-link>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import webdev from "../assets/6.png";
  import appdev from "../assets/7.png";
  import dmarket from "../assets/8.png";
  import cserv from "../assets/9.png";

  import { 
    CodeIcon, 
    LayoutGridIcon, 
    SmartphoneIcon, 
    CloudIcon,
    CheckCircleIcon,
    DatabaseIcon,
    ShieldCheckIcon
  } from 'lucide-vue-next'
  
  const services = [
    {
      id: 'web-development',
      icon: CodeIcon,
      title: 'Web Development',
      description: 'Create powerful, scalable web applications using cutting-edge technologies and best practices.',
      image: webdev,
      features: [
        'Custom web application development',
        'Progressive Web Apps (PWA)',
        'E-commerce solutions',
        'API development and integration',
        'Performance optimization'
      ]
    },
    {
      id: 'ui-ux',
      icon: LayoutGridIcon,
      title: 'Digital Marketing Services',
description: 'Elevate your brand’s online presence with tailored digital marketing strategies that deliver measurable results.',
image:  dmarket,
features: [
  'Search Engine Optimization (SEO)',
  'Social Media Marketing',
  'Pay-Per-Click (PPC) Advertising',
  'Content Marketing',
  'Email Marketing'
]

    },
    {
      id: 'mobile',
      icon: SmartphoneIcon,
      title: 'Mobile Development',
      description: 'Build native and cross-platform mobile applications that provide seamless user experiences.',
      image: appdev,
      features: [
        'iOS app development',
        'Android app development',
        'Cross-platform solutions',
        'Mobile app optimization',
        'App store deployment'
      ]
    },
    {
      id: 'cloud',
      icon: CloudIcon,
      title: 'Cloud Solutions',
      description: 'Leverage cloud technologies to build scalable, reliable, and secure infrastructure.',
      image: cserv,
      features: [
        'Cloud architecture design',
        'Cloud migration services',
        'DevOps implementation',
        'Serverless solutions',
        'Cloud security'
      ]
    }
  ]
  </script>
  
  <style scoped>
  .service-detail-card {
    @apply relative;
  }
  
  .service-icon-wrapper {
    @apply mb-6 inline-block p-4 rounded-xl bg-primary/10 transform transition-transform duration-500 hover:scale-110;
  }
  
  .service-image-container {
    @apply relative;
  }
  
  .service-image-container::before {
    content: '';
    @apply absolute inset-0 bg-primary/10 rounded-xl transform rotate-6 transition-transform duration-500;
  }
  
  .service-image-container:hover::before {
    @apply rotate-0;
  }
  </style>