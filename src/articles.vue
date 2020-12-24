<template>
<div id="articles-page" class="w">
  <!-- 面包屑导航 -->
  <div id="crumbs" class="w">
    <p> <a href="index.html">首页</a> > <a href="articles.html">市场信息</a> </p>
  </div>
  <div style="height: 800px;">
      <table class="articles-list">
          <caption> 朝鲜市场信息 </caption>
          <tr v-for="(article, index) in articles" :key="index">
            <td> <a :href="'article.html#/?aid=' + article.aid"><img style="border-radius: 10px;" :src="article.snap" alt=""></a></td>
              <td>
                  <a :href="'article.html#/?aid=' + article.aid"><h2> {{ article.title }} </h2></a>
                  <a :href="'article.html#/?aid=' + article.aid"><p> {{ article.desc }} </p></a>
              </td>
          </tr>
      </table>
  </div>

  <!-- 翻页组件 -->
  <div id="pagination">
      <span style="color: lightgray" v-show="parseInt(active_page)==1"> &lt; </span>
      <a v-show="active_page!=1" @click="fetch_data(parseInt(active_page)-1); change_active_page(parseInt(active_page)-1)" href="javascript:;"> &lt; </a>
      &nbsp;<a v-for="(page, index) in pages" :key="index" @click="fetch_data(page); change_active_page(page)" :class="{actived: active_page==page}" href="javascript:;"> {{ page }} &nbsp;</a>
      <a v-show="active_page!=pages.length" @click="fetch_data(parseInt(active_page)+1); change_active_page(parseInt(active_page)+1)" href="javascript:;"> > </a>
      <span style="color: lightgray" v-show="parseInt(active_page)==pages.length"> > </span>
  </div>
</div>
</template>

<script>

const axios = require('axios')

export default {
  name: 'index',
  data: function () {
    return {
      active_page: '1',
      articles: [],
      pages: []
    }
  },
  mounted: function () {
    this.fetch_data()
  },
  methods: {
    fetch_data: function (currentPage = '1') {
      var that = this
      axios.get('http://8.131.233.42:8002/api/articles/', {
        params: {
          page: currentPage,
          ordering: '-aid'
        }
      }).then(
        function (response) {
          that.articles = response.data.results
          that.pages = response.data.pages
        },
        function (err) {
          console.log(err)
        }
      )
    },
    change_active_page: function (currentPage) {
      this.active_page = currentPage
    }
  }
}

</script>
