<template>
    <btn_banner />
    <div class="bg-bgword bg-no-repeat bg-[center_top_-40px] pt-10">
        <div class="container">
            <btn_breadcrumb />
            <btn_pageTitle class="mb-9" />
            <div class="flex flex-col border-b items-center border-gray mb-16 gap-5 pb-26 lg:flex-row lg:pb-28">
                <div class="lg:w-1/2 w-full">
                    <h3 class="text-2xl font-bold mb-4">細火慢燉，精心烘培</h3>
                    <p class="mb-7 text-lg">垂坤食品位於苗栗苑裡市場旁，為在地深耕經營的肉乾肉鬆店，垂坤於民國74年成立， 垂坤草創時期老闆和員工只有4人，老闆秉持著為完成幼時的夢想，垂坤食品從選自合
                        格認證的上選豬肉，到遵循古法細火慢燉、精心烘焙，為的就是能把好的、最新鮮的產 品讓更多人分享及滿意。</p>
                    <p class="mb-7 text-lg">專營各式伴手禮，肉乾、肉鬆、肉條、肉角、香腸、魷魚絲…等各式苑裡名產。</p>
                    <p class="text-lg"><span
                            class="text-xl text-Mred font-bold">垂坤食品</span>創業以來秉持著誠信的經營理念，服務至上的態度，永續經營的信念，不僅在價位
                        及品質上，都絕對能為您帶來最合乎實質的效益，加上垂坤肉鬆近幾年來累積的專業經驗，及 因應目前市場上的需求，一直不斷的求新求變，就是為了滿足客戶的各式需求，讓垂坤肉鬆能 提供客戶最優質的服務。</p>
                </div>
                <div class="lg:w-1/2 relative w-full">
                    <img class="w-full rounded-3xl" src="../../assets/image/about/about02.jpg" alt="">
                    <img class="w-1/2 rounded-3xl absolute top-1/2 left-[10%]" src="../../assets/image/about/about01.jpg"
                        alt="">
                </div>
            </div>
            <button
                class="block m-auto bg-Mred text-white px-14 py-4 rounded-tr-2xl rounded-bl-2xl mb-20 shadow-mYellow transition-all hover:scale-105 active:scale-100"
                type="button">返回上一頁</button>
        </div>
    </div>
</template>

<script setup>
import btn_banner from '../../components/btn_banner.vue';
import btn_pageTitle from '../../components/btn_pageTitle.vue';
import btn_breadcrumb from '../../components/btn_breadcrumb.vue';
</script>