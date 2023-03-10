<template>
    <div class="w-full h-full fixed top-0 left-0 z-[100] bg-wrap" :class="{ 'hidden': !isShow }" ref="homeModal">
        <div
            class="inline-block border-y-8 border-Mred absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-12 py-5">
            <div class="flex items-center justify-between mb-5 gap-5">
                <h1 class="text-4xl text-Mred font-bold">職缺請上1111人力銀行查閱</h1>
                <button type="button" @click="closeModal()"><img src="../assets/image/other/close-line.png" alt=""></button>
            </div>
            <div class="text-xl leading-loose">
                <p class="text-3xl text-Mred">在此聲明</p>
                <p>本公司</p>
                <p class="text-3xl font-bold">垂坤食品有限公司</p>
                <p><span class="text-3xl text-Mred">沒有</span>在其他平台刊登網路小幫手及其他職缺</p>
                <p>請小心留意不實內容</p>
                <p>本公司的職缺及詳細工作內容，</p>
                <p>請上1111人力銀行查閱</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isShow = ref(false);
const homeModal = ref(null)

//開啟 Modal 禁止背景滾動
function openModal() {
    isShow.value = true
    document.body.style.overflow = 'hidden';
}

//關閉 Modal 恢復背景滾動
function closeModal() {
    isShow.value = false
    document.body.style.overflow = 'auto';
}

defineExpose({
    openModal,
    closeModal
})


</script>