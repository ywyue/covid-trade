<template>
  <div ref="chart" style="height: 500px; width: 100%" />
</template>

<script>
import * as echarts from "echarts";
import json from "../../assets/json/comtrade-treemap-h1.json";

export default {
  name: "chinaTradeTreemap",
  data() {
    return {
      options: {},
      jsonData: json,
      categories: ["Import", "Export"],
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
      newNode.value = (node.value || []).slice();
      return newNode;
    },
    createSeriesCommon(mode) {
      let self = this;
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
              let trade_mode = self.categories[mode];
              let share =
                (params.value[0] / self.jsonData[trade_mode]["total"]) * 100;
              var arr = [
                "{name|" + params.name + "}",
                "{hr|}",
                "{budget|" + share.toFixed(2) + "%} {label|" + trade_mode + "}",
                "{household|$ " +
                  echarts.format.addCommas(params.value[0]) +
                  "}",
              ];

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
        let trade_mode = self.categories[mode];
        let share = (amount / self.jsonData[trade_mode]["total"]) * 100;
        amount = self.isValidNumber(amount)
          ? formatUtil.addCommas(amount) + "$"
          : "-";

        return [
          '<div class="tooltip-title" style="width:400px; white-space:pre-wrap">' +
            formatUtil.encodeHTML(info.name) +
            '</div><hr/><table style="width:400px; white-space:pre-wrap">',
          "<tr><th class='text-left'>2020 " +
            self.categories[mode] +
            " (USD):</th><th class='text-right'> &nbsp;&nbsp;" +
            amount +
            "</th></tr>",
          "<tr><th class='text-left'>Share among total " +
            trade_mode.toLowerCase() +
            ":</th><th class='text-right'> " +
            share.toFixed(2) +
            "%</th></tr></table>",
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

    let modes = this.categories;
    let self = this;
    this.options = {
      title: {
        top: 5,
        left: "center",
        text: "Trade Volume of China by Commodity, 2020",
        subtext: "Calculated from COMTRADE Database",
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
        seriesOpt.roam = false;
        seriesOpt.top = 80;
        seriesOpt.visualDimension = idx === 2 ? 2 : null;
        seriesOpt.data = self.buildData(idx, self.jsonData[mode]["tree"]);
        seriesOpt.levels = self.getLevelOption(idx);
        return seriesOpt;
      }),
    };

    myChart.setOption(this.options);

    myChart.on("click", function (params) {
      if (params.data) {
        // console.log(params.data);
        // console.log(params.seriesName);
        let direct = params.seriesName;
        let commodityCode = params.data.id.toString();
        let h1Code = 0;
        if (commodityCode.length % 2 !== 0) {
          h1Code = commodityCode.substring(0, 1);
        } else {
          h1Code = commodityCode.substring(0, 2);
        }
        // console.log(h1Code);
        self.$emit("updateCommodity", h1Code, direct, params.data.name);
      }
    });
    myChart.on("legendselectchanged", function (params) {
      let direct = params.name;
      self.$emit("updateCommodity", "Overall", direct, "Overall");
      // console.log(params);
    });

    window.addEventListener("resize", function () {
      myChart.resize();
    });
  },
};
</script>

<style scoped lang="scss"></style>
