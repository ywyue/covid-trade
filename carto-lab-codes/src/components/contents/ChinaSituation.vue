<template>
  <q-page>
    <session-banner
      img-url="images/container3.jpg"
      title="China Trade During COVID-19"
      subtitle="The health crisis has unleashed a global economic shock"
    />
    <subsession-title title="COVID-19 Impacts the Global Economy" />
    <div
      class="flourish-embed flourish-globe"
      data-src="visualisation/6440972"
      data-url="https://flo.uri.sh/visualisation/6440972/embed"
    ></div>
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
