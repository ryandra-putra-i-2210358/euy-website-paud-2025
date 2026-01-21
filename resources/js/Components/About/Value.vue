<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
  })
})

const nilaiSekolah = [
  {
    icon: '💖',
    title: 'Kasih Sayang',
    desc: 'Mendidik anak dengan cinta, kesabaran, dan perhatian penuh.',
  },
  {
    icon: '🌈',
    title: 'Keceriaan',
    desc: 'Lingkungan belajar yang menyenangkan dan penuh senyum.',
  },
  {
    icon: '📚',
    title: 'Pembelajaran Aktif',
    desc: 'Belajar sambil bermain agar anak mudah memahami.',
  },
  {
    icon: '🤲',
    title: 'Akhlak & Adab',
    desc: 'Menanamkan sopan santun dan nilai agama sejak dini.',
  },
]
</script>

<template>
  <section class="py-16 px-4 bg-blue-50">
    <!-- Judul -->
    <div class="text-center mb-12">
      <h2
        class="text-3xl md:text-4xl font-bold text-blue-600"
        data-aos="fade-down"
      >
        Nilai Utama Sekolah Kami
      </h2>
      <p
        class="text-gray-500 mt-3 text-sm md:text-base"
        data-aos="fade-up"
      >
        Pondasi utama dalam mendampingi tumbuh kembang anak 🌱
      </p>
    </div>

    <!-- Card -->
    <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <div
        v-for="(item, index) in nilaiSekolah"
        :key="index"
        class="bg-white rounded-2xl p-6 shadow-md text-center hover:-translate-y-2 transition"
        data-aos="zoom-in"
      >
        <!-- Icon -->
        <div class="text-5xl mb-4">
          {{ item.icon }}
        </div>

        <!-- Title -->
        <h3 class="font-semibold text-lg text-blue-600 mb-2">
          {{ item.title }}
        </h3>

        <!-- Desc -->
        <p class="text-gray-500 text-sm leading-relaxed">
          {{ item.desc }}
        </p>
      </div>
    </div>
  </section>
</template>
