<script setup>
import { ref, onMounted } from 'vue'

const slides = ref([
  {
    title: 'Belajar Lebih Cepat',
    desc: 'Sistem modern, ringan, dan responsif.',
    image: '/images/tahfidz.jpeg',
  },
  {
    title: 'Laravel + Vue',
    desc: 'Kombinasi powerful untuk web masa kini.',
    image: '/images/tahfidz.jpeg',
  },
  {
    title: 'Mobile Friendly',
    desc: 'Tampilan optimal di semua device.',
    image: '/images/tahfidz.jpeg',
  },
])

const active = ref(0)

onMounted(() => {
  setInterval(() => {
    active.value = (active.value + 1) % slides.value.length
  }, 4000)
})
</script>

<template>
  <section class="relative w-full h-[700px] overflow-hidden">
    <transition-group name="fade-slide" tag="div">
      <div
        v-for="(slide, index) in slides"
        v-show="index === active"
        :key="index"
        class="absolute inset-0"
      >
        <!-- Background Image -->
        <div
          class="absolute inset-0 bg-center bg-cover"
          :style="{ backgroundImage: `url(${slide.image})` }"
        ></div>

        <!-- Overlay gelap -->
        <div class="absolute inset-0 bg-black/50"></div>

        <!-- Content -->
        <div
          class="relative z-10 flex items-center justify-center h-full text-center px-6"
        >
          <div data-aos="fade-up">
            <h2 class="text-4xl md:text-5xl font-bold text-white">
              {{ slide.title }}
            </h2>

            <p class="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              {{ slide.desc }}
            </p>
          </div>
        </div>
      </div>
    </transition-group>

    <!-- Indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
      <button
        v-for="(_, i) in slides"
        :key="i"
        @click="active = i"
        class="h-2 rounded-full transition-all"
        :class="active === i ? 'w-6 bg-blue-500' : 'w-2 bg-white/50'"
      />
    </div>
  </section>
</template>


<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.6s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
