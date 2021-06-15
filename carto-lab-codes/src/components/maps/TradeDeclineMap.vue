<template>
<div ref="chart" style="height:100%; width:100%"></div>
</template>

<script>
import * as echarts from "echarts";
import {worldJson} from "assets/json/worldMapJson";
import {tradeDeclineByCountry} from "assets/json/worldData";

export default {
  name: "TradeDeclineMap",
  data() {
    return {
      myChart: null,
      chartOptions: null,
      basemapJson: worldJson,
      mapLevel: 1.3,
      mapCenter:[],
      title:"title",
      subtitle:"subtitle",
      mapName: "world trade decline",
      seriesName: "trade decline",
      mapData: [],
    }
  },
  mounted(){
    this.getData();
    this.initChart();
  },
  methods:{
    getData(){
      tradeDeclineByCountry.forEach(feat=>{
        this.mapData.push({
          name:feat['name'],
          itemStyle:{
            areaColor: 'red',
            color: 'red'
          },
          label:{
            show: true,
            formatter: [
              '{title|'+feat['name']+'}{abg|}',
              '  {emptyHead|  }{valueHead|Q3}{valueHead|Q4}',
              '  {rowHead|IMP.}{value|'+feat['import-q3']+'%}{value|'+feat['import-q4']+'%}',
              '  {rowHead|EXP.}{value|'+feat['export-q3']+'%}{value|'+feat['export-q3']+'%}',
              '  {noteText|...}'
            ].join('\n'),
            backgroundColor: '#eee',
            borderColor: '#777',
            borderWidth: 1,
            borderRadius: 4,
            rich: {
              title: {
                color: '#eee',
                align: 'center'
              },
              abg: {
                backgroundColor: '#333',
                width: '100%',
                align: 'right',
                height: 25,
                borderRadius: [4, 4, 0, 0]
              },
              emptyHead: {
                color: '#333',
                height: 24,
                align: 'left'
              },
              value: {
                width: 30,
                padding: [0, 20, 0, 30],
                align: 'left'
              },
              valueHead: {
                color: '#333',
                width: 30,
                padding: [0, 20, 0, 30],
                align: 'center'
              },
            }
          }
        });
      })
    },
    initChart(){
      // Register Map
      this.myChart = echarts.init(this.$refs["chart"]);
      this.myChart.showLoading();
      echarts.registerMap(this.mapName, this.basemapJson);
      this.myChart.hideLoading();
      this.chartOptions = {
        title: {
          text: this.title,
          subtext: this.subtitle,
          left: 'left'
        },
        tooltip: {
          trigger: 'item',
          showDelay: 0,
          transitionDuration: 0.2,
          // formatter: function (params) {
          //   var country_name = jsondata.filter(value => value.ISO_A3===params.name)[0]['Entity']
          //   return params.seriesName + '<br/>' + country_name + ': ' + params.value.toFixed(2);
          // }
        },
        geo:{
          map: this.mapName,
          roam: false,
          regions: this.mapData,
          zoom: this.mapLevel,
          itemStyle: {
            borderColor: "#FFFFFF",
            borderWidth: 1.5,
          },
        }

      };
      this.myChart.setOption(this.chartOptions);

      this.chartOptions && this.myChart.setOption(this.chartOptions);
    }
  }
}
</script>

<style scoped>

</style>
