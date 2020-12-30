import Vue from 'vue'
import index from './index.vue'
import pageheader from './components/pageheader.vue'
import pagefooter from './components/pagefooter.vue'
import bartd from './components/bartd.vue'
import linetd from './components/linetd.vue'
import pietd from './components/pietd.vue'
import maptd from './components/maptd.vue'
import contactus from './components/contactus.vue'
import { Button, Form, FormItem, Input, Message, Icon } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 字体图标
import '../public/fonts/iconfont.css'

import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/map'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/geo'

import axios from 'axios'
Vue.prototype.$http = axios

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Icon)
Vue.prototype.$msg = Message

new Vue({
  render: h => h(index)
}).$mount('#articles-container')

new Vue({
  render: h => h(bartd)
}).$mount('#bartd')

new Vue({
  render: h => h(linetd)
}).$mount('#linetd')

new Vue({
  render: h => h(pietd)
}).$mount('#pietd')

new Vue({
  render: h => h(maptd)
}).$mount('#maptd')

new Vue({
  render: h => h(contactus)
}).$mount('#contactus')

new Vue({
  render: h => h(pageheader)
}).$mount('header')

new Vue({
  render: h => h(pagefooter)
}).$mount('footer')
