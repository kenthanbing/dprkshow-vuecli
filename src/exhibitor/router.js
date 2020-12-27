import Vue from 'vue'
import VueRouter from 'vue-router'
import register from './components/register.vue'
import login from './components/login.vue'
import home from './components/home.vue'
import info from './components/info.vue'
import general from './components/general.vue'
import pwd from './components/pwd.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/register', component: register },
    { path: '/login', component: login },
    { path: '/home', component: home },
    {
      path: '/info',
      component: info,
      children: [
        { path: '/info/general', component: general },
        { path: '/info/pwd', component: pwd }
      ]
    }
  ]
})

// 挂载路由守卫，路由保护
router.beforeEach(
  function (to, from, next) {
    const tokenStr = window.sessionStorage.getItem('token')
    if (to.path === '/login') {
      if (tokenStr) {
        return next('/home')
      }
      return next()
    }
    if (to.path === '/register') {
      if (tokenStr) {
        return next('/home')
      }
      return next()
    }
    if (to.path === '/') {
      return next()
    }
    if (to.path === '/home') {
      if (!tokenStr) {
        return next('/login')
      }
      next()
    }
    if (to.path === '/info') {
      if (!tokenStr) {
        return next('/login')
      }
      next('/info/general')
    }
    if (to.path === '/info/general') {
      if (!tokenStr) {
        return next('/login')
      }
      next()
    }
    if (to.path === '/info/pwd') {
      if (!tokenStr) {
        return next('/login')
      }
      next()
    }
  }
)

export default router
