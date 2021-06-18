<template>
  <q-page>
    <session-banner
      img-url="images/container.jpg"
      title="Global Trade During COVID-19"
      subtitle=""
    />
    <!--    trade export & import line chart   -->
    <subsession-title
      title="International trade plunged as the disease spread"
    />
    <div class="row justify-center">
      <div class="col-12 col-md-8 text-body1">
        Widespread border closures, travel restrictions and shelter-in-place
        policies that economies adopted early in the pandemic to slow down the
        global contagion have disrupted productive activities, with long-term
        economic consequences. Cross-border supply value chains have been
        disrupted, and there has been a significant reduction in the demand for
        goods and a slump in services. Businesses have responded by cutting
        wages, furloughing or laying off workers.
        <q-space class="q-ma-md" />
        <strong
          >Unsurprisingly, this major global disruption is leading to reduced
          trade locally, regionally and globally,</strong
        >
        as supply chains are disrupted, production reduced and other
        country-specific challenges like snarl-ups at border points due to
        stringent coronavirus testing procedures, exacerbate the shock.
        <q-space class="q-ma-md" />
        <strong
          >In 2020, the global volume of imports of goods and services decreased
          around 8.9% and the volume of exports decreased around 8.0% compared
          to 2019.</strong
        >
      </div>
    </div>
    <q-space class="q-ma-xl" />
    <div class="row items-start justify-center">
      <div class="col-12 col-md-8">
        <trade-line />
      </div>
    </div>

    <q-space class="q-ma-lg" />
    <!--    Weekly Port Calls  -->
    <div class="row justify-center">
      <div class="col-12 col-md-8">
        <div class="text-body1 q-mt-lg q-mb-lg">
          <strong
            >With 80 percent of global trade in goods carried by sea, maritime
            port traffic can reflect the pandemic’s progress in finer temporal
            resolution.</strong
          >
          For the first 10 weeks of 2020 – until about mid-March – port calls
          for 2019 and 2020 were almost identical. Afterwards, volumes for 2020
          began to decline noticeably.
        </div>
      </div>
    </div>
    <q-space class="q-ma-lg" />
    <div class="row justify-center">
      <div class="col-10">
        <weekly-port-call-line-chart />
      </div>
    </div>

    <q-space class="q-ma-xl" />
    <!--    Global Trade Map  -->
    <subsession-title title="Divergent Regional and Country Level Trends" />
    <div class="row justify-center">
      <div class="col-12 col-md-8">
        <div class="text-body1 q-mt-lg q-mb-lg">
          <strong
            >The impact of the virus varies from regions and countries.</strong
          >
          According to UNCTAD, China and the Republic of Korea are both expected
          to enjoy positive, albeit weak, positive growth in GDP in 2020, at
          +1.3% and +0.1%, respectively. The Americas, both developed and
          developing, are expected to experience negative output growth in 2020.
          <q-space class="q-ma-md" />
          Regarding the trade volume, you may use the slider in the map to
          explore some regions of which the trade volume was impacted largely
          between 2019 and 2020.
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <GlobalMap />
      </div>
    </div>
    <q-space class="q-ma-xl" />
    <!--    Major economies: decline in trade -->
    <div class="row justify-center">
      <div class="col-12 col-md-8">
        <div class="text-body1 q-mt-lg q-mb-lg">

          If we zoom to the major trading economies, we can further understand how trade patterns changed during COVID-19.
          <strong>In the first half of 2020, all major economies experienced significant falls in both imports and exports
            of goods.</strong>
          The volumes of trade in goods remained lower in the third quarter of 2020 than in the same quarter
          of the previous year for almost all major economies except China and South Africa.
          In the fourth quarter of 2020, trade in goods recovered gradually across many major economies.
          <q-space class="q-ma-md"/>
          <strong>Although the major economies faced downturns of trading, China was the exception to this trend.</strong> After the recession
          in the first half year of 2020, both imports and exports of goods increased compared to the same quarter of 2019.
          In the later session, we will explore the trading and measurements of China during COVID-19,
          to further discuss the possible reasons making it as the exception.

        </div>
      </div>
    </div>
    <q-space class="q-ma-lg" />
    <div>
      <div style="height: 90vh; width: 100%">
        <key-eco-trade-table />
      </div>
    </div>
  </q-page>
</template>

<script>
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
    KeyEcoTradeTable,
    TradeDeclineMap,
    WeeklyPortCallLineChart,
    GlobalMap,
  },

  data: function () {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
