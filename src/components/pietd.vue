<template>
  <td id="pietd" ref="pietdref">
  </td>
</template>

<script>
export default {
  name: 'pietd',
  mounted () {
    const piechart = this.$echarts.init(this.$refs.pietdref)
    const pieData = [
      {
        name: '总经理/创始人/执行董事',
        value: 57
      },
      {
        name: '部门经理/主任',
        value: 20
      },
      {
        name: '项目经理',
        value: 12
      },
      {
        name: '采购专员/项目助理',
        value: 7
      },
      {
        name: '其他',
        value: 4
      }
    ]
    const option = {
      title: {
        text: '57%的参展人员为公司决策层',
        textStyle: {
          color: '#666',
          fontWeight: 'normal',
          fontSize: 16,
          fontStyle: 'bold'
        },
        top: 400,
        left: 150
      },
      tooltip: {
        show: true,
        formatter: function (params) {
          const result = params.marker + params.name + ' <strong>' + params.percent + '%' + '</strong'
          console.log(params)
          return result
        }
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        textStyle: {
          fontSize: 14
        },
        data: ['总经理/创始人/执行董事', '部门经理/主任', '项目经理', '采购专员/项目助理', '其他']
      },
      series: [
        {
          type: 'pie',
          // radius: 120,
          radius: ['40%', '75%'],
          data: pieData,
          label: {
            show: true,
            position: 'inside',
            formatter: '{d}%',
            fontSize: 15
          },
          selectedMode: 'multiple',
          selectedOffset: 20
        }
      ]
    }
    piechart.setOption(option)
  }
}
</script>

<style>

</style>
