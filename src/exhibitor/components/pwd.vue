<template>
  <div style="margin-left: 40px" class="userForm">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="94px">
      <el-form-item label="原密码" prop="pwd">
        <el-input type="password" v-model="ruleForm.pwd" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="new_pwd">
        <el-input type="password" v-model="ruleForm.new_pwd" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认新密码" prop="new_pwd2">
        <el-input type="password" v-model="ruleForm.new_pwd2" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即修改</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'pwd',
  data () {
    // 自定义密码验证规则
    var validatePass1 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.new_pwd2 !== '') {
          this.$refs.ruleForm.validateField('new_pwd2')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (value === this.ruleForm.pwd) {
        callback(new Error('新密码与原密码相同'))
      } else {
        if (this.ruleForm.new_pwd2 !== '') {
          this.$refs.ruleForm.validateField('new_pwd2')
        }
        callback()
      }
    }
    var validatePass3 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入新密码'))
      } else if (value !== this.ruleForm.new_pwd) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      eid: window.sessionStorage.getItem('eid'),
      value: '',
      ruleForm: {
        pwd: '',
        new_pwd: '',
        new_pwd2: ''
      },
      rules: {
        pwd: [
          { required: true, validator: validatePass1, trigger: 'blur' },
          { min: 6, message: '密码长度在6个字符以上', trigger: 'blur' }
        ],
        new_pwd: [
          { required: true, validator: validatePass2, trigger: 'blur' },
          { min: 6, message: '密码长度在6个字符以上', trigger: 'blur' }
        ],
        new_pwd2: [
          { required: true, validator: validatePass3, trigger: 'blur' },
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
          this.$http.put('pwd/?eid=' + that.eid, this.ruleForm).then(
            function (response) {
              if (response.data.code === 200) {
                that.$msg({
                  message: '恭喜您，修改密码成功！请牢记新密码。',
                  type: 'success'
                })
              } else {
                that.$msg.error('原密码错误，修改失败')
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
    }
  }
}
</script>

<style>

</style>
