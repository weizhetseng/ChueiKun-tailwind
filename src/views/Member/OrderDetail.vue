<template>
    <div class="shadow-main mb-10">
        <h4 class="bg-Mred text-white text-lg p-2">訂購明細</h4>
        <div class="p-3 flex border-b border-Btable gap-2">
            <div class="w-1/2">
                <div class="flex gap-5 mb-3">
                    <p class="w-24 border-r border-wrap">訂購日期</p>
                    <p class="w-[calc(100%-116px)]">2022/8/25 12:00</p>
                </div>
                <div class="flex gap-5">
                    <p class="w-24 border-r border-wrap">訂購編號</p>
                    <p class="w-[calc(100%-116px)]">L20220812003</p>
                </div>
            </div>
            <div class="w-1/2">
                <div class="flex gap-5 mb-3">
                    <p class="w-24 border-r border-wrap">訂單狀態</p>
                    <p class="w-[calc(100%-116px)]">訂單處理中</p>
                </div>
                <div>
                    <button type="button">取消訂單</button>
                    <button type="button">客服聊聊</button>
                </div>
            </div>
        </div>
        <div class="p-3 flex border-b border-Btable gap-2">
            <div class="w-1/2">
                <div class="flex gap-5 mb-3">
                    <p class="w-24 border-r border-wrap">訂購人</p>
                    <p class="w-[calc(100%-116px)]">OOO</p>
                </div>
                <div class="flex gap-5 mb-3">
                    <p class="w-24 border-r border-wrap">Email</p>
                    <p class="w-[calc(100%-116px)]">abcdefghijk@gmail.com</p>
                </div>
                <div class="flex gap-5 mb-3">
                    <p class="w-24 border-r border-wrap">手機號碼</p>
                    <p class="w-[calc(100%-116px)]">09123456789</p>
                </div>
                <div class="flex gap-5 mb-3">
                    <p class="w-24 border-r border-wrap">市話</p>
                    <p class="w-[calc(100%-116px)]">0412345689</p>
                </div>
                <div class="flex gap-5">
                    <p class="w-24 border-r border-wrap">聯絡地址</p>
                    <p class="w-[calc(100%-116px)]">408臺中市南屯區文心路一段378號1F</p>
                </div>
            </div>
            <div class="w-1/2">
                <div class="flex gap-5 mb-3">
                    <p class="w-24 border-r border-wrap">收件人</p>
                    <p class="w-[calc(100%-116px)]">OOO</p>
                </div>
                <div class="flex gap-5 mb-3">
                    <p class="w-24 border-r border-wrap">Email</p>
                    <p class="w-[calc(100%-116px)]">abcdefghijk@gmail.com</p>
                </div>
                <div class="flex gap-5 mb-3">
                    <p class="w-24 border-r border-wrap">手機號碼</p>
                    <p class="w-[calc(100%-116px)]">09123456789</p>
                </div>
                <div class="flex gap-5 mb-3">
                    <p class="w-24 border-r border-wrap">市話</p>
                    <p class="w-[calc(100%-116px)]">0412345689</p>
                </div>
                <div class="flex gap-5">
                    <p class="w-24 border-r border-wrap">聯絡地址</p>
                    <p class="w-[calc(100%-116px)]">408臺中市南屯區文心路一段378號1F</p>
                </div>
            </div>
        </div>
        <div class="p-3 border-b border-Btable">
            <div class="flex gap-5 mb-3">
                <p class="w-24 border-r border-wrap">付款方式</p>
                <p class="red">貨到付款</p>
            </div>
            <div class="flex gap-5 mb-3">
                <p class="w-24 border-r border-wrap">配送方式</p>
                <p class="red">宅配</p>
            </div>
            <div class="flex gap-5 mb-3">
                <p class="w-24 border-r border-wrap">發票資料</p>
                <p>******** 個人電子發票-寄送至訂購人電子信箱 <span>發票將會於出貨後7天開立</span></p>
            </div>
            <div class="flex gap-5 mb-3">
                <p class="w-24 border-r border-wrap">商品小計</p>
                <p>14260元</p>
            </div>
            <div class="flex gap-5 mb-3">
                <p class="w-24 border-r border-wrap">運費</p>
                <p>200元</p>
            </div>
            <div class="flex gap-5 mb-3">
                <p class="w-24 border-r border-wrap">優惠折扣</p>
                <p>1711元</p>
            </div>
            <div class="flex gap-5">
                <p class="w-24 border-r border-wrap">訂單總金額</p>
                <p class="red">12749元</p>
            </div>
        </div>
    </div>
    <table class="w-full shadow-main">
        <thead class="bg-Mred text-white text-lg">
            <tr>
                <th class="p-2">訂單明細</th>
                <th class="p-2">數量</th>
                <th class="p-2">單價</th>
                <th class="p-2">合計</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in orderData" :key="item.title">
                <td class="p-3 border-b border-Btable">
                    <div class="flex items-center gap-5">
                        <img class="rounded-xl shadow-main" :src="imageUrl(item.imgUrl)" alt="">
                        {{ item.title }}
                    </div>
                </td>
                <td class="p-3 border-b border-Btable text-center">{{ item.num }}</td>
                <td class="p-3 border-b border-Btable text-center">{{ item.cost }}</td>
                <td class="p-3 border-b border-Btable text-center">{{ item.total }}元</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
const orderData = [
    {
        imgUrl: 'product01.jpg',
        title: '[新品]肉鬆小脆餅',
        num: '1',
        cost: '150',
        total: '150',
    },
    {
        imgUrl: 'product02.png',
        title: '[新品]肉鬆小脆餅',
        num: '1',
        cost: '150',
        total: '150',
    },
    {
        imgUrl: 'product03.png',
        title: '[新品]肉鬆小脆餅',
        num: '1',
        cost: '150',
        total: '150',
    },
    {
        imgUrl: 'product04.jpg',
        title: '[新品]肉鬆小脆餅',
        num: '1',
        cost: '150',
        total: '150',
    }

]
function imageUrl(name) {
    return new URL(`/src/assets/image/product/${name}`, import.meta.url).href;
}
</script>