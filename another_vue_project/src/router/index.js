import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import Reviews from '../views/Reviews.vue'
import Product from '../views/Product.vue'
import Cart from '../views/Cart.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/products/category/:category',
      name: 'category',
      component: Category
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: Reviews
    },
    {
      path: '/products/:id',
      name: 'product',
      component: Product
    },
    {
      path: '/cart/',
      name: 'cart',
      component: Cart
    },
  ]
})

export default router
