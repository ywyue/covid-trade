<template>
  <q-page>
    <Background />
    <div class="text-center text-h2">Introduction</div>
    <q-space class="q-ma-xl" />
    <div>
      <timeline-covid />
    </div>
    <q-space class="q-ma-xl" />
    <div class="text-center items-center row justify-center">
      <div class="col-12 col-md-8">
        <div class="text-body1">
          Since the outbreak of the coronavirus disease of 2019 (COVID-19), more
          than 1 million people have lost their lives due to the pandemic, and
          the global economy is expected to contract by a staggering 4.3% in
          2020. Millions of jobs have already been lost, millions of livelihoods
          are at risk, and an estimated additional 130 million people will be
          living in extreme poverty if the crisis persists.
        </div>
      </div>
    </div>
    <q-space class="q-ma-xl" />
    <!--    Key Numbers   -->
    <div
      class="row items-start text-center justify-center"
      v-intersection="startAnim"
    >
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

    <!--    Global Economy: GDP Change -->
    <session-banner
      img-url="images/container.jpg"
      title="COVID-19 Impacts the Global Economy"
      subtitle="The health crisis has unleashed a global economic shock"
    />
    <q-space class="q-ma-xl" />
    <!--    gdp line chart -->

    <div class="row items-start justify-center">
      <div class="col-12 col-md-8">
        <div class="text-h6">
          The strike of the pandemic to the world economy is even harder than
          the global financial crisis.
        </div>
        <q-space class="q-ma-md" />
        <div class="text-body1">
          <strong
            >In 2020, gross domestic product (GDP) fell by around 3.3%, with an
            expected global recovery of 6.0% in 2021.</strong
          >
          Developed countries are affected more in 2020 than developing
          countries and expect a weaker recovery in 2021. Unlike the global
          financial crisis of 2008/2009, developing countries experienced
          negative growth in 2020, and developed economies experienced a much
          deeper fall.
        </div>
      </div>
    </div>
    <q-space class="q-ma-xl" />
    <div class="row items-start text-center justify-center">
      <div class="col-12 col-md-10">
        <GDPLineChart ref="gdpChart" />
      </div>
    </div>

    <q-space class="q-ma-md" />
    <GlobeLayout />
  </q-page>
</template>

<script>
import NumberCounter from "components/tools/NumberCounter";

import GlobeLayout from "components/contents/Intro/GlobeLayout";
import TimelineCovid from "components/contents/Intro/TimelineCovid";
import SubsessionTitle from "components/tools/SubsessionTitle";
import SessionBanner from "components/tools/SessionBanner";
import GDPLineChart from "components/charts/GDPLineChart";
// import Background from './Intro/background.vue';

export default {
  name: "Introduction",
  components: {
    SessionBanner,
    SubsessionTitle,
    TimelineCovid,
    GlobeLayout,
    NumberCounter,
    GDPLineChart,
    // Background,
  },
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
