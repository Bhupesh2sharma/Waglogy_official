<template>
  <div v-if="post">
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
import { useRoute, useRouter } from 'vue-router'
import { ArrowLeftIcon } from 'lucide-vue-next'
import { blogPosts } from '../data/blogPosts'

const route = useRoute()
const router = useRouter()
const post = ref(null)

onMounted(() => {
  const currentPost = blogPosts.find(p => p.slug === route.params.slug)
  
  if (!currentPost) {
    // Handle 404 - post not found
    router.push('/blog')
    return
  }
  
  post.value = currentPost
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