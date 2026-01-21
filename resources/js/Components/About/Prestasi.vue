<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({
    duration: 1000,
    easing: 'ease-out-cubic',
    once: true,
  })
})

const prestasiList = [
  {
    id: 1,
    title: 'Juara Mewarnai',
    desc: 'Lomba tingkat kecamatan',
    image: 'images/prestasi1.jpg',
  },
  {
    id: 2,
    title: 'Hafalan Terbaik',
    desc: 'Tahfidz Juz Amma',
    image: 'images/prestasi2.jpg',
  },
  {
    id: 3,
    title: 'Tari Kreasi Anak',
    desc: 'Festival Anak Ceria',
    image: 'images/prestasi3.jpg',
  },
  {
    id: 4,
    title: 'Lomba Ketangkasan',
    desc: 'Pentas Akhir Tahun',
    image: 'images/prestasi4.jpg',
  },
]
</script>

<template>
  <section
    class="relative py-24 px-6 bg-gradient-to-t from-sky-200 via-blue-100 to-white overflow-hidden"
  >
    <!-- ORNAMEN -->
    <div class="absolute -top-20 -left-20 w-72 h-72 bg-blue-300 rounded-full opacity-30"></div>
    <div class="absolute top-32 -right-24 w-96 h-96 bg-sky-300 rounded-full opacity-30"></div>

    <!-- JUDUL -->
    <div class="text-center mb-14 relative z-10">
      <h1
        class="font-extrabold text-4xl md:text-5xl text-blue-700 mb-4"
        data-aos="fade-down"
      >
        Prestasi Anak Didik
      </h1>
      <p
        class="text-lg text-blue-600 max-w-2xl mx-auto"
        data-aos="fade-up"
      >
        Setiap anak adalah juara dengan bakat dan keunikannya masing-masing 🌈
      </p>
    </div>

    <!-- SCROLL CARD -->
    <div
      class="relative z-10 flex gap-8 overflow-x-auto pb-10 snap-x snap-mandatory scrollbar-hide"
      data-aos="fade-left"
    >
      <div
        v-for="item in prestasiList"
        :key="item.id"
        class="min-w-[300px] max-w-[300px] bg-white rounded-[2.5rem] shadow-xl snap-center
               hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
      >
        <!-- FOTO -->
        <div class="relative">
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full h-52 object-cover rounded-t-[2.5rem]"
          />
          <div
            class="absolute top-4 right-4 bg-sky-500 text-white text-xs px-3 py-1 rounded-full"
          >
            ⭐ Prestasi
          </div>
        </div>

        <!-- KONTEN -->
        <div class="p-6 text-center">
          <h3 class="font-bold text-blue-700 text-xl mb-1">
            {{ item.title }}
          </h3>
          <p class="text-gray-600 text-sm">
            {{ item.desc }}
          </p>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="text-center mt-16 relative z-10">
      <p class="text-blue-700 font-semibold text-lg mb-4">
        🌟 Masih banyak prestasi seru lainnya!
      </p>
      <button
        class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition"
      >
        Lihat Semua Prestasi
      </button>
    </div>
  </section>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
