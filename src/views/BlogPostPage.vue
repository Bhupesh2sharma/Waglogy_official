<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-[40vh] flex items-center bg-gradient-to-br from-secondary to-primary overflow-hidden py-20">
      <div class="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center text-white">
          <h1 class="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            {{ post.title }}
          </h1>
          <div class="flex items-center justify-center space-x-4 text-gray-200 animate-fade-in animation-delay-200">
            <span>{{ post.date }}</span>
            <span>•</span>
            <span>{{ post.author }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Content -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article class="prose lg:prose-xl mx-auto">
          <div class="icon-3d-container mb-8 text-center">
            <component :is="post.icon" size="48" class="icon-3d-feature text-primary mx-auto" />
          </div>
          
          <div v-html="post.content"></div>
        </article>

        <div class="mt-12 text-center">
          <router-link 
            to="/blog" 
            class="inline-flex items-center text-primary hover:text-secondary transition-colors"
          >
            <ArrowLeftIcon class="w-4 h-4 mr-2" />
            Back to Blog
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { BrainCircuitIcon, ArrowLeftIcon } from 'lucide-vue-next'

const route = useRoute()
const post = ref({
  title: '',
  date: '',
  author: '',
  content: '',
  icon: BrainCircuitIcon
})

onMounted(() => {
  // Here you would typically fetch the blog post data based on route.params.slug
  // For now, using dummy data
  post.value = {
    title: "The Future of AI Development",
    date: "March 20, 2024",
    author: "John Doe",
    icon: BrainCircuitIcon,
    content: `
      <p>Artificial Intelligence (AI) continues to evolve at an unprecedented pace, reshaping industries and creating new possibilities across various sectors. In this comprehensive guide, we'll explore the latest developments in AI technology and their implications for businesses and society.</p>

      <h2>The Rise of Generative AI</h2>
      <p>Generative AI has emerged as one of the most transformative technologies in recent years. From creating art to writing code, these systems are pushing the boundaries of what's possible with machine learning.</p>

      <h2>Practical Applications</h2>
      <p>Industries across the board are finding innovative ways to implement AI solutions:</p>
      <ul>
        <li>Healthcare: Diagnostic assistance and drug discovery</li>
        <li>Finance: Risk assessment and fraud detection</li>
        <li>Manufacturing: Predictive maintenance and quality control</li>
        <li>Customer Service: Intelligent chatbots and personalization</li>
      </ul>

      <h2>Looking Ahead</h2>
      <p>As we look to the future, several key trends are emerging that will shape the development of AI technology. These include increased focus on ethical AI, better interpretability of AI systems, and more efficient training methods.</p>
    `
  }
})
</script>

<style scoped>
.icon-3d-container {
  perspective: 1000px;
}

.icon-3d-feature {
  transform-style: preserve-3d;
  animation: iconFloat 3s ease-in-out infinite;
}

@keyframes iconFloat {
  0%, 100% { transform: translateY(0) rotateY(0); }
  50% { transform: translateY(-10px) rotateY(180deg); }
}

.animate-fade-in {
  opacity: 0;
  animation: fadeIn 0.8s ease-out forwards;
}

.animation-delay-200 {
  animation-delay: 200ms;
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

:deep(.prose) {
  max-width: none;
}

:deep(.prose h2) {
  color: var(--color-secondary);
  margin-top: 2em;
}

:deep(.prose p) {
  color: #4a5568;
}

:deep(.prose ul) {
  color: #4a5568;
}
</style> 