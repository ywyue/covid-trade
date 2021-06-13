<template>
  <q-page>
    <div class="text-center text-h1">Global situaion</div>
    <!--    gdp line chart -->
    <div class="row items-start text-center">
      <div class="col-12 col-md-6 text-left">
        <div class="text-h4">
          GDP Changes
        </div>
        <div class="text-body1">
          text...
        </div>
      </div>
      <div class="col-12 col-md-6" >
        <GDPLineChart ref="gdpChart"/>
      </div>
    </div>
    <!--    trade export & import line chart   -->
    <div class="row items-start text-center" >
      <div class="col-12 col-md-6 text-left">
        <trade-line-chart :chartData="importJson" title="Import" ref="trade1"/>
      </div>
      <div class="col-12 col-md-6 text-left">
        <trade-line-chart :chartData="exportJson" title="Export" ref="trade2"/>
      </div>
    </div>
    <!--    Weekly Ship Port Calls   -->
  </q-page>

</template>

<script>
import GDPLineChart from "components/charts/GDPLineChart";
import TradeLineChart from "components/charts/tradeLineChart";
import {tradeImport, tradeExport} from "assets/json/worldData";


export default {
name: "GlobalSituation",
  components: {TradeLineChart, GDPLineChart},
  data: function() {
    return{
      importJson: tradeImport,
      exportJson: tradeExport,
    }
  },
  methods:{
  }
}
</script>

<style scoped>

</style>
