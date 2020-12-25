<template>
  <div class="w">
    <!-- 面包屑导航 -->
    <div id="crumbs">
      <p> <a href="index.html">首页</a> > 参展商服务</p>
    </div>
    <!-- 欢迎栏 -->
    <div id="userwelcome" class="clearfix">
      <div id="logoutlink" class="fr">
        <el-link type="primary" @click="logout()">登出</el-link>
      </div>
      <div id="infolink" class="fr">
        <el-link type="primary" href="exhibitor.html#/info">个人中心</el-link>
      </div>
      <div id="welwords" class="fr">
        <p>
          欢迎您，<el-link type="primary" href="exhibitor.html#/info">{{username}}</el-link>！
        </p>
      </div>
    </div>
    <!-- 文件下载链接 -->
    <div id="files">
      <el-row>
        <el-col :span="7">
          <a href="#">
            <div class="grid-content bg-purple">
              <img src="images/filedown/manual.png">
              <p>下载参展手册</p>
            </div>
          </a>
        </el-col>
        <el-col :span="7">
          <a href="#">
            <div class="grid-content bg-purple-dark">
              <img src="images/filedown/furniture.png">
              <p>下载增租道具表</p>
            </div>
          </a>
        </el-col>
        <el-col :span="7">
          <a href="#">
            <div class="grid-content bg-purple">
              <img src="images/filedown/tour.png">
              <p>下载随团登记表</p>
            </div>
          </a>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="7">
          <a href="#">
            <div class="grid-content bg-purple-dark">
              <img src="images/filedown/visa.png">
              <p>下载签证申请表</p>
            </div>
          </a>
        </el-col>
        <el-col :span="7">
          <a href="#">
            <div class="grid-content bg-purple">
              <img src="images/filedown/catalogue.png">
              <p>下载会刊登记表</p>
            </div>
          </a>
        </el-col>
        <el-col :span="7">
          <a href="#">
            <div class="grid-content bg-purple-dark">
              <img src="images/filedown/meeting.png">
              <p>下载同期活动报名表</p>
            </div>
          </a>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      username: window.sessionStorage.getItem('username')
    }
  },
  methods: {
    logout () {
      window.sessionStorage.setItem('token', '')
      window.sessionStorage.setItem('eid', '')
      window.sessionStorage.setItem('username', '')
      this.$router.push('/login')
    }
  }
}
</script>

<style>
  #userwelcome {
    font-size: 16px;
  }
  #userwelcome .el-link{
    font-size: 16px;
  }
  #logoutlink {
    margin-right: 68px;
  }
  #infolink {
    margin-right: 20px;
  }
  #welwords {
    margin-right: 44px;
  }
  .el-row {
    width: 860px;
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
    margin-right: 20px;
  }
  .bg-purple {
    background: #f2f3f5;
  }
  .bg-purple-dark {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    padding: 20px;
    padding-bottom: 0px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  #files {
    width: 860px;
    margin: 0 auto;
    margin-top: 40px;
  }
  #files .grid-content img {
    display: block;
    margin: 0px auto;
  }
  #files .grid-content p {
    font-size: 16px;
    text-align: center;
    height: 50px;
    line-height: 50px;
  }
  #files a:hover {
    color: #666;
  }
  #files .grid-content:hover{
    opacity: 0.8;
  }
</style>
