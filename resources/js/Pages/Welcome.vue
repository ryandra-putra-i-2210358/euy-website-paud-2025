<script setup>
import { Head } from '@inertiajs/vue3';
import FrontUiLayout from '@/Layouts/FrontUiLayout.vue';
import Slider from '@/Components/Home/Slider.vue';
import Overall from '@/Components/Home/Overall.vue';
import KegiatanSeru from '@/Components/Home/KegiatanSeru.vue';
import KenapaAnakBetah from '@/Components/Home/KenapaAnakBetah.vue';
import FasilitasSekolah from '@/Components/Home/FasilitasSekolah.vue';
import LokasiSekolah from '@/Components/Home/LokasiSekolah.vue';
import AjakanDaftar from '@/Components/Home/AjakanDaftar.vue';


</script>
<template>
    <Head title="PAUD Taam"/>
    <FrontUiLayout>
        <Slider />
        <Overall />
        <KegiatanSeru />
        <KenapaAnakBetah />
        <FasilitasSekolah />
        <LokasiSekolah />
        <AjakanDaftar />



    </FrontUiLayout>



</template>