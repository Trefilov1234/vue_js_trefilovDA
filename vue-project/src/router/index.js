import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Profile from '../views/Profie.vue'
import News from '../views/News.vue'
import Messages from '../views/Messages.vue'
import Albums from '../views/Albums.vue'
import Photos from '../views/Photos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/messages',
      name: 'messages',
      component: Messages
    },
    {
      path: '/albums',
      name: 'albums',
      component: Albums
    },
    {
      path: '/albums/:id',
      name: 'photos',
      component: Photos
    }
  ]
})

export default router
