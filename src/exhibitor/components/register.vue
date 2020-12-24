<template>
<div class="w">
  <!-- 面包屑导航 -->
  <div id="crumbs" class="w">
    <p> <a href="index.html">首页</a> > <a href="exhibitor.html">参展商服务</a> > <a href="exhibitor#/register">参展商注册</a> </p>
  </div>
  <div class="formTitle">
    <span>欢迎注册成为参展商</span>
  </div>
  <div class="userForm">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
        <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="password2">
        <el-input type="password" v-model="ruleForm.password2" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="公司名称" prop="company">
        <el-input v-model="ruleForm.company"></el-input>
      </el-form-item>
      <el-form-item label="所属行业" prop="section">
        <el-select v-model="ruleForm.section" placeholder="请选择所属行业">
          <el-option label="健康消费品" value="健康消费品"></el-option>
          <el-option label="医疗器具" value="医疗器具"></el-option>
          <el-option label="纺织服装" value="纺织服装"></el-option>
          <el-option label="体育用品" value="体育用品"></el-option>
          <el-option label="健身器械" value="健身器械"></el-option>
          <el-option label="康复用品" value="康复用品"></el-option>
          <el-option label="其他" value="其他"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="联系人" prop="contact">
        <el-input v-model="ruleForm.contact"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="tel">
        <el-input v-model="ruleForm.tel"></el-input>
      </el-form-item>
      <el-form-item label="职位" prop="position">
        <el-select v-model="ruleForm.position" placeholder="请选择职位">
          <el-option label="总经理/总裁/创始人/合伙人" value="总经理/总裁/创始人/合伙人"></el-option>
          <el-option label="副总经理/执行董事/总监" value="副总经理/执行董事/总监"></el-option>
          <el-option label="部门经理/主任" value="部门经理/主任"></el-option>
          <el-option label="项目经理/主管" value="项目经理/主管"></el-option>
          <el-option label="专员/业务员" value="专员/业务员"></el-option>
          <el-option label="其他" value="其他"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="国籍/地区" prop="nation">
        <el-select v-model="ruleForm.nation" placeholder="请选择国籍/地区">
          <el-option
            v-for="item in nations"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item label="公司地址" prop="address">
        <el-input v-model="ruleForm.address"></el-input>
      </el-form-item>
      <el-form-item label="公司简介" prop="intro">
        <el-input type="textarea" v-model="ruleForm.intro"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>

<script>
export default {
  name: 'register',
  data () {
    // 自定义密码验证规则
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.password2 !== '') {
          this.$refs.ruleForm.validateField('password2')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      nations: [{
        value: 'CN',
        label: '中国'
      }, {
        value: 'KP',
        label: '朝鲜'
      }, {
        value: 'DE',
        label: '德国'
      }, {
        value: 'ID',
        label: '印度尼西亚'
      }, {
        value: 'SY',
        label: '叙利亚'
      }, {
        value: 'TW',
        label: '中国台湾省'
      }, {
        value: 'HK',
        label: '中国香港'
      }, {
        value: 'AF',
        label: '阿富汗'
      }, {
        value: 'Beijing',
        label: '北京'
      }, {
        value: 'Beijing',
        label: '北京'
      }, {
        value: 'Beijing',
        label: '北京'
      }, {
        value: 'Beijing',
        label: '北京'
      }, {
        value: 'Beijing',
        label: '北京'
      }, {
        value: 'Beijing',
        label: '北京'
      }],
      value: '',
      ruleForm: {
        username: '',
        passowrd: '',
        password2: '',
        company: '',
        section: '',
        contact: '',
        tel: '',
        position: '',
        nation: '',
        email: '',
        address: '',
        intro: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, message: '用户名长度在3个字符以上', trigger: 'blur' }
        ],
        password: [
          { required: true, validator: validatePass, trigger: 'blur' },
          { min: 6, message: '用户名长度在6个字符以上', trigger: 'blur' }
        ],
        password2: [
          { required: true, validator: validatePass2, trigger: 'blur' }
        ],
        company: [
          { required: true, message: '请输入公司名称', trigger: 'blur' }
        ],
        section: [
          { required: true, message: '请选择所属行业', trigger: 'change' }
        ],
        contact: [
          { required: true, message: '请输入联系人', trigger: 'blur' }
        ],
        tel: [
          { required: true, message: '请输入联系电话', trigger: 'blur' }
        ],
        position: [
          { required: true, message: '请选择职位', trigger: 'change' }
        ],
        nation: [
          { required: true, message: '请选择国籍', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
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
  .userForm {
    margin: 0 auto;
  }
</style>
