<template>
    <btn_banner />
    <div class="bg-bgword bg-no-repeat bg-[center_top_-40px] pt-10">
        <div class="container">
            <btn_breadcrumb />
            <div class="mb-9">
                <h2 class="text-4xl text-Mred font-bold">會員註冊</h2>
                <p>Sign Up</p>
            </div>
            <form action="" class="m-auto mb-20 sm:w-4/5 lg:w-3/5 ">
                <p class="text-Wred mb-3">*為必填項目</p>
                <div class="flex flex-col gap-5 mb-6 xs:flex-row">
                    <label class="w-full text-lg p-1 xs:border-r xs:border-gray xs:w-[100px]" for="phone"><span
                            class="text-Wred">*</span>手機號碼</label>
                    <input class="w-full outline-none border-b border-lgray  xs:w-[calc(100%-120px)]" id="phone" type="text"
                        placeholder="請輸入手機號碼">
                </div>
                <div class="flex flex-col gap-5 mb-6 xs:flex-row">
                    <label class="w-full text-lg p-1 xs:border-r xs:border-gray xs:w-[100px]" for="phoneQ"><span
                            class="text-Wred">*</span>驗證碼</label>
                    <input class="w-full outline-none border-b border-lgray  xs:w-[calc(100%-120px)]" id="phoneQ"
                        type="text" placeholder="請輸入手機驗證碼">
                </div>
                <div class="flex flex-col gap-5 mb-6 xs:flex-row">
                    <label class="w-full text-lg p-1 xs:border-r xs:border-gray xs:w-[100px]" for="email"><span
                            class="text-Wred">*</span>電子信箱</label>
                    <input class="w-full outline-none border-b border-lgray  xs:w-[calc(100%-120px)]" id="email" type="text"
                        placeholder="請輸入Email">
                </div>
                <div class="flex flex-col gap-5 mb-6 xs:flex-row">
                    <label class="w-full text-lg p-1 xs:border-r xs:border-gray xs:w-[100px]" for="emailQ"><span
                            class="text-Wred">*</span>驗證碼</label>
                    <input class="w-full outline-none border-b border-lgray  xs:w-[calc(100%-120px)]" id="emailQ"
                        type="text" placeholder="請輸入Email信驗證碼">
                </div>
                <div class="flex flex-col gap-5 mb-6 xs:flex-row">
                    <label class="w-full text-lg p-1 xs:border-r xs:border-gray xs:w-[100px]" for="pw"><span
                            class="text-Wred">*</span>密碼</label>
                    <input class="w-full outline-none border-b border-lgray  xs:w-[calc(100%-120px)]" id="pw" type="text"
                        placeholder="請輸入4~12 個字元，請勿使用空白或「＠ 」等特殊符號">
                </div>
                <div class="flex flex-col gap-5 mb-6 xs:flex-row">
                    <label class="w-full text-lg p-1 xs:border-r xs:border-gray xs:w-[100px]" for="pw2"><span
                            class="text-Wred">*</span>確認密碼</label>
                    <input class="w-full outline-none border-b border-lgray  xs:w-[calc(100%-120px)]" id="pw2" type="text"
                        placeholder="請再輸入一次密碼">
                </div>
                <div class="flex flex-col gap-5 mb-6 xs:flex-row">
                    <label class="w-full text-lg p-1 xs:border-r xs:border-gray xs:w-[100px]" for="name"><span
                            class="text-Wred">*</span>姓名</label>
                    <input class="w-full outline-none border-b border-lgray  xs:w-[calc(100%-120px)]" id="name" type="text"
                        placeholder="請輸入姓名">
                </div>
                <div class="flex flex-col gap-5 mb-6 xs:flex-row">
                    <div class="w-full text-lg p-1 xs:border-r xs:border-gray xs:w-[100px]">性別</div>
                    <div class="flex gap-5">
                        <div class="flex items-center gap-2">
                            <input type="radio" name="sex" id="male">
                            <label for="male">男</label>
                        </div>
                        <div class="flex items-center gap-2">
                            <input type="radio" name="sex" id="female">
                            <label for="female">女</label>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-5 mb-6 xs:flex-row">
                    <label class="w-full text-lg p-1 xs:border-r xs:border-gray xs:w-[100px]" for="date">生日</label>
                    <input
                        class="dateStyle w-1/2 outline-none shadow-main rounded-lg p-2 bg-date bg-no-repeat bg-[length:20px_20px] bg-[center_right_10px]"
                        id="date" type="date">
                </div>
                <div class="flex flex-col gap-5 mb-6 xs:flex-row">
                    <label class="w-full text-lg p-1 xs:border-r xs:border-gray xs:w-[100px]" for="email2">電子信箱</label>
                    <input class="w-full outline-none border-b border-lgray  xs:w-[calc(100%-120px)]" id="email2"
                        type="text" placeholder="請輸入電子信箱">
                </div>
                <div class="flex flex-col gap-5 mb-6 xs:flex-row">
                    <label class="w-full text-lg p-1 xs:border-r xs:border-gray xs:w-[100px]" for="hphone">市話</label>
                    <input class="w-full outline-none border-b border-lgray  xs:w-[calc(100%-120px)]" id="hphone"
                        type="text" placeholder="請輸入市話號碼">
                </div>
                <div class="flex flex-col gap-5 mb-6 xs:flex-row">
                    <label class="w-full text-lg p-1 xs:border-r xs:border-gray xs:w-[100px]" for="">聯絡地址</label>
                    <div class="w-full flex flex-col xs:flex-row xs:gap-3 xs:w-[calc(100%-120px)]">
                        <select class="w-full mb-5 outline-none shadow-main rounded-lg p-2 xs:w-1/3 xs:mb-0" name="" id="">
                            <option value="">縣市</option>
                        </select>
                        <select class="w-full mb-5 outline-none shadow-main rounded-lg p-2 xs:w-1/3 xs:mb-0" name="" id="">
                            <option value="">鄉鎮區</option>
                        </select>
                        <select class="w-full outline-none shadow-main rounded-lg p-2 xs:w-1/3" name="" id="">
                            <option value="">街道名稱</option>
                        </select>
                    </div>
                </div>
                <div class="flex flex-col gap-5 mb-16 xs:flex-row">
                    <label class="hidden xs:w-[100px] xs:block" for=""></label>
                    <input class="outline-none shadow-main rounded-lg p-2 xs:w-[calc(100%-120px)]" type="text"
                        placeholder="請輸入詳細地址">
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
