<template>
  <q-page>
    <session-banner
      img-url="images/container3.jpg"
      title="China's Trade During COVID-19"
      subtitle="The health crisis has unleashed a global economic shock"
    />
    <subsession-title title="Visualization of China's trade flow" />

    <div class="row justify-center">
      <div class="col-12 col-md-8">
        <div class="text-body1 q-mt-lg q-mb-lg">
          Since 2014, China is not only the world's largest exporter, but also
          the largest trading nation in terms of the sum of its exports and
          imports. According to UN Comtrade Database, China exported $259.06
          billion in goods in 2020 while it imported $205.559 billion. Despite
          the impact of COVID, China’s exports have increased by 3.68% in 2020

          <q-space class="q-ma-md" />
          The U.S. has been the TOP 1 export destination of Chinese goods for
          the past 5 years. Regarding imports, most of China's imports come from
          South Korea, Japan and the United States.
        </div>
      </div>
    </div>

    <div
      class="flourish-embed flourish-globe"
      data-src="visualisation/6468975"
      data-url="https://flo.uri.sh/visualisation/6468975/embed"
    ></div>

    <div class="row justify-center">
      <div class="col-12 col-md-8">
        <div class="text-body1 q-mt-lg q-mb-lg">
          Detailed information about the types of commodities traded of China in
          2020 can be found from the tree map below. The most recent imports of
          China are led by Crude Petroleum (26.19%), Iron Ore (17.67%), and
          Petroleum Gas (6.25%).

          <q-space class="q-ma-md" />
          The most recent exports are led by
        </div>
      </div>
    </div>

    <div>
      <trade-commodity-destination />
    </div>
  </q-page>
</template>

<script>
import TestSunburst from "components/charts/testSunburst";
import tradeCartogram from "components/maps/tradeCartogram";
import SessionBanner from "components/tools/SessionBanner";
import SubsessionTitle from "components/tools/SubsessionTitle";
import TradeCommodityDestination from "components/contents/ChinaSituation/tradeCommodityDestination";

export default {
  name: "ChinaSituation",
  components: {
    TradeCommodityDestination,
    SubsessionTitle,
    SessionBanner,
    TestSunburst,
    tradeCartogram,
  },
  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://public.flourish.studio/resources/embed.js"
    );
    document.head.appendChild(recaptchaScript);
  },
  methods: {},
};
</script>

<style scoped>
.sizecontrol {
  width: 100px;
}
.black-content {
  background-color: #121212;
}
</style>
