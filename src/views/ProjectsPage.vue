<template>
    <div>
      <!-- Hero Section -->
      <section class="relative py-20 bg-gradient-to-br from-secondary to-primary">
        <div class="container relative z-10">
          <div class="max-w-3xl mx-auto text-center text-white">
            <h1 class="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Our Projects
            </h1>
            <p class="text-xl text-gray-200 mb-8 animate-fade-in animation-delay-200">
              Showcasing our best work and successful implementations
            </p>
          </div>
        </div>
      </section>
  
      <!-- Projects Grid -->
      <section class="section bg-white">
        <div class="container">
          <!-- Filter Buttons -->
          <div class="flex flex-wrap justify-center gap-4 mb-12">
            <button
              v-for="category in categories"
              :key="category"
              @click="activeCategory = category"
              class="px-6 py-2 rounded-full transition-all duration-300"
              :class="[
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              ]"
            >
              {{ category }}
            </button>
          </div>
  
          <!-- Projects -->
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="project in filteredProjects"
              :key="project.id"
              class="project-card group"
              @click="openProject(project)"
            >
              <div class="relative overflow-hidden rounded-xl">
                <img
                  :src="project.image"
                  :alt="project.title"
                  class="w-full aspect-video object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div class="absolute bottom-0 left-0 right-0 p-6">
                    <h3 class="text-xl font-bold text-white mb-2">{{ project.title }}</h3>
                    <p class="text-gray-200 mb-4">{{ project.shortDescription }}</p>
                    <span class="inline-flex items-center text-primary-light">
                      Learn More
                      <ArrowRightIcon class="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Project Modal -->
      <TransitionRoot appear :show="isModalOpen" as="template">
        <Dialog as="div" @close="closeProject" class="relative z-50">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="fixed inset-0 bg-black/75" />
          </TransitionChild>
  
          <div class="fixed inset-0 overflow-y-auto">
            <div class="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95"
              >
                <DialogPanel class="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                  <div v-if="selectedProject" class="relative">
                    <button
                      @click="closeProject"
                      class="absolute right-0 top-0 p-2 text-gray-400 hover:text-gray-500"
                    >
                      <XIcon class="h-6 w-6" />
                    </button>
                    
                    <img
                      :src="selectedProject.image"
                      :alt="selectedProject.title"
                      class="w-full rounded-xl mb-6"
                    />
                    
                    <h2 class="text-2xl font-bold text-secondary mb-4">
                      {{ selectedProject.title }}
                    </h2>
                    
                    <p class="text-gray-600 mb-6">
                      {{ selectedProject.description }}
                    </p>
                    
                    <div class="mb-6">
                      <h3 class="text-lg font-semibold text-secondary mb-3">Technologies Used</h3>
                      <div class="flex flex-wrap gap-2">
                        <span
                          v-for="tech in selectedProject.technologies"
                          :key="tech"
                          class="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                        >
                          {{ tech }}
                        </span>
                      </div>
                    </div>
                    
                    <div class="flex justify-end">
                      <a
                        v-if="selectedProject.link"
                        :href="selectedProject.link"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn btn-primary"
                      >
                        Visit Project
                      </a>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
    </div>
  </template>
  
  <script setup>
  import mudbeaver from "../assets/projects/mudbeaver.png";
  import alphabytes from "../assets/projects/Alphabytes.png";
  import Dhenterprise from "../assets/projects/Dhenterprise.png";
  import gotarent from "../assets/projects/gotarent.png";
  import hotelsomras from "../assets/projects/hotelsomras.png";
  import teentaly from "../assets/projects/teentalaytours.png";
  import terem from "../assets/projects/terrem.png";
  import Tghe from "../assets/projects/TGHE.png";
  import Triptosikkim from "../assets/projects/Triptosikkim.png";

  import { ref, computed } from 'vue'
  import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
  import { ArrowRightIcon, XIcon } from 'lucide-vue-next'
  
  const categories = ['All', 'Web', 'Mobile', 'Cloud', 'UI/UX']
  const activeCategory = ref('All')
  const isModalOpen = ref(false)
  const selectedProject = ref(null)
  
  const projects = [
  {
    id: 1,
    title: 'Mud Beaver Sikkim',
    shortDescription: 'Eco-friendly construction solutions in Sikkim',
    description: 'A Jorethang-based construction company offering eco-friendly and sustainable construction services, focusing on innovative and green building practices.',
    image: mudbeaver,
    category: 'Construction',
    technologies: ['Eco-friendly Materials', 'Sustainable Design'],
    link: 'https://www.mudbeaversikkim.in/'
  },
  {
    id: 2,
    title: 'The Great Himalayan Travels',
    shortDescription: 'Explore the Himalayas with expert guides',
    description: 'A Sikkim-based travel agency offering curated travel packages and guided tours to showcase the natural beauty and culture of the Himalayas.',
    image: Tghe,
    category: 'Travel',
    technologies: ['Custom Travel Packages', 'Tour Management'],
    link: 'https://tghe.in/'
  },
  {
    id: 3,
    title: 'Got A Rent',
    shortDescription: 'Startup simplifying rental services in Sikkim',
    description: 'A Sikkim-based startup connecting renters and owners, offering an easy and reliable way to find or rent properties.',
    image: gotarent,
    category: 'Startup',
    technologies: ['Property Listings', 'Rental Management System'],
    link: '#'
  },
  {
    id: 4,
    title: 'Alphabhytes',
    shortDescription: 'Empowering education with innovative coaching',
    description: 'A Namchi-based coaching institute providing top-quality educational services and personalized learning experiences.',
    image: alphabytes,
    category: 'Education',
    technologies: ['Interactive Learning', 'Student Management'],
    link: 'https://alphabytes.institute/'
  },
  {
    id: 5,
    title: 'Dh Enterprises',
    shortDescription: 'Construction company based in Assam',
    description: 'Providing comprehensive construction solutions in Assam, specializing in infrastructure and building projects.',
    image: Dhenterprise,
    category: 'Construction',
    technologies: ['Infrastructure Development', 'Building Solutions'],
    link: 'https://dhenterprises.in/'
  },
  {
    id: 6,
    title: 'Hotel Somras',
    shortDescription: 'Comfortable stay in Chisopani, Sikkim',
    description: 'A cozy hotel located in Chisopani, Sikkim, offering excellent hospitality and a serene environment for travelers.',
    image: hotelsomras,
    category: 'Hospitality',
    technologies: ['Online Booking', 'Guest Management'],
    link: '#'
  },
  {
    id: 7,
    title: 'Teentalay Tours & Travels',
    shortDescription: 'Travel services with local expertise',
    description: 'A Sikkim-based travel agency offering customized tour packages and personalized travel planning services.',
    image: teentaly,
    category: 'Travel',
    technologies: ['Tour Planning', 'Customer Support'],
    link: '#'
  },
  {
    id: 8,
    title: 'Terre Machinics',
    shortDescription: 'Innovative construction services in Sikkim',
    description: 'A Sikkim-based construction company delivering high-quality infrastructure solutions using advanced techniques and machinery.',
    image: terem,
    category: 'Construction',
    technologies: ['Modern Equipment', 'Engineering Solutions'],
    link: 'https://terremechanics.com/'
  },
  {
    id: 9,
    title: 'Trip To Sikkim',
    shortDescription: 'Your gateway to exploring Sikkim',
    description: 'A travel agency dedicated to showcasing the best of Sikkim through personalized travel experiences and comprehensive tour packages.',
    image: Triptosikkim,
    category: 'Travel',
    technologies: ['Travel Itineraries', 'Local Guides'],
    link: 'https://triptosikkim.in/'
  }
];

  
  const filteredProjects = computed(() => {
    if (activeCategory.value === 'All') {
      return projects
    }
    return projects.filter(project => project.category === activeCategory.value)
  })
  
  const openProject = (project) => {
    selectedProject.value = project
    isModalOpen.value = true
  }
  
  const closeProject = () => {
    isModalOpen.value = false
    setTimeout(() => {
      selectedProject.value = null
    }, 200)
  }
  </script>
  
  <style scoped>
  .project-card {
    @apply cursor-pointer transform transition-all duration-300 hover:-translate-y-2;
  }
  
  /* Add hover effect to project cards */
  .project-card::after {
    content: '';
    @apply absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  
  .project-card:hover::after {
    @apply opacity-100;
  }
  </style>