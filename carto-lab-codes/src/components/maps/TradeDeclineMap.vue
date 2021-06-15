<template>
<div ref="chart" style="height:400px"></div>
</template>

<script>
import * as echarts from "echarts";
import {worldJson} from "assets/json/worldMapJson";
export default {
  name: "TradeDeclineMap",
  data() {
    return {
      myChart: null,
      chartOptions: null,
      basemapJson: worldJson,
    }
  }
}
</script>

<style scoped>

</style>
