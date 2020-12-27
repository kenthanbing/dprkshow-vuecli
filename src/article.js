import Vue from 'vue'
import article from './article.vue'
import VueRouter from 'vue-router'
import pageheader from './components/pageheader.vue'
import pagefooter from './components/pagefooter.vue'
import { Button } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(Button)

Vue.use(VueRouter)

new Vue({
  render: h => h(article)
}).$mount('#article-page')

new Vue({
  render: h => h(pageheader)
}).$mount('header')

new Vue({
  render: h => h(pagefooter)
}).$mount('footer')
