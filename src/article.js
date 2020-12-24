import Vue from 'vue'
import article from './article.vue'
import VueRouter from 'vue-router'
import header from './components/header.vue'
import footer from './components/footer.vue'
import { Button } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(Button)

Vue.use(VueRouter)

new Vue({
  render: h => h(article)
}).$mount('#article-page')

new Vue({
  render: h => h(header)
}).$mount('header')

new Vue({
  render: h => h(footer)
}).$mount('footer')
