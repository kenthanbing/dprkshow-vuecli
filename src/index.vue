<template>
<!-- 文章列表 -->
<div id="articles-container" class="w">
    <table class="articles-list">
        <caption> <a href="articles.html">朝鲜市场信息</a> </caption>
        <tr v-for="(article, index) in articles" :key="index">
            <td> <a :href="'article.html#/?aid=' + article.aid"><img style="border-radius: 10px;" :src="article.snap" alt=""></a></td>
            <td>
                <a :href="'article.html#/?aid=' + article.aid"><h2> {{ article.title }} </h2></a>
                <a :href="'article.html#/?aid=' + article.aid"><p> {{ article.desc }} </p></a>
            </td>
        </tr>
    </table>
</div>
</template>

<script>

const axios = require('axios')

export default {
  name: 'index',
  data: function () {
    return {
      articles: []
    }
  },
  mounted: function () {
    this.fetch_data()
  },
  methods: {
    fetch_data: function () {
      var that = this
      axios.get('http://8.131.233.42:8002/api/articles/', {
        params: { ordering: '-aid' }
      }).then(
        function (response) {
          // 取出前三篇文章
          that.articles = response.data.results.slice(0, 3)
        },
        function (err) {
          console.log(err)
        }
      )
    }
  }
}

</script>
