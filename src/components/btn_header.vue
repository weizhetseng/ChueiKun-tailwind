
<template>
    <nav class="w-full z-50 flex items-center fixed top-0 transition-all"
        :class="{ 'bg-Mred': isNavFixed, 'bg-white': !isNavFixed }">
        <div class="flex w-9 h-9s items-center justify-center m-2 cursor-pointer group lg:hidden">
            <span
                class="relative w-8 h-0.5 bg-black before:content-[''] before:block before:absolute before:w-full before:h-full before:bg-black before:-top-2 before:left-0 before:transition after:content-[''] after:block after:absolute after:w-full after:h-full after:bg-black after:top-2 after:left-0 after:transition lg:block group-hover:bg-transparent group-hover:after:rotate-45 group-hover:after:-translate-y-2 group-hover:before:translate-y-2 group-hover:before:-rotate-45"></span>
        </div>
        <h1 class="m-auto lg:m-0">
            <a class="block w-44 h-16  bg-center bg-no-repeat bg-cover indent-[101%] whitespace-nowrap overflow-hidden"
                :class="{ 'bg-logo3': isNavFixed, 'bg-logo1': !isNavFixed }" href="/">垂坤食品有限公司</a>
        </h1>
        <ul class="lg:flex ml-auto text-lg font-bold mr-14 gap-6 hidden"
            :class="{ 'text-black': !isNavFixed, 'text-white': isNavFixed }">
            <li>
                <RouterLink to="/news">最新消息</RouterLink>
            </li>
            <li>
                <RouterLink to="/about">關於垂坤</RouterLink>
            </li>
            <li>線上購物</li>
            <li>
                <RouterLink to="/location">營業據點</RouterLink>
            </li>
            <li>訂單下載</li>
        </ul>
        <ul class="lg:flex hidden">
            <li class="w-20 h-20 p-1 bg-black cursor-pointer text-white flex flex-col gap-1 items-center justify-center text-center leading-none"
                @click="scamModal.openModal()">
                <img src="../assets/image/other/user-alert.png" alt="">
                詐騙手法大公開
            </li>
            <li>
                <RouterLink
                    class="w-20 h-20 bg-gold text-white flex flex-col gap-1 items-center justify-center text-center leading-none"
                    to="">
                    <img src="../assets/image/other/cart.png" alt="">
                    購物車
                </RouterLink>
            </li>
            <li>
                <RouterLink
                    class="w-20 h-20 bg-Mred text-white flex flex-col gap-1 items-center justify-center text-center leading-none"
                    to="/login"><img src="../assets/image/other/user.png" alt="">會員專區</RouterLink>
            </li>
        </ul>
    </nav>
    <btn_scamModal ref="scamModal" />
</template>

<script setup>
import { onMounted, ref } from 'vue';
import btn_scamModal from './btn_scamModal.vue';

const isNavFixed = ref(false)
const scamModal = ref(null)

function scrollTop() {
    const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    if (scrollTop > 80) {
        isNavFixed.value = true;
    } else {
        isNavFixed.value = false;
    }
}

onMounted(() => {
    window.addEventListener("scroll", scrollTop);
})
</script>


