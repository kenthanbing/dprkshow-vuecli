<template>
  <div style="margin-left: 40px" class="userForm">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="94px">
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
        <el-button type="primary" @click="submitForm('ruleForm')">立即修改</el-button>
        <el-button @click="fetchData()">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'general',
  data () {
    return {
      eid: window.sessionStorage.getItem('eid'),
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
      { value: 'GL', label: '格陵兰' }
      ],
      value: '',
      ruleForm: {
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
          this.$http.put('info/?eid=' + that.eid, this.ruleForm).then(
            function (response) {
              if (response.data.code === 200) {
                that.$msg({
                  message: '恭喜您，修改成功！',
                  type: 'success'
                })
              } else {
                that.$msg.error('服务器错误，修改失败')
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
    fetchData () {
      const that = this
      this.$http.get('info/?eid=' + that.eid).then(
        function (response) {
          that.ruleForm.company = response.data.data.info.company
          that.ruleForm.section = response.data.data.info.section
          that.ruleForm.contact = response.data.data.info.contact
          that.ruleForm.tel = response.data.data.info.tel
          that.ruleForm.position = response.data.data.info.position
          that.ruleForm.nation = response.data.data.info.nation
          that.ruleForm.email = response.data.data.info.email
          that.ruleForm.address = response.data.data.info.address
          that.ruleForm.intro = response.data.data.info.intro
        },
        function (err) {
          console.log(err)
        }
      )
    }
  },
  mounted: function () {
    this.fetchData()
  }
}
</script>

<style>

</style>
