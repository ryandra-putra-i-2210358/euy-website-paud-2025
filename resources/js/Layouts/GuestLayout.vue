<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue'
import { Link } from '@inertiajs/vue3'
</script>

<template>
  <div
    class="relative min-h-screen overflow-hidden flex items-center justify-center
           bg-gradient-to-b from-sky-200 via-blue-100 to-white
           px-4 sm:px-6 lg:px-8"
  >
    <!-- Background Decorative Blur -->
    <div
        class="absolute -top-24 -left-24
                w-64 h-64 sm:w-80 sm:h-80
                bg-blue-300 rounded-full
                opacity-30 blur-3xl"
        />

        <div
        class="absolute -bottom-24 -right-24
                w-72 h-72 sm:w-96 sm:h-96
                bg-sky-300 rounded-full
                opacity-30 blur-3xl"
        />
    <!-- Card -->
    <div
      class="relative w-full max-w-sm sm:max-w-md lg:max-w-lg
             bg-white/30 backdrop-blur-xl
             rounded-2xl shadow-2xl
             px-6 sm:px-8 lg:px-10
             py-6 sm:py-8
             border border-white/50"
    >
      <!-- Logo -->
      <Link href="/" class="flex justify-center mb-6 sm:mb-8">
        <ApplicationLogo
          class="w-12 h-12 sm:w-14 sm:h-14 text-sky-600"
        />
      </Link>

      <!-- Content -->
      <slot />
    </div>
  </div>
</template>
