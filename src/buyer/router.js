import Vue from 'vue'
import VueRouter from 'vue-router'
import congrat from './components/congrat.vue'
import submit from './components/submit.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/congrat', component: congrat },
    { path: '/submit', component: submit }
  ]
})

// 挂载路由守卫，路由保护
router.beforeEach(
  function (to, from, next) {
    const bidStr = window.sessionStorage.getItem('bid')
    if (to.path === '/') {
      if (bidStr) {
        return next('/congrat')
      }
      return next('/submit')
    }
    if (to.path === '/congrat') {
      if (!bidStr) {
        return next('/submit')
      }
      next()
    }
    if (to.path === '/submit') {
      if (bidStr) {
        return next('/congrat')
      }
      next()
    }
  }
)

export default router
