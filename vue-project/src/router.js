import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'

const routes = [
  {
    path: '/',          // 사용자가 접속할 주소 (기본 주소)
    name: 'home',
    component: HomeView // 보여줄 화면
  },
  {
    path: '/about',     // 사용자가 접속할 주소 (localhost:5173/about)
    name: 'about',
    component: AboutView // 보여줄 화면
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router