<template>
<div ref="chart" style="height: 450px"></div>
</template>

<script>
import * as echarts from "echarts";
import {gdp, index, portCall2019, portCall2020} from "../../assets/json/worldData";
export default {
  name: "WeeklyPortCallLineChart",
  data: function(){
    return{
      title:"Global Weekly Port Calls in 2019 and 2020",
      subtitle:"Calculated from UN Marketplace AIS: Weekly Port Calls data dashboard.",
      sublink:"https://marketplace.officialstatistics.org/ais-weekly-port-calls"
    }
  },
  methods:{
    processSeries(){
      var seriesList = [];

      seriesList.push({
        type: "line",
        data: portCall2019,
        showSymbol: false,
        smooth: true,
        name: "2019",
      });

      seriesList.push({
        type: "line",
        data: portCall2020,
        showSymbol: false,
        smooth: true,
        name: "2020",
      });
      return seriesList;
    },
    initChart() {
      var seriesList = this.processSeries();
      var legendList = ["2019","2020"];

      var myChart = echarts.init(this.$refs["chart"]);
      var option;
      option = {
        animationDuration:1000,
        title: {
          text: this.title,
          subtext: this.subtitle,
          sublink: this.sublink,
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
          name: "Week",
          type: "category",
          data: index,
        },
        yAxis: {
          type: "value",
          name:"Port Calls",
          nameLocation:"center",
          nameGap:45,
          min: 20000,
          max: 35000,
          axisLabel:{
            formatter: function(value){
              let text = (value/1000).toFixed(0);
              return text+'K'
            }
          }
        },
        series: seriesList,
      };

      myChart.setOption(option);
    }
  },
  mounted() {
    this.initChart();
  },
}
</script>

<style scoped>

</style>
