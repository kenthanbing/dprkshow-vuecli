<template>

<div id="article-page" class="w" v-if="article!=null">
  <!-- 面包屑导航 -->
  <div id="crumbs">
    <p> <a href="index.html">首页</a> > <a href="articles.html">市场信息</a> >  {{ article.title }} </p>
  </div>
  <!-- 文章内容 -->
  <div id="article-container">
    <article>
      <H2>{{ article.title }}</H2>
        <p id="desc">{{ article.desc }}</p>
          <img style="border-radius: 10px;" :src="article.abanner" alt="">
          <div id="article">
            <p v-html="article.content"></p>
          </div>
    </article>
      <div id="pager" class="clearfix">
        <a v-show="aid!=1" :href="'article.html#/?aid=' + parseInt(aid)" @click="minus_aid(); fetch_data()" id="right" class="fl"> &lt;&lt;上一篇 </a>
        <a v-show="aid!=count" :href="'article.html#/?aid=' + parseInt(aid)" @click="plus_aid(); fetch_data()" id="right" class="fr"> 下一篇>> </a>
      </div>
  </div>
</div>
</template>

<script>
import VueRouter from 'vue-router'

const router = new VueRouter()
const axios = require('axios')

export default {
  router: router,
  data: function () {
    return {
      article: null,
      aid: '',
      count: 0
    }
  },
  mounted: function () {
    this.init_aid()
    this.get_count()
    this.fetch_data()
  },
  methods: {
    init_aid: function () {
      if (this.$route.query.aid) {
        this.aid = this.$route.query.aid
      } else {
        this.aid = '1'
        this.$route.query.aid = this.aid
      }
    },

    get_count: function () {
      var that = this
      axios.get('http://8.131.233.42:8002/api/articles/').then(
        function (response) {
          that.count = response.data.count
        },
        function (err) {
          console.log(err)
        }
      )
    },

    plus_aid: function () {
      this.aid = parseInt(this.$route.query.aid) + 1
    },

    minus_aid: function () {
      this.aid = parseInt(this.$route.query.aid) - 1
    },

    fetch_data: function () {
      var that = this
      var url = 'http://8.131.233.42:8002/api/article/' + that.aid + '/'
      axios.get(url).then(
        function (response) {
          that.article = response.data
        },
        function (err) {
          console.log(err)
        }
      )
    }
  }
}
</script>
