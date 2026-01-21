<script setup>
import { onMounted } from "vue"
import AOS from "aos"
import "aos/dist/aos.css"
import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/vue/24/solid"

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-out-cubic",
  })
})

const kontak = {
  namaSekolah: "PAUD Ceria Islami",
  alamat: "Jl. Pendidikan No. 12, Cibinong, Bogor",
  telp: "6281234567890",
  email: "info@paudceria.sch.id",
  jam: "Senin - Jumat, 07.30 - 11.00",
  maps:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x0:0x0",
}
</script>

<template>
  <section
    class="relative py-28 px-6 bg-gradient-to-b from-sky-200 via-blue-100 to-white overflow-hidden"
  >
    <!-- ORNAMEN -->
    <div class="absolute -top-20 -left-20 w-72 h-72 bg-blue-300 rounded-full opacity-30"></div>
    <div class="absolute bottom-0 -right-20 w-96 h-96 bg-sky-300 rounded-full opacity-30"></div>

    <!-- JUDUL -->
    <div class="text-center mb-16 relative z-10">
      <h1
        class="font-extrabold text-4xl md:text-5xl text-blue-700 mb-4"
        data-aos="fade-down"
      >
        Hubungi Kami
      </h1>
      <p class="text-lg text-blue-600 max-w-2xl mx-auto" data-aos="fade-up">
        Kami siap membantu Ayah & Bunda mendapatkan informasi terbaik 🌈
      </p>
    </div>

    <!-- KONTEN -->
    <div
      class="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-stretch"
    >
      <!-- INFO KONTAK -->
      <div
        class="bg-white rounded-[2.5rem] shadow-xl p-10 md:p-14 space-y-6"
        data-aos="fade-right"
      >
        <h2 class="text-2xl font-bold text-blue-700 mb-4">
          {{ kontak.namaSekolah }}
        </h2>

        <div class="flex items-start gap-4">
          <MapPinIcon class="w-8 h-8 text-sky-500" />
          <p class="text-gray-700 text-lg">
            {{ kontak.alamat }}
          </p>
        </div>

        <div class="flex items-start gap-4">
          <PhoneIcon class="w-8 h-8 text-green-500" />
          <p class="text-gray-700 text-lg">
            <a
              :href="`https://wa.me/${kontak.telp}`"
              class="font-semibold hover:underline"
              target="_blank"
            >
              +{{ kontak.telp }}
            </a>
          </p>
        </div>

        <div class="flex items-start gap-4">
          <EnvelopeIcon class="w-8 h-8 text-blue-500" />
          <p class="text-gray-700 text-lg">
            {{ kontak.email }}
          </p>
        </div>

        <div class="flex items-start gap-4">
          <ClockIcon class="w-8 h-8 text-orange-500" />
          <p class="text-gray-700 text-lg">
            {{ kontak.jam }}
          </p>
        </div>

        <!-- CTA -->
        <div class="pt-6">
          <a
            :href="`https://wa.me/${kontak.telp}`"
            target="_blank"
            class="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600
                   text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg transition"
          >
            💬 Chat WhatsApp
          </a>
        </div>
      </div>

      <!-- MAP -->
      <div
        class="rounded-[2.5rem] overflow-hidden shadow-xl"
        data-aos="fade-left"
      >
        <iframe
          :src="kontak.maps"
          class="w-full h-full min-h-[420px]"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
</template>
