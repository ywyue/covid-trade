<template>
<div>
  <div class="q-gutter-sm">
    <q-radio
      v-model="trade_mode"
      val="exports"
      label="Export"
      color="teal"
      v-on:click.enter="updateData"
    />
    <q-radio
      v-model="trade_mode"
      val="imports"
      label="Import"
      color="cyan"
      v-on:click.enter="updateData"
    />
  </div>
  <div>
    <trade-line-chart :chartData="chartData" :title="title" ref="chart"/>
  </div>
</div>
</template>

<script>
import { tradeImport, tradeExport } from "assets/json/worldData";
import TradeLineChart from "components/charts/tradeLineChart";
export default {
  name: "tradeLine",
  components: {TradeLineChart},
  data(){
    return {
      trade_mode: 'exports',
      title: "Trade Trend between 2005 and 2021",
      chartData: tradeExport,
    }
  },
  methods:{
    updateData(){
      if(this.trade_mode==='exports'){
        console.log(this.trade_mode);
        this.chartData = tradeExport;
        this.title="export";
        this.$refs['chart'].initChart();
      }else{
        console.log(this.trade_mode);
        this.chartData = tradeImport;
        this.title="import";
        this.$refs['chart'].initChart();
      }
    }
  }
}
</script>

<style scoped>

</style>
