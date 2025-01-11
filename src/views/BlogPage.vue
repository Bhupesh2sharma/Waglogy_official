<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-[40vh] flex items-center bg-gradient-to-br from-secondary to-primary overflow-hidden py-20">
      <div class="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center text-white">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Tech Insights & Updates
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in animation-delay-200">
            Stay informed about the latest developments in technology and innovation
          </p>
        </div>
      </div>
    </section>

    <!-- Blog Posts Grid -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(post, index) in blogPosts" 
            :key="index"
            class="blog-card"
          >
            <div class="blog-card-inner">
              <div class="icon-3d-container mb-6">
                <component :is="post.icon" size="32" class="icon-3d-feature text-primary" />
              </div>
              <h3 class="text-xl font-bold text-secondary mb-3">{{ post.title }}</h3>
              <p class="text-gray-600 mb-4">{{ post.excerpt }}</p>
              <div class="flex justify-between items-center mt-auto">
                <span class="text-sm text-gray-500">{{ post.date }}</span>
                <router-link 
                  :to="`/blog/${post.slug}`"
                  class="text-primary hover:text-secondary transition-colors font-semibold"
                >
                  Read More →
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { 
  CodeIcon, 
  CloudIcon,
  BrainCircuitIcon,
  ShieldCheckIcon,
  DatabaseIcon,
  GlobeIcon
} from 'lucide-vue-next'

const blogPosts = [
  {
    title: "The Future of AI Development",
    excerpt: "Exploring the latest trends and innovations in artificial intelligence and machine learning. Discover how AI is reshaping industries.",
    date: "March 20, 2024",
    slug: "future-of-ai-development",
    icon: BrainCircuitIcon
  },
  {
    title: "Cloud Computing Trends 2024",
    excerpt: "Understanding the evolving landscape of cloud technologies and their impact on modern business operations.",
    date: "March 18, 2024",
    slug: "cloud-computing-trends-2024",
    icon: CloudIcon
  },
  {
    title: "Web Development Best Practices",
    excerpt: "Essential guidelines for modern web development and performance optimization strategies.",
    date: "March 15, 2024",
    slug: "web-development-best-practices",
    icon: CodeIcon
  },
  {
    title: "Cybersecurity Essentials",
    excerpt: "Key strategies to protect your digital assets in an increasingly connected world.",
    date: "March 12, 2024",
    slug: "cybersecurity-essentials",
    icon: ShieldCheckIcon
  },
  {
    title: "Database Architecture",
    excerpt: "Modern approaches to designing scalable and efficient database systems for enterprise applications.",
    date: "March 10, 2024",
    slug: "database-architecture",
    icon: DatabaseIcon
  },
  {
    title: "Digital Transformation",
    excerpt: "Guiding businesses through successful digital transformation journeys in the modern era.",
    date: "March 8, 2024",
    slug: "digital-transformation",
    icon: GlobeIcon
  }
]
</script>

<style scoped>
.blog-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  height: 100%;
}

.blog-card:hover {
  transform: translateY(-10px);
}

.blog-card-inner {
  height: 100%;
  display: flex;
  flex-direction: column;
}

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
</style> 