<template>
  <div ref="chart" style="height:450px"></div>
</template>

<script>
import {gdp} from "assets/json/worldData";
import * as echarts from "echarts";

export default {
  name: "tradeLineChart",
  props: ["chartData","title"],
  data: function(){
    return{
      myChart: null,
      options: {
        title:{
          text: this.title,
          subtext:"subtitle",
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
          // formatter: '{b0}: {c0}'
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
            data: this.chartData['World'],
            type: 'line',
            smooth: true,

          },
          {
            name: "Advanced economies",
            data: this.chartData['Advanced economies'],
            type: 'line',
            smooth: true,

          },
          {
            name: "Developing economies",
            data: this.chartData['Emerging market and developing economies'],
            type: 'line',
            smooth: true,
          }],
      }
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
    this.option.xAxis['data'] = this.range(2005,2021);
    // this.option['legend']= {data:Object.keys(gdp)};

    this.initChart();
  }
}
</script>

<style scoped>

</style>
