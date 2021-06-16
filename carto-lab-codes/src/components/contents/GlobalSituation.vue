<template>
  <q-page>
    <div class="text-center text-h2">Global situaion</div>
    <!--    gdp line chart -->
    <div class="row items-start text-center">
      <div class="col-12 col-md-6 text-left">
        <div class="text-h4">GDP Changes</div>
        <div class="text-body1">text...</div>
      </div>
      <div class="col-12 col-md-6">
        <GDPLineChart ref="gdpChart" />
      </div>
    </div>
    <!--    trade export & import line chart   -->
    <div class="row items-start text-center">
      <div class="col-12 col-md-6 text-left">
        ...
      </div>
      <div class="col-12 col-md-6 text-left">
        <trade-line/>
      </div>
    </div>
    <!--    Weekly Port Calls  -->
    <div class="row items-start">
      <div class="col-12">
        <weekly-port-call-line-chart />
      </div>
    </div>
    <!--    Global Trade Map  -->
    <div class="row items-start">
      <div class="col-12">
        <div class="text-h5">
          World trades by country and region (2005-2020)
        </div>
        <GlobalMap />
      </div>
    </div>
  </q-page>
  <q-page>
<!--    Major economies: decline in trade -->
    <div style="height:90vh; width:90vw">
      <key-eco-trade-table/>
<!--      <trade-decline-map/>-->
    </div>

  </q-page>
</template>

<script>
import GDPLineChart from "components/charts/GDPLineChart";
import tradeLine from "components/contents/GlobalSituation/tradeLine";
import GlobalMap from "components/maps/globalMap.vue";
import WeeklyPortCallLineChart from "components/charts/WeeklyPortCallLineChart";
import TradeDeclineMap from "components/maps/TradeDeclineMap";
import KeyEcoTradeTable from "components/charts/KeyEcoTradeTable";

export default {
  name: "GlobalSituation",
  components: {
    tradeLine,
    KeyEcoTradeTable, TradeDeclineMap, WeeklyPortCallLineChart, GDPLineChart, GlobalMap },

  data: function () {
    return {
    };
  },
  methods: {},
};
</script>

<style scoped></style>
