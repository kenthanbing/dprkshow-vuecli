<template>
  <header>
    <div class="w">
        <a href="index.html"><img style="margin: 15px; border-radius: 15px" src="images/st.png" class="fl"></a>
        <h1 id="exhibition-name" class="fl"> <a href="index.html">朝鲜国际健康及体育科技展览会</a> </h1>
        <el-row>
          <a href="#"><el-button type="warning" round class="fr indexbtn">采购商注册</el-button></a>
          <a href="#"><el-button style="margin-right: 30px" type="danger" round class="fr indexbtn">参展商服务</el-button></a>
        </el-row>
    </div>
  </header>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style>
  header el-row .indexbtn {
    margin: 60px 60px 0px 0px;
  }
</style>
