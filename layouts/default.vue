<template>
    <div  class="flex">

        <NuxtLoadingIndicator color="#1e73be" />

        <main data-theme="dark" class="h-screen bg-[#1a1a1a] px-3 md:px-10 lg:px-10 flex-1 overflow-auto">
            <div class="container">
                <slot />

            </div>
        </main>
    </div>
</template>

<script setup>

// definePageMeta({
//     middleware: 'auth'
// })
</script>