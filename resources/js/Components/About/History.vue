<script setup>
import AOS from "aos"
import "aos/dist/aos.css"
import { onMounted } from "vue"

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-out-cubic",
  })
})
</script>

<template>
  <section
    class="relative py-28 px-6 bg-gradient-to-b from-sky-200 via-blue-100 to-white overflow-hidden"
  >
    <!-- ORNAMEN BULAT -->
    <div class="absolute -top-20 -left-20 w-72 h-72 bg-blue-300 rounded-full opacity-30"></div>
    <div class="absolute bottom-0 -right-20 w-96 h-96 bg-sky-300 rounded-full opacity-30"></div>

    <!-- JUDUL -->
    <div class="text-center mb-16 relative z-10">
      <h1
        class="font-extrabold text-4xl md:text-5xl text-blue-700 mb-4"
        data-aos="fade-down"
      >
        Sejarah Singkat Sekolah Kami
      </h1>
      <p class="text-lg text-blue-600 max-w-2xl mx-auto">
        Tempat tumbuh kembang anak dengan cinta, keceriaan, dan pendidikan terbaik sejak dini
      </p>
    </div>

    <!-- KONTEN -->
    <div
      class="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center"
    >
      <!-- TEXT -->
      <div
        class="bg-white rounded-[2.5rem] shadow-xl p-10 md:p-14"
        data-aos="fade-right"
      >
        <p class="text-gray-700 leading-relaxed text-lg text-justify">
          Sekolah kami berdiri dengan niat mulia untuk mendampingi tumbuh
          kembang anak sejak usia dini. Kami percaya bahwa setiap anak adalah
          anugerah istimewa yang perlu dibimbing dengan penuh kasih sayang,
          keceriaan, dan nilai-nilai kebaikan.
        </p>

        <p class="text-gray-700 leading-relaxed text-lg mt-6 text-justify">
          Melalui pembelajaran yang menyenangkan, interaktif, dan sesuai
          dengan dunia anak, guru-guru kami membantu anak tumbuh menjadi
          pribadi yang mandiri, berakhlak baik, percaya diri, serta mencintai
          ilmu sejak kecil.
        </p>

        <!-- Highlight -->
        <div class="mt-8 bg-sky-100 p-6 rounded-2xl border-l-8 border-sky-400">
          <p class="text-sky-700 font-semibold text-lg">
            🌈 Belajar sambil bermain, tumbuh dengan bahagia
          </p>
        </div>
      </div>

      <!-- IMAGE -->
      <div
        class="flex justify-center relative"
        data-aos="zoom-in"
      >
        <div class="absolute -top-6 -left-6 w-full h-full bg-blue-200 rounded-[2.5rem]"></div>

        <img
          src="images/tahfidz.jpeg"
          alt="Kegiatan Anak"
          class="relative w-full max-w-lg rounded-[2.5rem] shadow-2xl object-cover"
        />
      </div>
    </div>
  </section>
</template>
