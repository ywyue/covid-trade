<template>
  <q-page>
    <div class="text-center text-h2">Introduction</div>
    <!--    Key Numbers   -->
    <div class="row items-start text-center" v-intersection="startAnim">
      <div class="col-12 col-md-4">
        <number-counter
          number="1"
          unit="million+"
          title="deaths due to the pandemic"
          img-src="images/virus.svg"
          ref="c1"
        />
      </div>
      <div class="col-12 col-md-4">
        <number-counter
          number="4.3"
          unit="percent"
          title="contraction of global gross domestic product estimated for 2020"
          img-src="images/economic_down.svg"
          ref="c2"
        />
      </div>
      <div class="col-12 col-md-4">
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
  </q-page>
</template>

<script>
import NumberCounter from "components/tools/NumberCounter";

export default {
  name: "Introduction",
  components: { NumberCounter },
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
