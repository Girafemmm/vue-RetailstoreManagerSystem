import Vue from 'vue'
import VueRouter from 'vue-router'

const Dashboard = () => import('../components/Dashboard')

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect: '/dashboard'
  },
  {
    path:'/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
