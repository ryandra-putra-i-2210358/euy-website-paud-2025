<script setup>
import { Head } from '@inertiajs/vue3';
import FrontUiLayout from '@/Layouts/FrontUiLayout.vue';
import History from '@/Components/About/History.vue';
import Prestasi from '@/Components/About/Prestasi.vue';
import Value from '@/Components/About/Value.vue';
import Kepsek from '@/Components/About/Kepsek.vue';

</script>

<template>
    <Head title="About" />
    <FrontUiLayout>
        <Kepsek />
        <History />
        <Prestasi />
        <Value />
    </FrontUiLayout>


</template>