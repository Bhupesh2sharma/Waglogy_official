<template>
    <div>
      <!-- Hero Section with 3D Icons -->
      <section class="relative min-h-screen flex items-center bg-gradient-to-br from-secondary to-primary overflow-hidden py-20">
        <!-- 3D Floating Icons Background -->
        <div class="absolute inset-0 overflow-hidden">
          <div v-for="(icon, index) in floatingIcons" 
               :key="index" 
               class="floating-icon absolute"
               :style="{
                 left: `${icon.left}%`,
                 top: `${icon.top}%`,
                 animationDelay: `${icon.delay}s`,
                 transform: `scale(${icon.scale})`
               }">
            <component 
              :is="icon.component" 
              class="text-white/10 transform-gpu"
              :size="icon.size" 
            />
          </div>
        </div>
        
        <!-- Hero Content -->
        <div class="container relative z-10">
          <div class="max-w-3xl mx-auto text-center text-white">
            <div class="mb-8 perspective-container">
              <div class="rotating-cube mx-auto mb-8">
                <div class="cube-face front">
                  <CodeIcon size="48" />
                </div>
                <div class="cube-face back">
                  <RocketIcon size="48" />
                </div>
                <div class="cube-face right">
                  <CloudIcon size="48" />
                </div>
                <div class="cube-face left">
                  <DatabaseIcon size="48" />
                </div>
                <div class="cube-face top">
                  <LayersIcon size="48" />
                </div>
                <div class="cube-face bottom">
                  <ServerIcon size="48" />
                </div>
              </div>
            </div>
            <h1 
              class="text-4xl md:text-6xl font-bold mb-6 animate-fade-in"
            >
              Innovating Tomorrow's Technology Today
            </h1>
            <p 
              class="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in animation-delay-200"
            >
              We transform ideas into cutting-edge solutions that drive business growth and innovation.
            </p>
            <div 
              class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-400"
            >
              <router-link to="/services" class="btn btn-primary">
                Explore Services
              </router-link>
              <router-link to="/about" class="btn btn-outline border-white text-white hover:bg-white hover:text-secondary">
                Learn More
              </router-link>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Services Preview with 3D Cards -->
      <section class="section bg-white">
        <div class="container">
          <h2 class="section-title text-secondary">Our Services</h2>
          <div class="grid-cols-auto-fit">
            <div 
              v-for="(service, index) in services" 
              :key="index"
              class="service-card"
            >
              <div class="service-card-inner">
                <div class="service-card-front">
                  <div class="icon-3d">
                    <component :is="service.icon" size="32" />
                  </div>
                  <h3 class="text-xl font-bold text-secondary mb-4">{{ service.title }}</h3>
                  <p class="text-gray-600">{{ service.description }}</p>
                </div>
                <div class="service-card-back">
                  <h3 class="text-xl font-bold text-white mb-4">{{ service.title }}</h3>
                  <p class="text-gray-200 mb-4">{{ service.details }}</p>
                  <router-link 
                    :to="`/services#${service.id}`" 
                    class="btn btn-outline border-white text-white hover:bg-white hover:text-primary"
                  >
                    Learn More
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Features with 3D Icons -->
      <section class="section bg-gray-50">
        <div class="container">
          <div class="grid md:grid-cols-3 gap-8">
            <div 
              v-for="(feature, index) in features" 
              :key="index"
              class="feature-card"
            >
              <div class="icon-3d-container">
                <component :is="feature.icon" size="32" class="icon-3d-feature" />
              </div>
              <h3 class="text-xl font-bold text-secondary mb-3">{{ feature.title }}</h3>
              <p class="text-gray-600">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- CTA Section -->
      <section class="section bg-secondary text-white">
        <div class="container text-center">
          <div class="cta-3d-container mb-8">
            <RocketIcon size="48" class="cta-3d-icon" />
          </div>
          <h2 
            class="text-3xl md:text-4xl font-bold mb-6 animate-fade-in"
          >
            Ready to Transform Your Business?
          </h2>
          <p 
            class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-200"
          >
            Let's collaborate to bring your vision to life with cutting-edge technology solutions.
          </p>
          <router-link 
            to="/contact"
            class="btn btn-primary animate-fade-in animation-delay-400"
          >
            Get Started
          </router-link>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { 
    CodeIcon, 
    LayoutGridIcon, 
    SmartphoneIcon, 
    CloudIcon,
    ShieldCheckIcon,
    UsersIcon,
    RocketIcon,
    DatabaseIcon,
    LayersIcon,
    ServerIcon,
    CpuIcon,
    GlobeIcon,
    BrainCircuitIcon
  } from 'lucide-vue-next'
  
  const floatingIcons = [
    { component: CodeIcon, left: 10, top: 20, delay: 0, scale: 1.5, size: 32 },
    { component: CloudIcon, left: 80, top: 15, delay: 1, scale: 1.2, size: 32 },
    { component: DatabaseIcon, left: 25, top: 60, delay: 2, scale: 1.3, size: 32 },
    { component: CpuIcon, left: 70, top: 70, delay: 3, scale: 1.4, size: 32 },
    { component: GlobeIcon, left: 40, top: 30, delay: 4, scale: 1.6, size: 32 },
    { component: BrainCircuitIcon, left: 60, top: 40, delay: 5, scale: 1.3, size: 32 }
  ]
  
  const services = [
    {
      id: 'web-development',
      icon: CodeIcon,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies.',
      details: 'Full-stack development with the latest frameworks and tools.'
    },
    {
      id: 'ui-ux',
      icon: LayoutGridIcon,
      title: 'Digital Marketing',
      description: 'Effective strategies to enhance your online presence.',
      details: 'Comprehensive solutions for SEO, social media, and online campaigns.'
    },
    {
      id: 'mobile',
      icon: SmartphoneIcon,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps.',
      details: 'iOS and Android development with cutting-edge technologies.'
    },
    {
      id: 'cloud',
      icon: CloudIcon,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure solutions.',
      details: 'Cloud-native architecture and deployment strategies.'
    }
  ]
  
  const features = [
    {
      icon: RocketIcon,
      title: 'Innovation First',
      description: 'We stay ahead of technological trends to deliver cutting-edge solutions.'
    },
    {
      icon: UsersIcon,
      title: 'Client-Centric',
      description: 'Your success is our priority. We work closely with you to understand and meet your needs.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Quality Assured',
      description: 'Our rigorous quality control ensures reliable and robust solutions.'
    }
  ]
  </script>
  
  <style scoped>
  /* 3D Floating Icons Animation */
  .floating-icon {
    animation: float 6s ease-in-out infinite;
    will-change: transform;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
  
  /* 3D Rotating Cube */
  .perspective-container {
    perspective: 1000px;
  }
  
  .rotating-cube {
    width: 100px;
    height: 100px;
    position: relative;
    transform-style: preserve-3d;
    animation: rotate 20s infinite linear;
  }
  
  .cube-face {
    position: absolute;
    width: 100px;
    height: 100px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  .front  { transform: translateZ(50px); }
  .back   { transform: rotateY(180deg) translateZ(50px); }
  .right  { transform: rotateY(90deg) translateZ(50px); }
  .left   { transform: rotateY(-90deg) translateZ(50px); }
  .top    { transform: rotateX(90deg) translateZ(50px); }
  .bottom { transform: rotateX(-90deg) translateZ(50px); }
  
  @keyframes rotate {
    from { transform: rotateX(0) rotateY(0); }
    to { transform: rotateX(360deg) rotateY(360deg); }
  }
  
  /* 3D Service Cards */
  .service-card {
    perspective: 1000px;
    height: 300px;
  }
  
  .service-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
  
  .service-card:hover .service-card-inner {
    transform: rotateY(180deg);
  }
  
  .service-card-front,
  .service-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    padding: 2rem;
    border-radius: 1rem;
  }
  
  .service-card-front {
    background: white;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
  
  .service-card-back {
    background: var(--color-primary);
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
  /* 3D Icons */
  .icon-3d {
    transform-style: preserve-3d;
    transition: transform 0.3s ease;
  }
  
  .service-card:hover .icon-3d {
    transform: translateZ(20px) rotateY(360deg);
  }
  
  /* Feature Cards */
  .feature-card {
    padding: 2rem;
    background: white;
    border-radius: 1rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .feature-card:hover {
    transform: translateY(-10px);
  }
  
  .icon-3d-container {
    perspective: 1000px;
    margin-bottom: 1.5rem;
  }
  
  .icon-3d-feature {
    transform-style: preserve-3d;
    animation: iconFloat 3s ease-in-out infinite;
    color: var(--color-primary);
  }
  
  @keyframes iconFloat {
    0%, 100% { transform: translateY(0) rotateY(0); }
    50% { transform: translateY(-10px) rotateY(180deg); }
  }
  
  /* CTA Section */
  .cta-3d-container {
    perspective: 1000px;
  }
  
  .cta-3d-icon {
    animation: ctaRotate 4s ease-in-out infinite;
    color: var(--color-primary);
  }
  
  @keyframes ctaRotate {
    0%, 100% { transform: rotateY(0); }
    50% { transform: rotateY(180deg); }
  }
  
  /* Add new animation classes */
  .animate-fade-in {
    opacity: 0;
    animation: fadeIn 0.8s ease-out forwards;
  }
  
  .animation-delay-200 {
    animation-delay: 200ms;
  }
  
  .animation-delay-400 {
    animation-delay: 400ms;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>