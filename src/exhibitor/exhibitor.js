import Vue from 'vue'
import VueRouter from 'vue-router'
import exhibitor from './exhibitor.vue'
import pageheader from '../components/pageheader.vue'
import pagefooter from '../components/pagefooter.vue'

// 字体图标
import '../../public/fonts/iconfont.css'

import {
  Row, Form, FormItem, Input, Select, Option, Col,
  Button, Message, Link
} from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import router from './router.js'

import axios from 'axios'
// 配置请求的根路径
axios.defaults.baseURL = 'https://dprkshow.top:8002/api/exhibitor/'
Vue.prototype.$http = axios

Vue.config.productionTip = false
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

Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(exhibitor)
}).$mount('#exhibitordiv')

new Vue({
  render: h => h(pageheader)
}).$mount('header')

new Vue({
  render: h => h(pagefooter)
}).$mount('footer')
