import Vue from 'vue'
import buyer from './buyer.vue'
import pageheader from '../components/pageheader.vue'
import pagefooter from '../components/pagefooter.vue'

import VueRouter from 'vue-router'
import router from './router.js'

import {
  Row, Form, FormItem, Input, Select, Option, Col,
  Button, Message, Link
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'
// 配置请求的根路径
axios.defaults.baseURL = 'http://8.131.233.42:8002/api/buyer/'
Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.use(Row)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Col)
Vue.use(Button)
Vue.use(Link)
Vue.prototype.$msg = Message

new Vue({
  router,
  render: h => h(buyer)
}).$mount('#buyerdiv')

new Vue({
  render: h => h(pageheader)
}).$mount('header')

new Vue({
  render: h => h(pagefooter)
}).$mount('footer')
