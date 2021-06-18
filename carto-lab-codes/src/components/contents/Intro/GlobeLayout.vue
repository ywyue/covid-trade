<template>
  <div>
    <div class="row">
      <div class="col-12 col-md-6">
        <div ref="mapviewContainer" class="q-mb-xm">
          <q-resize-observer @resize="onResize" />
          <GlobeGDP
            ref="mapViewer"
            class="flex flex-center"
            :width="globeWidth"
            :height="globeHeight"
          />
        </div>
        <div class="row q-pl-xl q-mt-xm justify-center">
          <div class="col-12 col-md-10">
            <span id="negative-bar"></span>
            <span id="positive-bar"></span>
            <br/>
            <span id="negative-text">- 60.0%</span>
            <span id="zero-text">0.0</span>
            <span id="positive-text">+ 45.0%</span>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">


      </div>
    </div>
  </div>
</template>

<script>
import GlobeGDP from "components/maps/GlobeGDP";
import * as d3 from "d3";

export default {
  name: "GlobeLayout",
  components: { GlobeGDP },
  data() {
    return {
      globeSizePercent: 0.99, //use 99% of the div
      globeWidth: 0,
      globeHeight: 0,
      positiveColorScale: d3.scaleSequentialPow(d3.interpolateBlues),
      negativeColorScale: d3.scaleSequentialPow(d3.interpolateReds),
    };
  },
  mounted() {
    this.globeWidth =
      this.$refs.mapviewContainer.getBoundingClientRect().width *
      this.globeSizePercent;
    this.globeHeight =
      this.$refs.mapviewContainer.getBoundingClientRect().height *
      this.globeSizePercent;

    console.log(this.positiveColorScale(0.5));
    console.log(this.negativeColorScale(0.5));
  },
  methods: {
    onResize(size) {
      // Adjust the globe size when the window resized
      this.globeWidth = size.width * this.globeSizePercent;
      this.globeHeight = size.height * this.globeSizePercent;
      this.$refs.mapViewer.resizeMap(this.globeWidth, this.globeHeight);
    },
  },
};
</script>

<style scoped>

#negative-bar {
  display: inline-block;
  width: 50%;
  height: 15px;
  margin-right: 0;
  margin-left: 10px;
  background:linear-gradient(to left, rgb(255,245,240), rgb(249,105,76), rgb(103,0,13));
}

#positive-bar {
  display: inline-block;
  width: 30%;
  height: 15px;
  margin-right: 0;
  margin-left: 1px;
  background:linear-gradient(to right, rgb(247,251,255), rgb(109,174,213), rgb(8,48,107));
}

#negative-text{
  display: inline-block;
  width: 50%;
  height: 15px;
  margin-right: 0px;
  margin-left: 0;
  text-align: left;
}

#zero-text {
  display: inline-block;
  width: 30%;
  height: 15px;
  margin-right: 0px;
  margin-left: 0;
  text-align: left;
}

#positive-text {
  display: inline-block;
  width: 10%;
  height: 15px;
  margin-right: 0px;
  margin-left: 0;
  text-align: left;
}
</style>
