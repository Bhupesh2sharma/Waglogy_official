<template>
    <div>
      <!-- Hero Section -->
      <section class="relative py-20 bg-gradient-to-br from-secondary to-primary">
        <div class="container relative z-10">
          <div class="max-w-3xl mx-auto text-center text-white">
            <h1 class="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Get in Touch
            </h1>
            <p class="text-xl text-gray-200 mb-8 animate-fade-in animation-delay-200">
              Let's discuss how we can help your business grow
            </p>
          </div>
        </div>
      </section>
  
      <!-- Contact Section -->
      <section class="section bg-white">
        <div class="container">
          <div class="grid lg:grid-cols-2 gap-12">
            <!-- Contact Form -->
            <div class="bg-white p-8 rounded-xl shadow-lg">
              <h2 class="text-2xl font-bold text-secondary mb-6">Send us a Message</h2>
              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div class="space-y-2">
                  <label for="name" class="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    :disabled="isSubmitting"
                  />
                </div>
  
                <div class="space-y-2">
                  <label for="email" class="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    :disabled="isSubmitting"
                  />
                </div>
  
                <div class="space-y-2">
                  <label for="subject" class="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    id="subject"
                    v-model="form.subject"
                    type="text"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    :disabled="isSubmitting"
                  />
                </div>
  
                <div class="space-y-2">
                  <label for="message" class="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    rows="5"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    :disabled="isSubmitting"
                  ></textarea>
                </div>
  
                <button
                  type="submit"
                  class="btn btn-primary w-full"
                  :disabled="isSubmitting"
                >
                  <span v-if="isSubmitting">Sending...</span>
                  <span v-else>Send Message</span>
                </button>
              </form>
            </div>
  
            <!-- Contact Information -->
            <div class="space-y-8">
              <div class="bg-white p-8 rounded-xl shadow-lg">
                <h2 class="text-2xl font-bold text-secondary mb-6">Contact Information</h2>
                <div class="space-y-6">
                  <div class="flex items-start space-x-4">
                    <MapPinIcon class="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 class="font-semibold text-secondary">Address</h3>
                      <p class="text-gray-600">737101 Gangtok, Sikkim,India</p>
                    </div>
                  </div>
  
                  <div class="flex items-start space-x-4">
                    <PhoneIcon class="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 class="font-semibold text-secondary">Phone</h3>
                      <p class="text-gray-600">+91 9733814168</p>
                    </div>
                  </div>
  
                  <div class="flex items-start space-x-4">
                    <MailIcon class="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 class="font-semibold text-secondary">Email</h3>
                      <p class="text-gray-600">contact@waglogy.in</p>
                    </div>
                  </div>
                </div>
              </div>
  
              <!-- Social Media -->
              <div class="bg-white p-8 rounded-xl shadow-lg">
                <h2 class="text-2xl font-bold text-secondary mb-6">Connect With Us</h2>
                <div class="flex space-x-4">
                  <a
                    v-for="social in socials"
                    :key="social.name"
                    :href="social.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="p-3 bg-gray-100 rounded-lg hover:bg-primary hover:text-white transition-colors"
                  >
                    <component :is="social.icon" class="h-6 w-6" />
                  </a>
                </div>
              </div>
  
              <!-- Map -->
              <div class="bg-white p-8 rounded-xl shadow-lg">
                <h2 class="text-2xl font-bold text-secondary mb-6">Location</h2>
                <div class="h-64 bg-gray-100 rounded-lg">
                  <!-- Add your map component here -->
                  <div class="w-full h-full rounded-lg bg-gray-200 flex items-center justify-center">
                    <MapIcon class="h-12 w-12 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { 
    MapPinIcon, 
    PhoneIcon, 
    MailIcon,
    MapIcon,
    LinkedinIcon,
    TwitterIcon,
    GithubIcon,
    InstagramIcon
  } from 'lucide-vue-next'
  
  const isSubmitting = ref(false)
  const form = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const socials = [
    { name: 'LinkedIn', icon: LinkedinIcon, url: 'https://in.linkedin.com/company/waglogy' },
    { name: 'Twitter', icon: TwitterIcon, url: 'https://github.com/Waglogy' },
    { name: 'GitHub', icon: GithubIcon, url: 'https://github.com/Waglogy' },
    { name: 'Instagram', icon: InstagramIcon, url: 'https://www.instagram.com/waglogy/' }
  ]
  
  const handleSubmit = () => {
    isSubmitting.value = true
    try {
      // Create the message
      const message = `Hello, I am ${form.value.name}.\n\n` +
                      `Subject: ${form.value.subject}\n` +
                      `Email: ${form.value.email}\n` +
                      `Message: ${form.value.message}`
  
      // Encode the message for the URL
      const encodedMessage = encodeURIComponent(message)
  
      // WhatsApp number
      const whatsappNumber = '9733814168'
  
      // Create the WhatsApp link
      const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
  
      // Open the WhatsApp link
      window.open(whatsappLink, '_blank')
  
      // Reset the form
      form.value = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    } catch (error) {
      alert('Failed to send message. Please try again.')
    } finally {
      isSubmitting.value = false
    }
  }
  </script>
  
  
  <style scoped>
  .contact-info-item {
    @apply flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 hover:bg-gray-50;
  }
  
  .social-icon {
    @apply p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-colors;
  }
  </style>