<template>
    <div>首頁</div>
    <btn_homeModal ref="homeModal" />
</template>




<script setup>
import { onMounted, ref } from 'vue';
import btn_homeModal from '../../components/btn_homeModal.vue';

const homeModal = ref(null)

onMounted(() => {
    homeModal.value.openModal()
})

</script>