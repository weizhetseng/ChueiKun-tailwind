<template>
    <btn_banner />
    <div class="bg-bgword bg-no-repeat bg-[center_top_-40px] pt-10">
        <div class="container">
            <btn_breadcrumb />
            <btn_pageTitle class="mb-9" />


        </div>
    </div>
</template>

<script setup>
import btn_banner from '../components/btn_banner.vue';
import btn_pageTitle from '../components/btn_pageTitle.vue';
import btn_breadcrumb from '../components/btn_breadcrumb.vue';
</script>