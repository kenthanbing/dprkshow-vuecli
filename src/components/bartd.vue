<template>
  <td id="bartd" ref="bartdref">
  </td>
</template>

<script>

export default {
  name: 'bartd',
  mounted () {
    const barchart = this.$echarts.init(this.$refs.bartdref)
    const xDataArr = ['生活用品', '医疗器具', '纺织服装', '体育用品', '健身器械', '康复用品', '其他']
    const yDataArr = [14477, 11177, 10162, 8301, 6078, 5063, 2622]
    const option = {
      title: {
        text: '排在前三位的采购商行业是生活用品，医疗器具和纺织服装',
        textStyle: {
          color: '#666',
          fontWeight: 'normal',
          fontSize: 16,
          fontStyle: 'bold'
        },
        top: 400,
        left: 70
      },
      tooltip: {
        show: true,
        formatter: function (params) {
          var result = params.seriesName + '<br>' + params.marker + params.name + '：' + params.value
          return result
        }
      },
      grid: {
        left: 80,
        bottom: 60,
        height: 350
      },
      xAxis: {
        type: 'value'
      },
      yAxis: {
        type: 'category',
        inverse: true,
        data: xDataArr,
        axisLabel: {
          fontSize: 15
        }
      },
      series: [
        {
          name: '参展人数',
          type: 'bar',
          label: {
            show: true,
            position: 'right'
          },
          data: yDataArr
        }
      ]
    }
    barchart.setOption(option)
  }
}
</script>

<style>

</style>
