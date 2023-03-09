import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
      component: () => import('../views/AboutUs.vue'),
      meta: {
        title: '關於垂坤',
        enTitle: 'ABOUT US',
        breadcrumb: ['關於垂坤']
      }
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/NewsView.vue'),
      meta: {
        title: '最新消息',
        enTitle: 'HOT NEWS',
        breadcrumb: ['最新消息']
      }
    },
    {
      path: '/location',
      name: 'location',
      component: () => import('../views/Location.vue'),
      meta: {
        title: '營業據點',
        enTitle: 'Business base',
        breadcrumb: ['營業據點']
      }
    }
  ]
})

export default router
