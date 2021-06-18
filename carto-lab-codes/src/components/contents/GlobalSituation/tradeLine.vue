<template>
<div>
  <div style="height:450px">
    <trade-line-chart :chartData="chartData" :title="title" ref="chart"/>
  </div>
  <div class=" row justify-center q-ml-md q-mr-md q-pl-sm q-pr-sm items-center" style="background-color:#e3e3e3">
    <div class="col-12 col-md-2 text-left" >
      <q-radio
        v-model="trade_mode"
        val="exports"
        label="Export"
        color="teal"
        v-on:click.enter="updateData"
      />
    </div>
    <div class="col-12 col-md-2 text-left" >
      <q-radio
        v-model="trade_mode"
        val="imports"
        label="Import"
        color="cyan"
        v-on:click.enter="updateData"
      />
    </div>
    <div class="col-12 col-md-7 " >
      <div class="text-caption text-right">Data from IMF World Economic Outlook Database. Value in 2021 is the forecast.</div>
    </div>
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
      title: "Trade Trend between 2005 and 2021: Exports",
      chartData: tradeExport,
    }
  },
  methods:{
    updateData(){
      if(this.trade_mode==='exports'){
        this.chartData = tradeExport;
        this.title="Trade Trend between 2005 and 2021: Exports";
      }else{
        this.chartData = tradeImport;
        this.title="Trade Trend between 2005 and 2021: Imports";
      }
    }
  }
}
</script>

<style scoped>

</style>
