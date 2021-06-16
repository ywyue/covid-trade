<template>
  <div ref="chart" style="height: 500px; width: 800px" />
</template>

<script>
import * as echarts from "echarts";
import json from "../../assets/json/comtrade-treemap.json";

export default {
  name: "chinaTradeTreemap",
  data() {
    return {
      options: {},
      jsonData: json,
      // household_america_2012: 113616229,
    };
  },
  methods: {
    buildData(mode, originList) {
      var out = [];

      for (var i = 0; i < originList.length; i++) {
        var node = originList[i];
        var newNode = (out[i] = this.cloneNodeInfo(node));
        var value = newNode.value;

        if (!newNode) {
          continue;
        }

        // // Calculate amount per household.
        // value[3] = value[0] / this.household_america_2012;

        // // if mode === 0 and mode === 2 do nothing
        // if (mode === 1) {
        //   // Set 'Change from 2010' to value[0].
        //   var tmp = value[1];
        //   value[1] = value[0];
        //   value[0] = tmp;
        // }

        if (node.children) {
          newNode.children = this.buildData(mode, node.children);
        }
      }

      return out;
    },
    cloneNodeInfo(node) {
      if (!node) {
        return;
      }
      var newNode = {};
      newNode.name = node.name;
      newNode.id = node.id;
      // newNode.discretion = node.discretion;
      newNode.value = (node.value || []).slice();
      return newNode;
    },
    createSeriesCommon(mode) {
      return {
        type: "treemap",
        nodeClick: "zoomToNode",
        tooltip: {
          formatter: this.getTooltipFormatter(mode),
        },
        label: {
          normal: {
            position: "insideTopLeft",
            formatter: function (params) {
              var arr = [
                "{name|" + params.name + "}",
                "{hr|}",
                "{budget|$ " +
                  echarts.format.addCommas(params.value[0]) +
                  "} {label|budget}",
              ];

              // mode !== 1 &&
              //   arr.push(
              //     "{household|$ " +
              //       echarts.format.addCommas(
              //         +params.value[3].toFixed(4) * 1000
              //       ) +
              //       "} {label|per household}"
              //   );

              return arr.join("\n");
            },
            rich: {
              budget: {
                fontSize: 22,
                lineHeight: 30,
                color: "yellow",
              },
              household: {
                fontSize: 14,
                color: "#fff",
              },
              label: {
                fontSize: 9,
                backgroundColor: "rgba(0,0,0,0.3)",
                color: "#fff",
                borderRadius: 2,
                padding: [2, 4],
                lineHeight: 25,
                align: "right",
              },
              name: {
                fontSize: 12,
                color: "#fff",
              },
              hr: {
                width: "100%",
                borderColor: "rgba(255,255,255,0.2)",
                borderWidth: 0.5,
                height: 0,
                lineHeight: 10,
              },
            },
          },
        },
        itemStyle: {
          normal: {
            borderColor: "black",
          },
        },
        levels: this.getLevelOption(0),
      };
    },
    isValidNumber(num) {
      return num != null && isFinite(num);
    },
    getTooltipFormatter(mode) {
      let formatUtil = echarts.format;
      let self = this;
      return function (info) {
        var value = info.value;
        var amount = value[0];
        amount = self.isValidNumber(amount)
          ? formatUtil.addCommas(amount) + "$"
          : "-";

        return [
          '<div class="tooltip-title">' +
            formatUtil.encodeHTML(info.name) +
            "</div>",
          "2020 Amount (USD): &nbsp;&nbsp;" + amount + "<br>",
        ].join("");
      };
    },
    getLevelOption(mode) {
      return [
        {
          color:
            mode === 2
              ? [
                  "#c23531",
                  "#314656",
                  "#61a0a8",
                  "#dd8668",
                  "#91c7ae",
                  "#6e7074",
                  "#61a0a8",
                  "#bda29a",
                  "#44525d",
                  "#c4ccd3",
                ]
              : null,
          colorMappingBy: "id",
          itemStyle: {
            normal: {
              borderWidth: 3,
              gapWidth: 3,
            },
          },
        },
        {
          colorAlpha: mode === 2 ? [0.5, 1] : null,
          itemStyle: {
            normal: {
              gapWidth: 1,
            },
          },
        },
      ];
    },
  },
  mounted() {
    var myChart = echarts.init(this.$refs["chart"]);
    myChart.showLoading();
    myChart.hideLoading();

    let modes = ["2020 Export"];
    let self = this;
    this.options = {
      title: {
        top: 5,
        left: "center",
        text: "China Import Commodity 2020",
        subtext: "COMTRADE Database",
      },

      legend: {
        data: modes,
        selectedMode: "single",
        top: 55,
        itemGap: 5,
        borderRadius: 5,
      },

      tooltip: {},

      series: modes.map(function (mode, idx) {
        let seriesOpt = self.createSeriesCommon(idx);
        seriesOpt.name = mode;
        seriesOpt.roam = true;
        seriesOpt.top = 80;
        seriesOpt.visualDimension = idx === 2 ? 2 : null;
        seriesOpt.data = self.buildData(idx, self.jsonData);
        seriesOpt.levels = self.getLevelOption(idx);
        return seriesOpt;
      }),
    };

    myChart.setOption(this.options);

    myChart.on("click", function(params){
      if(params.data){
        console.log(params.data);
      }
    });
  },
};
</script>

<style scoped></style>
