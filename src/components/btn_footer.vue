<template>
    <footer class="bg-Mred">
        <RouterLink
            class="block w-44 h-16 bg-logo2 bg-center bg-no-repeat bg-cover indent-[101%] whitespace-nowrap overflow-hidden"
            to="/">垂坤食品有限公司</RouterLink>
        <RouterLink class="text-white" :to="item.url" v-for="item in pageLink" :key="item.title">{{ item.title }}
        </RouterLink>
        <ul class="text-white">
            <li>
                <p>客服專線:</p>
                <a href="tel:037-867840">037-867840</a>
            </li>
            <li>
                <p>客服時間:</p>
                <div>
                    <p>周一至周五08:00~21:00</p>
                    <p>周六08:00~18:00</p>
                </div>
            </li>
        </ul>
        <p class="text-center bg-Myellow p-5 text-lg">垂坤食品有限公司 © 2022 All Rights Reserved.</p>
    </footer>
</template>


<script setup>
const pageLink = [
    {
        url: "/news",
        title: "最新消息",
    },
    {
        url: "/about",
        title: "關於垂坤",
    },
    {
        url: "/location",
        title: "營業據點",
    },
    {
        url: "/login",
        title: "會員專區",
    },
    {
        url: "/product",
        title: "線上購物",
    },
    {
        url: "",
        title: "訂單下載",
    },
]
</script>
