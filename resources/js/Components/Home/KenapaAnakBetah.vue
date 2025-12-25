<script setup>
const reasons = [
  {
    icon: '🎨',
    title: 'Belajar Sambil Bermain',
    desc: 'Anak belajar tanpa merasa bosan.',
  },
  {
    icon: '👩‍🏫',
    title: 'Guru Penyayang',
    desc: 'Guru sabar dan dekat dengan anak.',
  },
  {
    icon: '🧸',
    title: 'Lingkungan Nyaman',
    desc: 'Ruang kelas aman dan ramah anak.',
  },
  {
    icon: '🌱',
    title: 'Latih Kemandirian',
    desc: 'Anak dibiasakan mandiri sejak dini.',
  },
]

// duplicate biar loop halus
const sliderItems = [...reasons, ...reasons]
</script>
<template>
  <section class="bg-white py-20 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4">

      <!-- Header -->
      <div class="text-center mb-12" data-aos="fade-down">
        <h2 class="text-3xl md:text-4xl font-bold text-blue-600">
          💙 Kenapa Anak Betah di Sini?
        </h2>
        <p class="mt-3 text-gray-600">
          Lingkungan yang membuat anak nyaman dan ceria
        </p>
      </div>

      <!-- Slider -->
      <div class="relative">
        <div class="flex gap-6 slider-track">
          <div
            v-for="(item, i) in sliderItems"
            :key="i"
            class="min-w-[240px] md:min-w-[260px]
                   bg-blue-50 rounded-2xl p-6 text-center
                   hover:bg-blue-100 transition-colors duration-300"
          >
            <div class="text-4xl mb-4">
              {{ item.icon }}
            </div>
            <h3 class="font-semibold text-gray-800">
              {{ item.title }}
            </h3>
            <p class="mt-2 text-sm text-gray-600">
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
<style scoped>
.slider-track {
  animation: scroll-left 10s linear infinite;
}

@keyframes scroll-left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

/* pause saat hover (opsional tapi bagus) */
.slider-track:hover {
  animation-play-state: paused;
}
</style>


