import { createRouter, createWebHistory } from 'vue-router'

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
  }
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
