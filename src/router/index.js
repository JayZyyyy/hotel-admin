import { createRouter, createWebHistory } from 'vue-router'
import Order from '../components/User/Order.vue'
import NotFound from '../pages/NotFound.vue'
const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('../pages/Home.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../pages/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/Login.vue')
  },
  {
    path: '/homeSearch',
    name: 'homeSearch',
    component: () => import('../pages/HomeSearch.vue')
  },
  {
    path: '/hotelInfo/:id',
    name: 'HotelInfo',
    component: () => import('../pages/HotelInfo.vue')
  },
  {
    path: '/book',
    name: 'book',
    component: () => import('../pages/Book.vue')
  },
  {
    path: '/user/:id',
    component: () => import('../pages/User.vue'),
    children: [
      { path: '', component: () => import('../components/User/userInfo.vue') },
      {
        path: 'order',
        name: 'order',
        component: Order
      },
      {
        path: 'userInfo',
        name: 'userInfo',
        component: () => import('../components/User/userInfo.vue')
      },
      {
        path: 'passwordUpdate',
        name: 'passwordUpdate',
        component: () => import('../components/User/PasswordUpdate.vue')
      },
      {
        path: 'roomSet',
        name: 'roomSet',
        component: () => import('../components/User/Admin/RoomSet.vue')
      },
      {
        path: 'roomNum',
        name: 'roomNum',
        component: () => import('../components/User/Admin/RoomNum.vue')
      },
      {
        path: 'hotelSet',
        name: 'hotelSet',
        component: () => import('../components/User/Root-Admin/HotelSet.vue')
      },
      {
        path: 'hotelSeel',
        name: 'hotelSeel',
        component: () => import('../components/User/Root-Admin/hotelSeel.vue')
      }
    ]
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const scrollBehavior = function (to, from, savedPosition) {
  if (to.hash) {
    return {
      // 通过 to.hash 的值來找到对应的元素
      selector: to.hash
    }
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior
})

export default router
