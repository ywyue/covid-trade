<template>
  <q-page>
    <div class="text-center text-h2">Introduction</div>
    <q-space class="q-ma-xl"/>
    <div>
      <timeline-covid/>
    </div>
    <q-space class="q-ma-xl"/>
    <div class="text-center items-center row justify-center">
      <div class="col-12 col-md-8">
        <div class="text-body1">
          Since the outbreak of the coronavirus disease of 2019 (COVID-19), more than 1 million people
          have lost their lives due to the pandemic, and the global economy is expected to contract
          by a staggering 4.3% in 2020. Millions of jobs have already been lost, millions of
          livelihoods are at risk, and an estimated additional 130 million people will be living in extreme
          poverty if the crisis persists.
        </div>
      </div>
    </div>
    <q-space class="q-ma-xl"/>
    <!--    Key Numbers   -->
    <div class="row items-start text-center justify-center" v-intersection="startAnim">
      <div class="col-12 col-md-3">
        <number-counter
          number="1"
          unit="million+"
          title="deaths due to the pandemic"
          img-src="images/virus.svg"
          ref="c1"
        />
      </div>
      <div class="col-12 col-md-3">
        <number-counter
          number="4.3"
          unit="percent"
          title="contraction of global gross domestic product estimated for 2020"
          img-src="images/economic_down.svg"
          ref="c2"
        />
      </div>
      <div class="col-12 col-md-3">
        <number-counter
          number="130"
          unit="million"
          title="more people living in extreme poverty due to the crisis"
          img-src="images/help.svg"
          ref="c3"
        />
      </div>
    </div>
    <q-space class="q-ma-xl" />
    <GlobeLayout/>
  </q-page>
</template>

<script>
import NumberCounter from "components/tools/NumberCounter";
import GlobeLayout from "components/contents/Intro/GlobeLayout";
import TimelineCovid from "components/contents/Intro/TimelineCovid";


export default {
  name: "Introduction",
  components: {TimelineCovid, GlobeLayout, NumberCounter },
  data: function () {
    return {};
  },
  methods: {
    startAnim() {
      this.$refs.c1.startAnim();
      this.$refs.c2.startAnim();
      this.$refs.c3.startAnim();
    },
  },
};
</script>

<style lang="scss" scoped></style>
