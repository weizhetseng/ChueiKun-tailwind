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
        title: '關於垂坤',
        enTitle: 'ABOUT US',
        breadcrumb: ['關於垂坤']
      }
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/News/NewsView.vue'),
      meta: {
        banner: 'banner-news.jpg',
        title: '最新消息',
        enTitle: 'HOT NEWS',
        breadcrumb: ['最新消息']
      },
      children: [
        {
          path: 'newsDetail',
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
        title: '營業據點',
        enTitle: 'Business base',
        breadcrumb: ['營業據點']
      }
    }
  ]
})

export default router
