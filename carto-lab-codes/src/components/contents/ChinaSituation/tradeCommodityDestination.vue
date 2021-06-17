<template>
<div>
  <div class="row">
    <div class="col-12 col-md-7">
      <china-trade-treemap
        @updateCommodity="updateCommodity"/>
    </div>
    <div class="col-12 col-md-5">
      <china-trade-destination-pie-chart
        :column = "column"
      />
    </div>
  </div>


</div>
</template>

<script>
import ChinaTradeTreemap from "components/charts/chinaTradeTreemap";
import ChinaTradeDestinationPieChart from "components/charts/chinaTradeDestinationPieChart";
export default {
  name: "tradeCommodityDestination",
  components: {ChinaTradeDestinationPieChart, ChinaTradeTreemap},
  data() {
    return{
      column: "Overall-Import",
    }
  },
  methods:{
    updateCommodity(h1Code, direct, name){
      let columnName = h1Code+"-"+direct+"-"+name;// direct = "Import" or "Export"
      this.column = columnName;
      // console.log("Received: "+columnName);
    }
  }
}
</script>

<style scoped>

</style>
