<template>
  <td id="maptd" ref="maptdref">
  </td>
</template>

<script>
const areacolor = '#ff5722'
export default {
  name: 'maptd',
  mounted () {
    const mapchart = this.$echarts.init(this.$refs.maptdref)
    const that = this
    this.$http.get('map/world.json').then(
      function (response) {
        that.$echarts.registerMap('worldMap', response.data)
        const option = {
          title: {
            text: '超过40个国家和地区的展商和采购商前来参展',
            textStyle: {
              color: '#666',
              fontWeight: 'normal',
              fontSize: 16,
              fontStyle: 'bold'
            },
            top: 400,
            left: 120
          },
          geo: {
            type: 'map',
            map: 'worldMap',
            zoom: 1.4,
            // nameMap: {
            //   China: '中国'
            // }
            itemStyle: {
              areaColor: '#999',
              borderColor: '#fff',
              borderType: 'dotted'
            },
            regions: [
              {
                name: 'China',
                itemStyle: {
                  areaColor: areacolor
                }
              },
              {
                name: 'Dem. Rep. Korea',
                itemStyle: {
                  areaColor: areacolor
                }
              },
              {
                name: 'Russia',
                itemStyle: {
                  areaColor: areacolor
                }
              },
              {
                name: 'Brazil',
                itemStyle: {
                  areaColor: areacolor
                }
              },
              {
                name: 'South Africa',
                itemStyle: {
                  areaColor: areacolor
                }
              },
              {
                name: 'Kenya',
                itemStyle: {
                  areaColor: areacolor
                }
              },
              {
                name: 'Tanzania',
                itemStyle: {
                  areaColor: areacolor
                }
              },
              {
                name: 'Nigeria',
                itemStyle: {
                  areaColor: areacolor
                }
              },
              {
                name: 'Algeria',
                itemStyle: {
                  areaColor: areacolor
                }
              },
              {
                name: 'Ghana',
                itemStyle: {
                  areaColor: areacolor
                }
              },
              {
                name: 'Egypt',
                itemStyle: {
                  areaColor: areacolor
                }
              },
              {
                name: 'Saudi Arabia',
                itemStyle: {
                  areaColor: areacolor
                }
              },
              {
                name: 'Syria',
                itemStyle: {
                  areaColor: areacolor
                }
              },
              {
                name: 'Venezuela',
                itemStyle: {
                  areaColor: areacolor
                }
              },
              {
                name: 'Indonesia',
                itemStyle: {
                  areaColor: areacolor
                }
              },
              {
                name: 'Vietnam',
                itemStyle: {
                  areaColor: areacolor
                }
              },
              {
                name: 'Thailand',
                itemStyle: {
                  areaColor: areacolor
                }
              },
              {
                name: 'Turkey',
                itemStyle: {
                  areaColor: areacolor
                }
              },
              {
                name: 'Germany',
                itemStyle: {
                  areaColor: areacolor
                }
              },
              {
                name: 'Sweden',
                itemStyle: {
                  areaColor: areacolor
                }
              },
              {
                name: 'Poland',
                itemStyle: {
                  areaColor: areacolor
                }
              },
              {
                name: 'Pakistan',
                itemStyle: {
                  areaColor: areacolor
                }
              },
              {
                name: 'United Kindom',
                itemStyle: {
                  areaColor: areacolor
                }
              },
              {
                name: 'Korea',
                itemStyle: {
                  areaColor: areacolor
                }
              }
            ]
            // label: {
            //   show: true,
            //   color: '#666'
            // }
          }
        }
        mapchart.setOption(option)
      }
    )
  }
}
</script>

<style>

</style>
