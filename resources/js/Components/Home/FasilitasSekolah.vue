<script setup>
const fasilitas = [
  {
    icon: '🎠',
    title: 'Ayunan Ceria',
    desc: 'Melatih keseimbangan dan keberanian anak.',
  },
  {
    icon: '🛝',
    title: 'Perosotan Aman',
    desc: 'Bermain sambil melatih motorik kasar.',
  },
  {
    icon: '🧸',
    title: 'Mainan Edukatif',
    desc: 'Mainan yang mendukung kreativitas anak.',
  },
  {
    icon: '📚',
    title: 'Buku & Komik Islami',
    desc: 'Menanamkan nilai islami sejak dini.',
  },
]
</script>
<template>
  <section class="bg-blue-50 py-20">
    <div class="max-w-7xl mx-auto px-4">

      <!-- Header -->
      <div class="text-center mb-14" data-aos="fade-down">
        <h2 class="text-3xl md:text-4xl font-bold text-blue-600">
          💙 Fasilitas Seru & Aman
        </h2>
        <p class="mt-3 text-gray-600 max-w-xl mx-auto">
          Kami menyediakan fasilitas terbaik agar anak belajar dengan nyaman dan ceria
        </p>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div
          v-for="(item, i) in fasilitas"
          :key="i"
          class="bg-white rounded-3xl p-6 text-center shadow-md
                 hover:shadow-lg hover:-translate-y-1
                 transition-all duration-300"
          data-aos="fade-up"
          :data-aos-delay="i * 120"
        >
          <!-- Icon -->
          <div class="text-5xl mb-4">
            {{ item.icon }}
          </div>

          <!-- Title -->
          <h3 class="font-semibold text-gray-800">
            {{ item.title }}
          </h3>

          <!-- Desc -->
          <p class="mt-2 text-sm text-gray-600">
            {{ item.desc }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>
