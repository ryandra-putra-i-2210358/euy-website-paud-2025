<script setup>
import { Link, usePage } from '@inertiajs/vue3'
import { ref } from 'vue'

const menuOpen = ref(false)
const { props } = usePage()
const user = props.auth?.user
</script>

<template>
  <nav class="fixed top-0 left-0 w-full bg-blue-200 dark:bg-gray-900  border-gray-200 dark:border-gray-700 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">

        <!-- Logo -->
        <Link href="/" class="flex items-center gap-2">
            <img
                src="/images/paud.png"
                alt="Logo"
                class="h-10 w-10 object-contain"
            />
            <span class="text-xl font-bold text-blue-600">
                PAUD TAAM
            </span>
        </Link>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-6">
          <Link href="/" class="nav-link">Home</Link>
          <Link href="/about" class="nav-link">About</Link>
          <Link href="/contact" class="nav-link">Contact</Link>
          <Link href="/daftar" class="nav-link">Daftar</Link>

          <template v-if="user">
            <Link href="/dashboard" class="nav-link font-semibold">
              Dashboard
            </Link>
          </template>

          <!-- <template v-else>
            <Link href="/login" class="btn-outline">Login</Link>
            <Link href="/register" class="btn-primary">Register</Link>
          </template> -->
        </div>

        <!-- Mobile Button -->
        <button
          class="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
          @click="menuOpen = !menuOpen"
        >
          ☰
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-show="menuOpen" class="md:hidden bg-white dark:bg-gray-900 border-t">
      <div class="px-4 py-3 space-y-2">
        <Link href="/" class="mobile-link">Home</Link>
        <Link href="/about" class="mobile-link">About</Link>
        <Link href="/contact" class="mobile-link">Contact</Link>
        <Link href="/daftar" class="mobile-link">Daftar</Link>

        <template v-if="user">
          <Link href="/dashboard" class="mobile-link font-semibold">
            Dashboard
          </Link>
        </template>

        <template v-else>
          <Link href="/login" class="mobile-link">Login</Link>
          <!-- <Link href="/register" class="mobile-link">Register</Link> -->
        </template>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-link {
  @apply text-gray-700 dark:text-gray-200 hover:text-blue-600 transition;
}

.btn-primary {
  @apply px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition;
}

.btn-outline {
  @apply px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition;
}

.mobile-link {
  @apply block py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600;
}
</style>
