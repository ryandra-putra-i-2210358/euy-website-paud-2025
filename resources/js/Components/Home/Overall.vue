<script setup>
import { ref, onMounted } from 'vue'

const stats = [
  { label: 'Siswa', value: 90, suffix: '+', color: 'text-emerald-600' },
  { label: 'Guru', value: 80, suffix: '+', color: 'text-blue-600' },
  { label: 'Mata Pelajaran', value: 24, suffix: '', color: 'text-purple-600' },
  { label: 'Siswa Baru', value: 30, suffix: '+', color: 'text-orange-600' },
]

// nilai animasi
const animatedValues = ref(stats.map(() => 0))

const animateCount = (index, target) => {
  let current = Math.floor(Math.random() * 10)
  const increment = Math.ceil(target / 40)

  const interval = setInterval(() => {
    current += increment
    if (current >= target) {
      current = target
      clearInterval(interval)
    }
    animatedValues.value[index] = current
  }, 70)
}

onMounted(() => {
  stats.forEach((item, index) => {
    animateCount(index, item.value)
  })
})
</script>


<template>
  <section class="relative bg-white mt-[100px] z-10 py-10">
    <div class="max-w-7xl mx-auto px-4">

      <!-- Header -->
      <h2
        class="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-10"
        data-aos="fade-down"
      >
        Akumulasi PAUD
      </h2>

      <!-- Stats -->
      <div
        class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        data-aos="fade-up"
      >
        <div
          v-for="(item, i) in stats"
          :key="i"
          class="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-5 text-center"
        >
          <h3
            class="text-3xl md:text-4xl font-bold transition-all duration-300"
            :class="item.color"
          >
            {{ animatedValues[i] }}{{ item.suffix }}
          </h3>

          <p class="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-400">
            {{ item.label }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>
