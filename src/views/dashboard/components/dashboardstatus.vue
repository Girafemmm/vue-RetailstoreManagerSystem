<template>
  <div id="dashboardstatus" style="width:100%; height:100%">
  </div>
</template>

<script>
import * as echarts from 'echarts/core';
// import {BasicProps} from './props'

import {
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components';
import {
  BarChart
} from 'echarts/charts';
import {
  CanvasRenderer
} from 'echarts/renderers';


echarts.use(
    [ToolboxComponent, TooltipComponent, GridComponent, LegendComponent, BarChart, CanvasRenderer]
);

export default {
  components:{

  },
  // props: {
  //   width: {
  //     type: String,
  //     default: '100%',
  //   },
  //   height: {
  //     type: String,
  //     default: '100%',
  // },
  // },
  name: "dashboardstatus",
  mounted(){
    let chartDom = document.getElementById('dashboardstatus');
    let myChart = echarts.init(chartDom, 'dark');
    let option;

    option && myChart.setOption(option);
    myChart.resize({
      width:"auto",
      height:"auto"
    })
    myChart.setOption({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      toolbox: {
        feature: {
          dataView: {show: true, readOnly: false},
          magicType: {show: true, type: ['line', 'bar']},
          restore: {show: true},
          saveAsImage: {show: true}
        }
      },
      legend: {
        data: ['成本支出', '营业收入']
      },
      xAxis: [
        {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisPointer: {
            type: 'shadow'
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '单位：元',
          min: 0,
          max: 300000,
          interval: 50000,
          axisLabel: {
            formatter: '{value} 元'
          }
        },
      ],
      series: [
        {
          name: '成本支出',
          type: 'bar',
          data: [91608, 178261, 97389, 135383, 122836, 103221, 174411, 154239, 113381, 141173, 111016, 144044]
        },
        {
          name: '营业收入',
          type: 'bar',
          data: [239752, 174360, 151759, 165694, 214971, 212129, 234333, 241400, 237588, 244609, 216646, 208728]
        },
      ]
    })
  }
}
</script>

<style scoped>

</style>