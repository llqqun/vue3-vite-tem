import { createRouter, createWebHistory } from 'vue-router'

// 懒加载路由
const Home = () => import('../views/Home.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/people-list',
    name: 'PeopleList',
    component: () => import('../views/people-list.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
  // 可以在这里添加路由权限控制等逻辑
  next()
})

export default router