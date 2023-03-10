<template>
    <btn_banner />
    <div class="bg-bgword bg-no-repeat bg-[center_top_-40px] pt-10">
        <div class="container">
            <btn_breadcrumb />
            <div class="mb-9">
                <h2 class="text-4xl text-Mred font-bold">忘記密碼</h2>
                <p>Forgot Password</p>
            </div>
            <form action="" class="w-4/5 m-auto mb-20">
                <div class="gap-5 m-auto mb-16 sm:flex lg:w-1/2">
                    <label class="w-full p-2 flex items-center gap-1 sm:w-32 sm:border-r sm:border-gray" for="user">
                        <div class="border border-Mred rounded-full p-2">
                            <img src="../../assets/image/other/envelope-solid.png" alt="">
                        </div>
                        帳號
                    </label>
                    <input class="w-full outline-none border-b border-lgray p-2 sm:w-[calc(100%-148px)]" id="user"
                        type="text" placeholder="請輸入手機號碼或電子信箱">
                </div>
                <div class="flex justify-center items-center gap-5">
                    <button class="buttonStyle2" type="reset">清除</button>
                    <button class="buttonStyle" type="submit">送出</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import btn_banner from '../../components/btn_banner.vue';
import btn_breadcrumb from '../../components/btn_breadcrumb.vue';
</script>