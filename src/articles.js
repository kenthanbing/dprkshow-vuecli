import Vue from 'vue'
import articles from './articles.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(articles)
}).$mount('#articles-page')
