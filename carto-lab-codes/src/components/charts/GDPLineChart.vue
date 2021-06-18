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
          markArea: {
            itemStyle: {
              color: "rgba(88,88,88,0.1)",
            },
            label: {
              position: "insideTopRight",
              textBorderColor: "rgb(255,255,255)",
              color: "rgb(92,92,92)",
            },
            data: [
              [{ name: "Outbreak of COVID-19", xAxis: 15 }, { xAxis: 16 }],
              [{ name: "Global Financial Crisis", xAxis: 3, label:{position:"insideBottomRight"} }, { xAxis: 4 }],
            ],
          },
        });
      }
      return seriesList;
    },
    formatData(row) {
      return row.map((e) => e.toFixed(2));
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
          "Data from IMF World Economic Outlook Database. Value in 2021 is the forecast.",
        left: "center",
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

    window.addEventListener("resize", function () {
      myChart.resize();
    });
  },
};
</script>

<style scoped></style>
