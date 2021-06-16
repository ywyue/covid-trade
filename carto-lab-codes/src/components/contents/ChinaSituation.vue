<template>
  <q-page>
    <div class="text-center text-h2">China</div>
    <div
      class="flourish-embed flourish-globe"
      data-src="visualisation/6440972"
      data-url="https://flo.uri.sh/visualisation/6440972/embed"
    ></div>
  </q-page>
  <q-page>
    <div>
      <china-trade-treemap />
<!--      <test-sunburst />-->
    </div>
  </q-page>
</template>

<script>
import ChinaTradeTreemap from "components/charts/chinaTradeTreemap";
import TestSunburst from "components/charts/testSunburst";
export default {
  name: "ChinaSituation",
  components: { TestSunburst, ChinaTradeTreemap },
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
