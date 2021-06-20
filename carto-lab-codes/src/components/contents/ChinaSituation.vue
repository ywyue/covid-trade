<template>
  <q-page>
    <session-banner
      img-url="images/container3.jpg"
      title="China's Trade During COVID-19"
      subtitle=""
    />
    <subsession-title title="Visualization of China's trade flow" />

    <div class="row justify-center">
      <div class="col-12 col-md-8">
        <div class="text-body1 q-mt-lg q-mb-lg">
          Since 2014, China is not only the world's largest exporter, but also
          the largest trading nation in terms of the sum of its exports and
          imports. According to UN Comtrade Database, China exported
          <b>$259.06 billion</b> in goods in 2020 while it imported
          <b>$205.559 billion</b>. Despite the impact of COVID, China’s exports
          have increased by <b>3.68%</b> in 2020

          <q-space class="q-ma-md" />
          <b>The United States</b> has been the TOP 1 export destination of
          Chinese goods for the past 5 years. Regarding imports, most of China's
          imports come from <b>South Korea, Japan and the United States</b>.
        </div>
      </div>
    </div>

    <div
      class="flourish-embed flourish-globe"
      data-src="visualisation/6468975"
      data-url="https://flo.uri.sh/visualisation/6468975/embed"
    ></div>

    <subsession-title
      title="Commodity composition and flow of China's import and export"
    />

    <div class="row justify-center">
      <div class="col-12 col-md-8">
        <div class="text-body1 q-mt-lg q-mb-lg">
          Detailed information about the types of commodities traded of China in
          2020 can be found from the tree map below. The most recent imports of
          China are led by Mineral fuels (39.74%), Ores, slag and ash (26.74%),
          and Organic chemicals (6.77%).

          <q-space class="q-ma-md" />
          The most recent exports are led by Organic chemicals (30.99%), Mineral
          fuels (17.47%), and Inorganic chemicals (8.27%).
          <b>Medical commodities share about 0.66% of the total exports</b>.

          <q-space class="q-ma-md" />
          *<i
            >Note: The pie chart on the right will update if a product category
            on the tree map is selected.
          </i>
        </div>
      </div>
    </div>

    <div>
      <trade-commodity-destination />
    </div>
  </q-page>
</template>

<script>

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
