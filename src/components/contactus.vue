<template>
  <div id="contactus" class="w clearfix">
    <div class="formTitle" style="padding-left: 170px">
      <span>联系我们</span>
    </div>
    <el-form :model="contactForm" ref="contactForm" class="userForm" label-width="80px">
      <el-form-item label="姓名" prop="sender">
        <el-input v-model="contactForm.sender" prefix-icon="iconfont icon-user"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="tel">
        <el-input v-model="contactForm.tel" prefix-icon="iconfont icon-tel"></el-input>
      </el-form-item>
      <el-form-item label="电子邮箱" prop="email">
        <el-input v-model="contactForm.email" prefix-icon="iconfont icon-email"></el-input>
      </el-form-item>
      <el-form-item label="留言内容" prop="message">
        <el-input type="textarea" v-model="contactForm.message"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('contactForm')">提交</el-button>
        <el-button @click="resetForm('contactForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'contactus',
  data () {
    return {
      contactForm: {
        sender: '',
        tel: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm (formName) {
      const that = this
      this.$http.post('https://dprkshow.top:8002/api/contactus/submit/', this.contactForm).then(
        function (response) {
          that.$msg({
            message: '提交成功！谢谢您的留言，我们会尽快处理。',
            type: 'success'
          })
        },
        function (err) {
          console.log(err)
        }
      )
      this.$refs[formName].resetFields()
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style>
  .userForm {
    margin: 0 auto
  }
  #contactus .el-form-item__label {
    font-size: 16px
  }
</style>
