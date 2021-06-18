<template>
  <div ref="chart" style="height: 500px; width: 100%"></div>
</template>

<script>
import * as echarts from "echarts";
import json from "../../assets/json/comtrade-cartogram.json";

let myChart;

export default {
  name: "chinaTradeDestinationPieChart",
  props: ["column"],
  data() {
    return {
      chartData: null,
      chartTitle: "",
      seriesNameMap: {
        Import: "China imports from",
        Export: "China exports to",
      },
      seriesName: null,
      commodity: null,
      jsonData: json,
    };
  },
  watch: {
    column(val) {
      this.processData(val);
      this.initChart();
    },
  },
  methods: {
    processData(val) {
      let rec = val.split("-");
      let direction = rec[1];
      let commodity = rec[0];
      this.seriesName = this.seriesNameMap[rec[1]];
      this.commodity = rec[2];

      // Only show top 10 destinations; aggregate the other countries value
      let updateData = this.jsonData[commodity][direction];
      updateData.sort((a, b) => (a.value < b.value ? 1 : -1));
      console.log(updateData);
      this.chartData = [];
      let otherTotal = 0;
      updateData.forEach((item, idx) => {
        console.log(idx);
        if (idx < 10) {
          this.chartData.push(item);
        } else {
          otherTotal += item.value;
        }
      });
      this.chartData.push({
        name: "Other Regions",
        value: otherTotal,
        itemStyle: {
          color: "#c1c1c1",
        },
      });
    },
    initChart() {
      var option = {
        title: {
          text: "Share of trade volume by regions " + this.seriesName,
          subtext: "Commodity Type: " + this.commodity,
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          show: true,
          top: "90%",
          left: "center",
        },
        series: [
          {
            name: this.seriesName,
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 0,
              borderColor: "#fff",
              borderWidth: 1,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold",
                formatter: "{b}\n{d}%",
              },
            },
            labelLine: {
              show: false,
            },
            data: this.chartData,
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
  mounted() {
    myChart = echarts.init(this.$refs["chart"]);
    this.processData("Overall-Import-Overall");
    this.initChart();
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  },
};
</script>

<style scoped></style>
