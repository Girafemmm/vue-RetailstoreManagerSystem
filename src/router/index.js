import Vue from 'vue'
import VueRouter from 'vue-router'

const Dashboard = () => import('../components/Dashboard')
const Status = () => import('../components/Status')
const ItemForSale = () => import('../components/ItemForSale')
const ItemDealRecent = () => import('../components/ItemDealRecent')
const EmployeeList = () => import('../components/EmployeeList')
const EmployeeAttendance = () => import('../components/EmployeeAttendance')
const StorageManager = () => import('../components/StorageManager')

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
  },
  {
    path:'/status',
    name: 'Status',
    component: Status,
  },
  {
    path:'/itemforsale',
    name:'itemforsale',
    component: ItemForSale,
  },
  {
    path:'/itemdealrecent',
    name:'itemdealrecent',
    component: ItemDealRecent
  },
  {
    path:'/employeelist',
    name:'employeelist',
    component: EmployeeList,
  },
  {
    path:'/employeeattendance',
    name:'employeeattendance',
    component: EmployeeAttendance
  },
  {
    path:'/storagemanager',
    name: 'StorageManager',
    component: StorageManager,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
