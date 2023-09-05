import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import AddToCart from '../components/AddToCart.vue'
import CartView from '../components/CartView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: 'HomeView',
      component: HomeView
    },
    {
      path: "/item/:id",
      name: 'item',
      component: AddToCart
    },
    {
      path: "/cart",
      name: 'CartView',
      component: CartView
    },

  ]
})

export default router
