<template>
  <div class="w">
    <!-- 面包屑导航 -->
    <div id="crumbs">
      <p> <a href="index.html">首页</a> > <a href="exhibitor.html#/home">参展商服务</a> > 个人中心 </p>
    </div>
    <div id="logoutlink" class="fr">
      <el-link type="primary" @click="logout()">登出</el-link>
    </div>
    <el-row>
      <el-col :span="4">
          <div id="infoleft" class="grid-content bg-purple-light">
            <div><router-link to="/info/general">修改基本信息</router-link></div>
            <div><router-link to="/info/pwd">修改密码</router-link></div>
          </div>
      </el-col>
      <el-col id="inforight" :span="18">
          <div style="padding-bottom: 1px; padding-top: 28px" class="grid-content bg-purple">
            <router-view></router-view>
          </div>
    </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: 'info',
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
  #infoleft {
    font-size: 16px;
    line-height: 40px;
    padding: 20px;
  }
  #infoleft a:hover {
    color: #409EFF;
  }
  .el-row {
    width: 1000px;
    margin: 0 auto;
    margin-bottom: 20px;
    margin-top: 40px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  #logoutlink a{
    font-size: 16px;
  }
</style>
