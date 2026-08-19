import { createRouter, createWebHistory } from 'vue-router'
import LoginView from './views/LoginView.vue'
import ChangePasswordView from './views/ChangePasswordView.vue'
import HomeView from './views/HomeView.vue'
import SignupView from './views/SignupView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/change-password',
    name: 'change-password',
    component: ChangePasswordView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/about',
    name: 'about',
    redirect: '/home'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router