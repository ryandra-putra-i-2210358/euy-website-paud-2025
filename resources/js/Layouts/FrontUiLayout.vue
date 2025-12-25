<script setup>
import Navbar from '@/Components/FrontComponent/Navbar.vue';
import Footer from '@/Components/FrontComponent/Footer.vue';
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950">
 

    <!-- Navbar -->
    <Navbar />

    <!-- Content -->
    <main class="pt-16">
      <slot />
    </main>

    <!-- Footer (opsional) -->
    <Footer />
  </div>
</template>
