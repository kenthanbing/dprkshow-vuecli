<template>
  <div class="w">
    <!-- 面包屑导航 -->
    <div id="crumbs">
      <p> <a href="index.html">首页</a> > <a href="exhibitor.html#/home">参展商服务</a> > 参展商登录 </p>
    </div>
    <div class="formTitle">
      <span>尊敬的展商您好！请登录</span>
    </div>

    <div class="userForm">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
          <el-button style="margin-left: 40px" type="success" @click="openRegister()">立即注册</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      value: '',
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, message: '用户名长度在3个字符以上', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '密码长度在6个字符以上', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const that = this
          this.$http.post('login/', this.ruleForm).then(
            function (response) {
              if (response.data.code === 200) {
                that.$msg({
                  message: '欢迎您，' + that.ruleForm.username + '！',
                  type: 'success'
                })
                // 保存token
                console.log(response)
                window.sessionStorage.setItem('token', response.data.data.token)
                window.sessionStorage.setItem('eid', response.data.data.eid)
                window.sessionStorage.setItem('username', response.data.data.username)
                that.$router.push('/home')
              } else {
                that.$msg.error('用户名或密码错误')
              }
            },
            function (err) {
              console.log(err)
            }
          )
        } else {
          this.$msg.error('内容格式不正确，请留意红框部分提示的信息')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    openRegister () {
      this.$router.push('/register')
    }
  }
}
</script>

<style>

</style>
