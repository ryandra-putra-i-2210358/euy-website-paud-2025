<script setup>
import Checkbox from '@/Components/Checkbox.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

defineProps({
    canResetPassword: Boolean,
    status: String,
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Log in" />

        <!-- STATUS -->
        <div
            v-if="status"
            class="mb-4 text-sm font-medium
                   text-green-600
                   bg-green-100/60
                   border border-green-400/50
                   rounded-lg px-4 py-2"
        >
            {{ status }}
        </div>

        <form @submit.prevent="submit" class="space-y-4">

            <!-- EMAIL -->
            <div>
                <InputLabel
                    for="email"
                    value="Email"
                    class="text-gray-700"
                />

                <TextInput
                    id="email"
                    type="email"
                    v-model="form.email"
                    required
                    autofocus
                    autocomplete="username"
                    class="mt-1 block w-full
                           bg-white/20
                           border border-white/70
                           text-gray-800
                           placeholder-gray-500
                           rounded-lg
                           backdrop-blur
                           focus:border-white
                           focus:ring focus:ring-white/40"
                />

                <InputError class="mt-2 text-red-500" :message="form.errors.email" />
            </div>

            <!-- PASSWORD -->
            <div>
                <InputLabel
                    for="password"
                    value="Password"
                    class="text-gray-700"
                />

                <TextInput
                    id="password"
                    type="password"
                    v-model="form.password"
                    required
                    autocomplete="current-password"
                    class="mt-1 block w-full
                           bg-white/20
                           border border-white/70
                           text-gray-800
                           rounded-lg
                           backdrop-blur
                           focus:border-white
                           focus:ring focus:ring-white/40"
                />

                <InputError class="mt-2 text-red-500" :message="form.errors.password" />
            </div>

            <!-- REMEMBER -->
            <div class="flex items-center">
                <Checkbox
                    name="remember"
                    v-model:checked="form.remember"
                    class="border-white/70"
                />
                <span class="ms-2 text-sm text-gray-700">
                    Remember me
                </span>
            </div>

            <!-- ACTIONS -->
            <div class="flex items-center justify-between pt-2">
                <Link
                    v-if="canResetPassword"
                    :href="route('password.request')"
                    class="text-sm text-gray-700 underline
                           hover:text-gray-900"
                >
                    Forgot your password?
                </Link>

                <PrimaryButton
                    class="bg-white/80 text-gray-900
                           hover:bg-white
                           backdrop-blur
                           border border-white/60"
                    :class="{ 'opacity-50': form.processing }"
                    :disabled="form.processing"
                >
                    Log in
                </PrimaryButton>
            </div>

        </form>
    </GuestLayout>
</template>
