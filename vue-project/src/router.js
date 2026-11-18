import { createRouter, createWebHistory } from 'vue-router'
import LoginView from './views/LoginView.vue'
import ChangePasswordView from './views/ChangePasswordView.vue'
import HomeView from './views/HomeView.vue'
import SignupView from './views/SignupView.vue'
import SocialView from './views/SocialView.vue'
import TourView from './views/TourView.vue'
import MusicView from './views/MusicView.vue'
import AlbumView from './views/AlbumView.vue'
import StreamView from './views/StreamView.vue'
import VideoView from './views/VideoView.vue'

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
    path: '/social',
    name: 'social',
    component: SocialView
  },
  {
    path: '/tour',
    name: 'tour',
    component: TourView
  },
  {
    path: '/music',
    name: 'music',
    component: MusicView
  },
  {
    path: '/album',
    name: 'album',
    component: AlbumView
  },
  {
    path: '/stream',
    name: 'stream',
    component: StreamView
  },
  {
    path: '/video',
    name: 'video',
    component: VideoView
  },
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/about',
    name: 'about',
    redirect: '/home'
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router