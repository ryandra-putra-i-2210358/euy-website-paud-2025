<script setup>
import { onMounted, reactive } from "vue"
import AOS from "aos"
import "aos/dist/aos.css"

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-out-cubic",
  })
})

const form = reactive({
  nama_anak: "",
  usia: "",
  nama_ortu: "",
  no_hp: "",
  alamat: "",
})
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
        Pendaftaran Siswa Baru
      </h1>
      <p
        class="text-lg text-blue-600 max-w-2xl mx-auto"
        data-aos="fade-up"
      >
        Yuk Ayah & Bunda, daftarkan ananda tercinta sekarang juga 🌈🧸
      </p>
    </div>

    <!-- FORM -->
    <div
      class="relative z-10 max-w-4xl mx-auto bg-white rounded-[3rem] shadow-2xl p-10 md:p-16"
      data-aos="zoom-in"
    >
      <form class="grid md:grid-cols-2 gap-8">
        <!-- Nama Anak -->
        <div>
          <label class="block text-blue-700 font-semibold mb-2">
            👶 Nama Lengkap Anak
          </label>
          <input
            v-model="form.nama_anak"
            type="text"
            placeholder="Contoh: Aisyah Zahra"
            class="w-full px-5 py-4 rounded-2xl border border-blue-200 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <!-- Usia -->
        <div>
          <label class="block text-blue-700 font-semibold mb-2">
            🎂 Usia Anak
          </label>
          <input
            v-model="form.usia"
            type="number"
            placeholder="Contoh: 4"
            class="w-full px-5 py-4 rounded-2xl border border-blue-200 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <!-- Nama Orang Tua -->
        <div>
          <label class="block text-blue-700 font-semibold mb-2">
            👨‍👩‍👧 Nama Orang Tua
          </label>
          <input
            v-model="form.nama_ortu"
            type="text"
            placeholder="Nama Ayah / Bunda"
            class="w-full px-5 py-4 rounded-2xl border border-blue-200 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <!-- No HP -->
        <div>
          <label class="block text-blue-700 font-semibold mb-2">
            📱 Nomor WhatsApp
          </label>
          <input
            v-model="form.no_hp"
            type="text"
            placeholder="08xxxxxxxxxx"
            class="w-full px-5 py-4 rounded-2xl border border-blue-200 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <!-- Alamat -->
        <div class="md:col-span-2">
          <label class="block text-blue-700 font-semibold mb-2">
            🏡 Alamat Rumah
          </label>
          <textarea
            v-model="form.alamat"
            rows="3"
            placeholder="Alamat lengkap tempat tinggal"
            class="w-full px-5 py-4 rounded-2xl border border-blue-200 focus:ring-2 focus:ring-blue-400 outline-none"
          ></textarea>
        </div>

        <!-- BUTTON -->
        <div class="md:col-span-2 text-center mt-6">
          <button
            type="button"
            class="bg-blue-600 hover:bg-blue-700 text-white px-14 py-5 rounded-full
                   text-xl font-bold shadow-xl transition"
          >
            🌟 Daftar Sekarang
          </button>

          <p class="text-sm text-gray-500 mt-4">
            Admin kami akan menghubungi Ayah & Bunda via WhatsApp 😊
          </p>
        </div>
      </form>
    </div>
  </section>
</template>
