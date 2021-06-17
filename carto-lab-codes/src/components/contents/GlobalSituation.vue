<template>
  <q-page>
    <session-banner img-url="images/container.jpg"
                    title="Global Trade During COVID-19"
                    subtitle="The health crisis has unleashed a global economic shock"/>

    <!--    gdp line chart -->
    <subsession-title title="COVID-19 Impacts the Global Economy"/>
    <div class="row items-start text-center">
      <div class="col-12 col-md-6 text-left">
        <div class="text-body1">
          The strike of the pandemic to the world economy is even harder than the global financial crisis.
          <q-space class="q-ma-md"/>
          In 2020, gross domestic product (GDP) fell by around 3.3%, with an expected global recovery of 6.0%.
          Developed countries are affected more in 2020 than developing countries and expect a weaker recovery in 2021.
          <q-space class="q-ma-md"/>
          Unlike the global financial crisis of 2008/2009, developing countries experienced negative growth in 2020,
          and developed economies experienced a much deeper fall.
        </div>
      </div>
      <div class="col-12 col-md-6">
        <GDPLineChart ref="gdpChart" />
      </div>
    </div>
    <!--    trade export & import line chart   -->
    <subsession-title title="International trade plunged as the disease spread"/>
    <div class="row items-start text-center">
      <div class="col-12 col-md-6 text-left">
        <div class="text-body1">
          Widespread border closures, travel restrictions and shelter-in-place policies that economies adopted early in
          the pandemic to slow down the global contagion have disrupted productive activities, with long-term economic consequences.
          <q-space class="q-ma-md"/>
          Cross-border supply value chains have been disrupted, and there has been a significant reduction in the demand for goods and a slump in services.
          Businesses have responded by cutting wages, furloughing or laying off workers.
          <q-space class="q-ma-md"/>
          Unsurprisingly, this major global disruption is leading to reduced trade locally, regionally and globally, as supply chains are disrupted,
          production reduced and other country-specific challenges like snarl-ups at border points due to stringent coronavirus testing procedures, exacerbate the shock.
          <q-space class="q-ma-md"/>
          In 2020, the global volume of imports of goods and services decreased around 8.9% and the volume of exports decreased around 8.0% compared to 2019.
        </div>
      </div>
      <div class="col-12 col-md-6 text-left">
        <trade-line/>
      </div>
    </div>
    <!--    Weekly Port Calls  -->
    <div class="text-body1 q-mt-lg q-mb-lg">
      With 80 per cent of global trade in goods carried by sea, maritime port traffic can reflect the
      pandemic’s progress in finer temporal resolution. For the first
      10 weeks of 2020 – until about mid-March – port calls for 2019 and 2020 were almost identical.
      Afterwards, volumes for 2020 began to decline noticeably.
    </div>
    <div class="row items-start">
      <div class="col-12">
        <weekly-port-call-line-chart />
      </div>
    </div>
    <!--    Global Trade Map  -->
    <subsession-title title="Divergent Regional and Country Level Trends"/>
    <div class="text-body1 q-mt-lg q-mb-lg">
      The impact of the virus varies from regions and countries.
      According to UNCTAD, China
      and the Republic of Korea are both forecast to enjoy positive, albeit weak, positive growth in GDP in
      2020, at +1.3% and +0.1%, respectively. The Americas, both developed and
      developing, are expected to experience negative output growth in 2020.
      <q-space class="q-ma-md"/>
      Regarding the trade volume, you may use the slider in the map to explore some regions of which the trade volume was impacted largely between 2019 and 2020.

    </div>
    <div class="row">
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
    <div class="text-body1 q-mt-lg q-mb-lg">
      In terms of key economies....
    </div>
    <div>
      <div style="height:90vh; width:90vw; margin:auto">
        <key-eco-trade-table/>
      </div>
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
import SessionBanner from "components/tools/SessionBanner";
import SubsessionTitle from "components/tools/SubsessionTitle";

export default {
  name: "GlobalSituation",
  components: {
    SubsessionTitle,
    SessionBanner,
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
