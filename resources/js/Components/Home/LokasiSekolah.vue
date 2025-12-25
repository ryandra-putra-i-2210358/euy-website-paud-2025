<script setup>
</script>
<template>
  <section class="bg-white py-20">
    <div class="max-w-7xl mx-auto px-4">

      <!-- Header -->
      <div class="text-center mb-12" data-aos="fade-down">
        <h2 class="text-3xl md:text-4xl font-bold text-blue-600">
          📍 Lokasi Sekolah Kami
        </h2>
        <p class="mt-3 text-gray-600 max-w-xl mx-auto">
          Mudah dijangkau dan berada di lingkungan yang aman dan nyaman
        </p>
      </div>

      <!-- Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        <!-- Map -->
        <div
          class="w-full h-[320px] rounded-3xl overflow-hidden shadow-md"
          data-aos="fade-right"
        >
          <iframe
            class="w-full h-full border-0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Cibinong,Bogor&output=embed"
          ></iframe>
        </div>

        <!-- Info -->
        <div data-aos="fade-left">
          <div class="bg-blue-50 rounded-3xl p-8 shadow-sm">
            <h3 class="text-xl font-bold text-gray-800 mb-4">
              🏫 PAUD & TK Islami
            </h3>

            <ul class="space-y-3 text-gray-700 text-sm">
              <li>📌 Cibinong, Kabupaten Bogor</li>
              <li>🛣️ Akses mudah dari jalan utama</li>
              <li>🅿️ Area aman & nyaman</li>
              <li>🕌 Lingkungan islami</li>
            </ul>

            <div class="mt-6">
              <a
                href="https://www.google.com/maps?q=Cibinong,Bogor"
                target="_blank"
                class="inline-block bg-blue-600 text-white px-6 py-3 rounded-full
                       hover:bg-blue-700 transition"
              >
                📍 Buka di Google Maps
              </a>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
