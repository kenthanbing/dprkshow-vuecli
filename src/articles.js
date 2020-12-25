import Vue from 'vue'
import articles from './articles.vue'
import pageheader from './components/pageheader.vue'
import pagefooter from './components/pagefooter.vue'
import { Button } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(Button)

new Vue({
  render: h => h(articles)
}).$mount('#articles-page')

new Vue({
  render: h => h(pageheader)
}).$mount('header')

new Vue({
  render: h => h(pagefooter)
}).$mount('footer')
