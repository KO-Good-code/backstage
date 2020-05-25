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
    path: '/home',
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/home.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "postList" */ '../views/postList.vue'),
        meta:{
          Auth:true
        }
      },
      {
        path: 'edit',
        name: 'edit',
        component: () => import(/* webpackChunkName: "edit" */ '../views/edit.vue'),
        meta:{
          Auth:true
        }
      },
      {
        path: 'project',
        name: 'project',
        component: () => import(/* webpackChunkName: "project" */ '../views/project.vue'),
      },
      {
        path: 'fund',
        name: 'fund',
        component: () => import(/* webpackChunkName: "fund" */ '../views/fund.vue'),
      }
    ]
  },
  
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
