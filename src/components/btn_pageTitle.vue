<template>
    <div>
        <h2 class="text-4xl text-Mred font-bold">{{ route.meta.title }}</h2>
        <p>{{ route.meta.enTitle }}</p>
    </div>
</template>


<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()

</script>