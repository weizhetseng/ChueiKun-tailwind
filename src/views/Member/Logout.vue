<template>
    <div class="mb-20 flex gap-10">
        <div class="w-1/5 hidden lg:block">
            <btn_memberList />
        </div>
        <div class="w-4/5">
            <p class="text-center text-3xl font-bold text-Mred mb-20">會員已登出</p>
            <div class="text-center">
                <RouterLink class="inline-block buttonStyle" to="/">返回首頁</RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import btn_memberList from '../../components/btn_memberList.vue';


</script>