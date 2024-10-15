<template>
    <div class="flex flex-col items-center justify-center h-screen bg-gray-800 text-white text-center">
      <h1 class="text-5xl font-bold mb-6">{{ error.statusCode === 404 ? '404 Page Not Found' : 'An Error Occurred' }}</h1>
      <p class="text-lg mb-6">{{ error.message || 'Sorry, something went wrong.' }}</p>
      <NuxtLink to="/" class="text-lg bg-purple-600 py-2 px-6 rounded-lg hover:bg-purple-700 transition-all">
        Go Back Home
      </NuxtLink>
    </div>
  </template>
  
  <script setup>
  const error = defineProps(['error']);
  </script>
  
  <style scoped>
  h1 {
    color: #7c00fe;
  }
  </style>
  