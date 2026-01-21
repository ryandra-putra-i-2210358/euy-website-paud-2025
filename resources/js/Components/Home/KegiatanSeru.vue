<script setup>
const activities = [
  {
    title: 'Mewarnai Ceria 🎨',
    desc: 'Melatih kreativitas dan motorik halus anak.',
    image: '/images/tahfidz.jpeg',
    aos: 'fade-up',
  },
  {
    title: 'Bermain Bersama 🧸',
    desc: 'Belajar berbagi dan bersosialisasi.',
    image: '/images/tahfidz.jpeg',
    aos: 'zoom-in',
  },
  {
    title: 'Mengaji & Berdoa 📖',
    desc: 'Membentuk karakter sejak dini.',
    image: '/images/tahfidz.jpeg',
    aos: 'fade-up',
  },
]
</script>
<template>
  <section class="relative py-24 px-6 bg-gradient-to-b from-sky-200 via-blue-100 to-white overflow-hidden">

     <div class="absolute -top-50 -left-50 w-72 h-72 bg-blue-300 rounded-full opacity-30"></div>
    <div class="absolute bottom-20 -right-10 w-96 h-96 bg-sky-500 rounded-full opacity-30"></div>
    <div class="max-w-7xl mx-auto px-4">

      <!-- Header -->
      <div class="text-center mb-14" data-aos="fade-down">
        <h2 class="text-3xl md:text-4xl font-bold text-blue-600">
          🌈 Kegiatan Seru Anak
        </h2>
        <p class="mt-3 text-gray-600 max-w-xl mx-auto">
          Belajar sambil bermain agar anak senang dan berkembang
        </p>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(item, i) in activities"
          :key="i"
          class="bg-white rounded-3xl shadow-lg overflow-hidden
                 hover:-translate-y-2 hover:shadow-xl
                 transition-all duration-300"
          :data-aos="item.aos"
          :data-aos-delay="i * 150"
        >
          <!-- Image -->
          <div class="h-52 overflow-hidden">
            <img
              :src="item.image"
              alt="kegiatan"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Content -->
          <div class="p-6 text-center">
            <h3 class="text-xl font-bold text-gray-800">
              {{ item.title }}
            </h3>
            <p class="mt-2 text-gray-600 text-sm">
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
