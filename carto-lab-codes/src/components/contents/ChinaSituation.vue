<template>
  <q-page>
    <session-banner
      title="China ...."
      subtitle="subtitle....."
      img-url="images/container.jpg"
    />
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
export default {
  name: "ChinaSituation",
  components: { TestSunburst, ChinaTradeTreemap, tradeCartogram },
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
