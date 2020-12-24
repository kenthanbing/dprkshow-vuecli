import Vue from 'vue'
import VueRouter from 'vue-router'
import exhibitor from './exhibitor.vue'
import header from '../components/header.vue'
import footer from '../components/footer.vue'

import {
  Form, FormItem, Input, Select, Option, Col, DatePicker, TimePicker,
  Switch, Checkbox, CheckboxGroup, Radio, RadioGroup, Button
} from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import router from './router.js'

import axios from 'axios'
// 配置请求的跟路径
axios.defaults.baseURL = 'http://127.0.0.1:8002/api/exhibitor/'
Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Col)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(Switch)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Button)

Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(exhibitor)
}).$mount('#exhibitordiv')

new Vue({
  render: h => h(header)
}).$mount('header')

new Vue({
  render: h => h(footer)
}).$mount('footer')
