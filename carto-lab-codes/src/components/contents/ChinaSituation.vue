<template>
  <q-page>
    <session-banner
      img-url="images/container.jpg"
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
      <china-trade-treemap />
      <!--      <test-sunburst />-->
    </div>
    <tradeCartogram />
  </q-page>
</template>

<script>
import ChinaTradeTreemap from "components/charts/chinaTradeTreemap";
import TestSunburst from "components/charts/testSunburst";
import tradeCartogram from "components/maps/tradeCartogram";
import SessionBanner from "components/tools/SessionBanner";
import SubsessionTitle from "components/tools/SubsessionTitle";
export default {
  name: "ChinaSituation",
  components: {
    SubsessionTitle,
    SessionBanner,
    TestSunburst,
    ChinaTradeTreemap,
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
