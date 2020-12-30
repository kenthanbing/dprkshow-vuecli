<template>
  <td id="linetd" ref="linetdref">
  </td>
</template>

<script>

export default {
  name: 'linetd',
  mounted () {
    const linechart = this.$echarts.init(this.$refs.linetdref)
    const xDataArr = ['2017春季', '2017秋季', '2018春季', '2018秋季', '2019春季', '2019秋季']
    const yDataArr = [0.9, 1.2, 2.1, 3.3, 3.9, 5.8]
    const option = {
      title: {
        text: '参展人数连年上升，上一届突破5万人次',
        textStyle: {
          color: '#666',
          fontWeight: 'normal',
          fontSize: 16,
          fontStyle: 'bold'
        },
        top: 400,
        left: 120
      },
      tooltip: {
        show: true,
        trigger: 'axis',
        // formatter: '{b}<br>{a}：{c}万'
        formatter: function (params) {
          var result = params[0].axisValue + '<br>' + params[0].marker + params[0].seriesName + '：' + '<strong>' + params[0].value + '万' + '</strong>'
          return result
        }
      },
      xAxis: {
        type: 'category',
        data: xDataArr
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value}万',
          fontSize: 15
        }
      },
      series: [
        {
          name: '观众人数',
          type: 'line',
          label: {
            show: true,
            position: [-25, -20],
            fontSize: 14,
            formatter: '{c}万'
          },
          data: yDataArr
        }
      ]
    }
    linechart.setOption(option)
  }
}
</script>

<style>

</style>
