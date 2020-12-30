<template>
<div class="w">
  <!-- 面包屑导航 -->
  <div id="crumbs">
    <p> <a href="index.html">首页</a> > <a href="exhibitor.html#/home">参展商服务</a> > 参展商注册 </p>
  </div>
  <div class="formTitle">
    <span>欢迎注册成为参展商</span>
  </div>
  <div class="userForm">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username" prefix-icon="iconfont icon-user"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off" prefix-icon="iconfont icon-password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="password2">
        <el-input type="password" v-model="ruleForm.password2" autocomplete="off" prefix-icon="iconfont icon-password"></el-input>
      </el-form-item>
      <el-form-item label="公司名称" prop="company">
        <el-input v-model="ruleForm.company" prefix-icon="iconfont icon-gongsimingcheng"></el-input>
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
        <el-input v-model="ruleForm.contact" prefix-icon="iconfont icon-ziyuan"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="tel">
        <el-input v-model="ruleForm.tel" prefix-icon="iconfont icon-tel"></el-input>
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
        <el-input v-model="ruleForm.email" prefix-icon="iconfont icon-email"></el-input>
      </el-form-item>
      <el-form-item label="公司地址" prop="address">
        <el-input v-model="ruleForm.address" prefix-icon="iconfont icon-dizhi"></el-input>
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
        value: 'AL',
        label: '阿尔巴尼亚'
      }, {
        value: 'DZ',
        label: '阿尔及利亚'
      }, {
        value: 'AD',
        label: '安道尔'
      }, {
        value: 'AO',
        label: '安哥拉'
      }, {
        value: 'AG',
        label: '安提瓜和巴布达'
      }, {
        value: 'AR',
        label: '阿根廷'
      }, {
        value: 'AM',
        label: '亚美尼亚'
      }, {
        value: 'AU',
        label: '澳大利亚'
      }, {
        value: 'AT',
        label: '奥地利'
      }, {
        value: 'AZ',
        label: '阿塞拜疆'
      }, {
        value: 'BS',
        label: '巴哈马'
      }, {
        value: 'BH',
        label: '巴林'
      }, {
        value: 'BD',
        label: '孟加拉国'
      }, {
        value: 'BB',
        label: '巴巴多斯'
      }, {
        value: 'BY',
        label: '白俄罗斯'
      }, {
        value: 'BE',
        label: '比利时'
      }, {
        value: 'BZ',
        label: '伯利兹'
      }, {
        value: 'BJ',
        label: '贝宁'
      }, {
        value: 'BM',
        label: '百慕大'
      }, {
        value: 'BT',
        label: '不丹'
      }, {
        value: 'BO',
        label: '玻利维亚'
      }, {
        value: 'BA',
        label: '波黑'
      }, {
        value: 'BW',
        label: '博茨瓦纳'
      }, {
        value: 'BR',
        label: '巴西'
      }, {
        value: 'BN',
        label: '文莱'
      }, {
        value: 'BG',
        label: '保加利亚'
      }, {
        value: 'BF',
        label: '布基纳法索'
      }, {
        value: 'MM',
        label: '缅甸'
      }, {
        value: 'BI',
        label: '布隆迪'
      }, {
        value: 'CV',
        label: '弗得角'
      }, {
        value: 'KH',
        label: '柬埔寨'
      }, {
        value: 'CM',
        label: '喀麦隆'
      }, {
        value: 'CA',
        label: '加拿大'
      }, {
        value: 'CF',
        label: '中非'
      }, {
        value: 'TD',
        label: '乍得'
      }, {
        value: 'CL',
        label: '智利'
      }, {
        value: 'CO',
        label: '哥伦比亚'
      }, {
        value: 'KM',
        label: '科摩罗'
      }, {
        value: 'CD',
        label: '刚果民主共和国'
      }, {
        value: 'CG',
        label: '刚果共和国'
      }, {
        value: 'CK',
        label: '库克群岛'
      }, {
        value: 'CR',
        label: '哥斯达黎加'
      }, {
        value: 'CI',
        label: '科特迪瓦'
      }, {
        value: 'HR',
        label: '克罗地亚'
      }, {
        value: 'CU',
        label: '古巴'
      }, {
        value: 'CY',
        label: '塞浦路斯'
      }, {
        value: 'CZ',
        label: '捷克'
      }, {
        value: 'DK',
        label: '丹麦'
      }, {
        value: 'DO',
        label: '多米尼加'
      }, { value: 'EC', label: '厄瓜多尔' },
      { value: 'EG', label: '埃及' },
      { value: 'SV', label: '萨尔瓦多' },
      { value: 'GQ', label: '赤道几内亚' },
      { value: 'ER', label: '厄立特里亚' },
      { value: 'EE', label: '爱沙尼亚' },
      { value: 'ET', label: '埃塞俄比亚' },
      { value: 'FJ', label: '斐济' },
      { value: 'FI', label: '芬兰' },
      { value: 'FR', label: '法国' },
      { value: 'GA', label: '加蓬' },
      { value: 'GM', label: '冈比亚' },
      { value: 'PS', label: '巴勒斯坦' },
      { value: 'GE', label: '格鲁吉亚' },
      { value: 'GH', label: '加纳' },
      { value: 'GI', label: '直布罗陀' },
      { value: 'GR', label: '希腊' },
      { value: 'GL', label: '格陵兰' },
      { value: 'GD', label: '格林纳达' },
      { value: 'GN', label: '几内亚' },
      { value: 'GT', label: '危地马拉' },
      { value: 'GW', label: '吉尼亚比绍' },
      { value: 'GY', label: '圭亚那' },
      { value: 'HT', label: '海地' },
      { value: 'VA', label: '梵蒂冈' },
      { value: 'HN', label: '洪都拉斯' },
      { value: 'HU', label: '匈牙利' },
      { value: 'IS', label: '冰岛' },
      { value: 'IN', label: '印度' },
      { value: 'IR', label: '伊朗' },
      { value: 'IQ', label: '伊拉克' },
      { value: 'IL', label: '以色列' },
      { value: 'IT', label: '意大利' },
      { value: 'JM', label: '牙买加' },
      { value: 'JP', label: '日本' },
      { value: 'JO', label: '约旦' },
      { value: 'KZ', label: '哈萨克斯坦' },
      { value: 'KN', label: '肯尼亚' },
      { value: 'KR', label: '南朝鲜' },
      { value: 'KW', label: '科威特' },
      { value: 'KG', label: '吉尔吉斯斯坦' },
      { value: 'LA', label: '老挝' },
      { value: 'LV', label: '拉脱维亚' },
      { value: 'LB', label: '黎巴嫩' },
      { value: 'LS', label: '莱索托' },
      { value: 'LR', label: '利比里亚' },
      { value: 'LY', label: '利比亚' },
      { value: 'LI', label: '列支敦士登' },
      { value: 'LT', label: '立陶宛' },
      { value: 'LU', label: '卢森堡' },
      { value: 'MO', label: '中国澳门' },
      { value: 'MG', label: '马达加斯加' },
      { value: 'MW', label: '马拉维' },
      { value: 'MV', label: '马尔代夫' },
      { value: 'ML', label: '马里' },
      { value: 'MT', label: '马耳他' },
      { value: 'MR', label: '毛里塔尼亚' },
      { value: 'MU', label: '毛里求斯' },
      { value: 'MX', label: '墨西哥' },
      { value: 'MD', label: '摩尔多瓦' },
      { value: 'MC', label: '摩纳哥' },
      { value: 'MN', label: '蒙古' },
      { value: 'ME', label: '黑山' },
      { value: 'MA', label: '摩洛哥' },
      { value: 'MZ', label: '莫桑比克' },
      { value: 'NA', label: '纳比米亚' },
      { value: 'NR', label: '瑙鲁' },
      { value: 'NP', label: '尼泊尔' },
      { value: 'NL', label: '荷兰' },
      { value: 'NZ', label: '新西兰' },
      { value: 'NI', label: '尼加拉瓜' },
      { value: 'NE', label: '尼日尔' },
      { value: 'NG', label: '尼日利亚' },
      { value: 'NO', label: '挪威' },
      { value: 'OM', label: '阿曼' },
      { value: 'PK', label: '巴基斯坦' },
      { value: 'PW', label: '帕劳' },
      { value: 'PA', label: '巴拿马' },
      { value: 'PG', label: '巴布亚新几内亚' },
      { value: 'PY', label: '巴拉圭' },
      { value: 'PE', label: '秘鲁' },
      { value: 'PH', label: '菲律宾' },
      { value: 'PL', label: '波兰' },
      { value: 'PT', label: '葡萄牙' },
      { value: 'PR', label: '波多黎各' },
      { value: 'QA', label: '卡塔尔' },
      { value: 'RO', label: '罗马尼亚' },
      { value: 'RU', label: '俄罗斯' },
      { value: 'RW', label: '卢旺达' },
      { value: 'SM', label: '圣马力诺' },
      { value: 'SA', label: '沙特阿拉伯' },
      { value: 'SN', label: '塞内加尔' },
      { value: 'SL', label: '塞拉利昂' },
      { value: 'SK', label: '斯洛伐克' },
      { value: 'SI', label: '斯洛文尼亚' },
      { value: 'SO', label: '索马里' },
      { value: 'ZA', label: '南非' },
      { value: 'ES', label: '西班牙' },
      { value: 'LK', label: '斯里兰卡' },
      { value: 'SD', label: '苏丹' },
      { value: 'SS', label: '南苏丹' },
      { value: 'SR', label: '苏里南' },
      { value: 'SZ', label: '斯威士兰' },
      { value: 'SE', label: '瑞典' },
      { value: 'CH', label: '瑞士' },
      { value: 'TJ', label: '塔吉克斯坦' },
      { value: 'TZ', label: '坦桑尼亚' },
      { value: 'TH', label: '泰国' },
      { value: 'TL', label: '东帝汶' },
      { value: 'TG', label: '多哥' },
      { value: 'TN', label: '突尼斯' },
      { value: 'TR', label: '土耳其' },
      { value: 'TM', label: '土库曼斯坦' },
      { value: 'UG', label: '乌干达' },
      { value: 'UA', label: '乌克兰' },
      { value: 'AE', label: '阿联酋' },
      { value: 'UK', label: '英国' },
      { value: 'US', label: '美国' },
      { value: 'UY', label: '乌拉圭' },
      { value: 'UZ', label: '乌兹别克斯坦' },
      { value: 'VE', label: '委内瑞拉' },
      { value: 'VN', label: '越南' },
      { value: 'YM', label: '也门' },
      { value: 'ZM', label: '赞比亚' },
      { value: 'ZW', label: '津巴布韦' }
      ],
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
          { min: 6, message: '密码长度在6个字符以上', trigger: 'blur' }
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
          const that = this
          this.$http.post('register/', this.ruleForm).then(
            function (response) {
              if (response.data.code === 200) {
                that.$msg({
                  message: '恭喜您，注册成功！',
                  type: 'success'
                })
                that.$router.push('/login')
              } else {
                that.$msg.error('服务器错误，注册失败')
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
  .userForm {
    margin: 0 auto;
  }
</style>
