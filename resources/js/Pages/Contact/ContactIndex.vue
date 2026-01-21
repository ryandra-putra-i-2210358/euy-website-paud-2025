<script setup>
import { Head } from '@inertiajs/vue3';
import FrontUiLayout from '@/Layouts/FrontUiLayout.vue';
import Index from '@/Components/Contact/Index.vue';
import AjakanDaftar from '@/Components/Home/AjakanDaftar.vue';
</script>

<template>
    <Head title="Contact" />
    <FrontUiLayout>
        <Index />
        <AjakanDaftar />
        
        
    </FrontUiLayout>
</template>