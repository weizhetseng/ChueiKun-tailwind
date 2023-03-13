import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About/AboutUs.vue'),
      meta: {
        banner: 'banner-about.jpg',
        breadcrumb: ['關於垂坤']
      }
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/News/NewsView.vue'),
      meta: {
        banner: 'banner-news.jpg',
        breadcrumb: ['最新消息']
      },
      children: [
        {
          path: 'newsDetail/:id',
          component: () => import('../views/News/NewsDetail.vue'),
        }
      ]
    },
    {
      path: '/location',
      name: 'location',
      component: () => import('../views/Location/Location.vue'),
      meta: {
        banner: 'banner-location.jpg',
        breadcrumb: ['營業據點']
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Member/Login.vue'),
      meta: {
        banner: 'banner-login.jpg',
        breadcrumb: ['會員登入']
      }
    },
    {
      path: '/forget',
      name: 'forget',
      component: () => import('../views/Member/Forget.vue'),
      meta: {
        banner: 'banner-login.jpg',
        breadcrumb: ['會員專區', '忘記密碼']
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Member/Register.vue'),
      meta: {
        banner: 'banner-login.jpg',
        breadcrumb: ['會員註冊']
      }
    },
    {
      path: '/memberCenter',
      name: 'memberCenter',
      component: () => import('../views/Member/MemberCenter.vue'),
      meta: {
        banner: 'banner-member.jpg',
        breadcrumb: ['會員專區']
      },
      children: [
        {
          path: 'orderSearch',
          component: () => import('../views/Member/OrderSearch.vue'),
          meta: {
            banner: 'banner-member.jpg',
            breadcrumb: ['會員專區', '查詢訂單資料']
          },
          children: [
            {
              path: 'orderDetail/:id',
              component: () => import('../views/Member/OrderDetail.vue'),
              meta: {
                banner: 'banner-member.jpg',
                breadcrumb: ['會員專區', '查詢訂單資料']
              },
            }
          ]
        },
        {
          path: 'updateUser',
          component: () => import('../views/Member/UpdateUser.vue'),
          meta: {
            banner: 'banner-member.jpg',
            breadcrumb: ['會員專區', '修改會員資料']
          },
        },
        {
          path: 'changePW',
          component: () => import('../views/Member/ChangePW.vue'),
          meta: {
            banner: 'banner-member.jpg',
            breadcrumb: ['會員專區', '變更密碼']
          },
        },
        {
          path: 'bindOther',
          component: () => import('../views/Member/BindOther.vue'),
          meta: {
            banner: 'banner-member.jpg',
            breadcrumb: ['會員專區', '綁定其他帳號']
          },
        },
        {
          path: 'logout',
          component: () => import('../views/Member/Logout.vue'),
          meta: {
            banner: 'banner-member.jpg',
            breadcrumb: ['會員專區', '登出']
          },
        }
      ]
    },

  ]
})

export default router
