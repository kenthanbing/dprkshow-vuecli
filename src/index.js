import Vue from 'vue'
import index from './index.vue'
import header from './components/header.vue'
import footer from './components/footer.vue'
import { Button } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(Button)

new Vue({
  render: h => h(index)
}).$mount('#articles-container')

new Vue({
  render: h => h(header)
}).$mount('header')

new Vue({
  render: h => h(footer)
}).$mount('footer')
