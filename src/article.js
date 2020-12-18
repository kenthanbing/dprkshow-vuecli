import Vue from 'vue'
import article from './article.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(article)
}).$mount('#article-page')
