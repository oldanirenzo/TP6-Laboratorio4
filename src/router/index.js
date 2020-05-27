import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/productos',
    name: 'Productos',
    component: () => import('../views/Productos.vue')
  },
  {
    path: '/dondeEstamos',
    name: 'DondeEstamos',
    component: () => import('../views/DondeEstamos.vue')
  },
  {
    path: '/detalle/:id',
    name: 'Detalle',
    component: () => import('../views/Detalle.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
