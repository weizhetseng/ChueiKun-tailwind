<template>
    <btn_banner />
    <div class="bg-bgword bg-no-repeat bg-[center_top_-40px] pt-10">
        <div class="container">
            <btn_breadcrumb />
            <div class="mb-9">
                <h2 class="text-4xl text-Mred font-bold">會員專區</h2>
                <p>Members Only</p>
            </div>
            <div class="mb-20" v-if="route.path === '/memberCenter'">
                <p class="text-2xl text-center mb-4">OOO 會員您好!</p>
                <ul class="flex justify-center mb-10 gap-5">
                    <li>
                        <RouterLink class="inline-block buttonStyle2 text-2xl hover:bg-Mred hover:text-white"
                            to="/memberCenter/orderSearch">查詢訂單資料
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink class="inline-block buttonStyle2 text-2xl hover:bg-Mred hover:text-white" to="/">修改會員資料
                        </RouterLink>
                    </li>
                </ul>
                <ul class="flex justify-center gap-5">
                    <li>
                        <RouterLink class="inline-block buttonStyle2 text-2xl hover:bg-Mred hover:text-white" to="/">變更密碼
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink class="inline-block buttonStyle2 text-2xl hover:bg-Mred hover:text-white" to="/">綁定其他帳號
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink class="inline-block buttonStyle2 text-2xl hover:bg-Mred hover:text-white" to="/">會員登出
                        </RouterLink>
                    </li>
                </ul>
            </div>
            <RouterView />
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import btn_banner from '../../components/btn_banner.vue';
import btn_breadcrumb from '../../components/btn_breadcrumb.vue';
const route = useRoute()

</script>

