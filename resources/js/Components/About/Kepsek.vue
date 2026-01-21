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

const kepsek = {
  nama: "Nama Kepala Sekolah",
  jabatan: "Kepala Sekolah PAUD",
  foto: "/images/kepsek.jpg", // ganti sesuai foto
  visi:
    "Mewujudkan generasi anak usia dini yang ceria, berakhlak mulia, kreatif, dan siap menghadapi masa depan.",
  misi: [
    "Menanamkan nilai akhlak dan karakter islami sejak dini",
    "Menyediakan lingkungan belajar yang aman, nyaman, dan menyenangkan",
    "Mengembangkan kreativitas, motorik, dan kecerdasan anak",
    "Menjalin kerja sama harmonis dengan orang tua dan masyarakat",
  ],
}
</script>

<template>
  <section
    class="relative bg-gradient-to-b from-sky-200 to-sky-100 py-24 px-6"
  >
    <div
      class="max-w-7xl mx-auto bg-white rounded-[3rem] shadow-xl overflow-hidden min-h-[520px]"
    >
      <div class="flex flex-col lg:flex-row h-full">
        <!-- KIRI: VISI & MISI -->
        <div
          class="lg:w-2/3 p-12 flex flex-col justify-center"
          data-aos="fade-right"
        >
          <h2 class="text-4xl font-bold text-sky-700 mb-6">
            Profil Kepala Sekolah
          </h2>

          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-sky-600 mb-3">
              Visi
            </h3>
            <p class="text-gray-700 text-lg leading-relaxed">
              {{ kepsek.visi }}
            </p>
          </div>

          <div>
            <h3 class="text-2xl font-semibold text-sky-600 mb-3">
              Misi
            </h3>
            <ul class="space-y-3 text-gray-700 text-lg">
              <li
                v-for="(item, index) in kepsek.misi"
                :key="index"
                class="flex items-start gap-3"
              >
                <span class="text-sky-500 text-xl">✔</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- KANAN: FOTO -->
        <div
          class="lg:w-1/3 flex flex-col items-center justify-center p-12"
          data-aos="fade-left"
        >
          <img
            :src="kepsek.foto"
            alt="Kepala Sekolah"
            class="w-64 h-64 object-cover rounded-full border-8 border-white shadow-lg mb-6"
          />

          <h4 class="text-2xl font-bold text-sky-900 text-center">
            {{ kepsek.nama }}
          </h4>
          <p class="text-sky-800 text-lg mt-1 text-center">
            {{ kepsek.jabatan }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
