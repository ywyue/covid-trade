<template>
  <div>
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="text-h6">Gross Domestic Product Change Rate between 2019 and 2020</div>
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
            <span id="zero-text">0</span>
            <span id="positive-text">+ 40.0%</span>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        Some text.....

      </div>
    </div>
  </div>
</template>

<script>
import GlobeGDP from "components/maps/GlobeGDP";
export default {
  name: "GlobeLayout",
  components: { GlobeGDP },
  data() {
    return {
      globeSizePercent: 0.99, //use 99% of the div
      globeWidth: 0,
      globeHeight: 0,
    };
  },
  mounted() {
    this.globeWidth =
      this.$refs.mapviewContainer.getBoundingClientRect().width *
      this.globeSizePercent;
    this.globeHeight =
      this.$refs.mapviewContainer.getBoundingClientRect().height *
      this.globeSizePercent;
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
  background:linear-gradient(to left, #ffffff, #084080)
}

#positive-bar {
  display: inline-block;
  width: 30%;
  height: 15px;
  margin-right: 0;
  margin-left: 1px;
  background:linear-gradient(to right, #ffffff, #7F0000)
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
