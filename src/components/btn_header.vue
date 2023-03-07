
import { RouterLink } from 'vue-router';

<template>
    <nav class="flex items-center">
        <h1>
            <a class="block w-44 h-16 bg-logo1 bg-center bg-no-repeat bg-cover indent-[101%] whitespace-nowrap overflow-hidden"
                href="">垂坤食品有限公司</a>
        </h1>
        <ul class="flex ml-auto text-lg font-bold mr-14 gap-6">
            <li>最新消息</li>
            <li><RouterLink to="/about">關於垂坤</RouterLink></li>
            <li>線上購物</li>
            <li>營業據點</li>
            <li>訂單下載</li>
        </ul>
        <ul class="flex">
            <li class="w-20 h-20 p-1 bg-black text-white flex flex-col gap-1 items-center justify-center text-center leading-none">
                <img src="../assets/image/other/user-alert.png" alt="">
                詐騙手法大公開
            </li>
            <li class="w-20 h-20 bg-gold text-white flex flex-col gap-1 items-center justify-center text-center leading-none">
                <img src="../assets/image/other/cart.png" alt="">
                購物車
            </li>
            <li class="w-20 h-20 bg-Mred text-white flex flex-col gap-1 items-center justify-center text-center leading-none">
                <img src="../assets/image/other/user.png" alt="">
                會員專區
            </li>
        </ul>
    </nav>
</template>
