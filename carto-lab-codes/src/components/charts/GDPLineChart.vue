<template>
  <div ref="chart" style="height: 450px"></div>
</template>

<script>
import * as echarts from "echarts";
import { gdp } from "../../assets/json/worldData";

export default {
  name: "GDPLineChart",
  data: function () {
    return {};
  },
  methods: {
    processData() {
      let seriesList = [];

      for (const name in gdp) {
        seriesList.push({
          type: "line",
          data: this.formatData(gdp[name]),
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
  },
  mounted() {
    var seriesList = this.processData();
    var legendList = Object.keys(gdp);


    var myChart = echarts.init(this.$refs["chart"]);
    var option;
    option = {
      title: {
        text: "Annual percent change of gross domestic product (GDP)",
        subtext:
          "Data is collected from IMF World Economic Outlook Database. Constant prices, from 2005 to 2021.",
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
      },
      yAxis: {
        type: "value",
      },
      series: seriesList,
    };

    option.xAxis["data"] = this.range(2005, 2021);


    myChart.setOption(option);
  },
};
</script>

<style scoped></style>
