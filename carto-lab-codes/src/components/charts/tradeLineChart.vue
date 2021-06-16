<template>
  <div ref="chart" style="height:450px"></div>
</template>

<script>
import {gdp} from "assets/json/worldData";
import * as echarts from "echarts";

export default {
  name: "tradeLineChart",
  props: ["chartData","title"],
  data: function () {
    return {
      myChart:null,
      xAxisData: [],
    };
  },
  watch:{
    chartData(val){
      this.initChart();
    },
    title(val){
    }
  },
  methods: {
    processData() {
      let seriesList = [];

      for (const name in this.chartData) {
        if (name==="World"){
          seriesList.push({
            type: "line",
            data: this.formatData(this.chartData[name]),
            showSymbol: true,
            smooth: true,
            name: name,
            markLine: {
              symbol: ['none', 'none'],
              lineStyle:{
                color: '#747474'
              },
              label:{
                formatter: '{b}'
              },
              data: [
                {
                  name: "Financial Crisis of 2007-2008",
                  xAxis: this.xAxisData.indexOf(2008),
                },
                {
                  name: "Breakout of COVID-19 in 2020",
                  xAxis: this.xAxisData.indexOf(2020),
                }
              ]
            }
          });
          continue;
        }
        seriesList.push({
          type: "line",
          data: this.formatData(this.chartData[name]),
          showSymbol: true,
          smooth: true,
          name: name,
        });
      }
      return seriesList;
    },
    formatData(row){
      return row.map(e => e.toFixed(2));
    },
    range(start, end) {
      return Array(end - start + 1)
        .fill()
        .map((_, idx) => start + idx);
    },
    initChart() {
      console.log("Title in chart: "+this.title);
      this.xAxisData = this.range(2005,2021);
      var seriesList = this.processData();
      var legendList = Object.keys(gdp);


      var option;
      option = {
        animationDuration:1000,
        title: {
          text: this.title,
          subtext:
            "subtitle",
          left: 45,
        },

        legend: {
          left: 100,
          bottom: 10,
          orient: "horizontal",
          data: legendList,
        },
        tooltip: {
          trigger: "axis",
        },

        xAxis: {
          type: "category",
          data: this.xAxisData,
        },
        yAxis: {
          type: "value",
          min: -15,
          max: 20,
        },
        series: seriesList,
      };

      this.myChart.setOption(option);
    },
  },
  mounted() {
    this.myChart = echarts.init(this.$refs["chart"]);
    this.initChart();
  },
}
</script>

<style scoped>

</style>
