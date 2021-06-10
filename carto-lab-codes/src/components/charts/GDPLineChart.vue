<template>
<div ref="chart" style="height:300px"></div>
</template>

<script>
import * as echarts from 'echarts';
import {gdp} from '../../assets/json/worldData';

export default {
  name: "GDPLineChart",
  data: function(){
    return{
      myChart: null,
      option: {
        title:{
          text: 'title',
          subtext:"Click the map and see the time-series difference in the line chart.",
          left: 45,
        },
        legend:{
          left: 100,
          bottom:10,
          orient:'horizontal',
          data: ["World","Developed","Developing"]
        },
        tooltip: {
          show: true,
          trigger: 'axis',
          formatter: '{b0}: {c0}'
        },
        xAxis: {
          type: 'category',
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: "World",
            data: gdp['World'],
            type: 'line',
            smooth: true,

          },
          {
            name: "Developed",
            data: gdp['Advanced economies'],
            type: 'line',
            smooth: true,

          },
          {
            name: "Developing",
            data: gdp['Emerging market and developing economies'],
            type: 'line',
            smooth: true,
          }],
      },
    }
  },
  methods:{
    initChart(){
      this.myChart = echarts.init(this.$refs['chart']);
      this.option && this.myChart.setOption(this.option);
    },
    processData(){
      let seriesList = [];

      for (const name in gdp){
        seriesList.push({
          type: 'line',
          data: gdp[name],
          showSymbol: true,
          smooth: true,
          name: name,
        })
      }
      return seriesList;
    },
    range(start, end) {
      return Array(end - start + 1).fill().map((_, idx) => start + idx)
    }
  },
  mounted(){
    // this.option['series'] = this.processData();
    this.option.xAxis['data'] = this.range(2010,2026);
    // this.option['legend']= {data:Object.keys(gdp)};

    this.initChart();
  }
}
</script>

<style scoped>

</style>
