import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/about',
    name: 'about',
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//登录验证
router.beforeEach(( to, from, next ) => {
  if(to.meta.Auth) {
    if(sessionStorage.getItem("AUTH_TOKEN")) {
      next()
    }else {
      next({
        path: '/',
        query: {redirect: to.fullPath}
      })
    }
  }else {
    next()
  }
})

export default router
