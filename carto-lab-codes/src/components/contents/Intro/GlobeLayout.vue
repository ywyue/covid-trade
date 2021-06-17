<template>
  <div>
    <div class="row">
      <div class="col-12 col-md-6">
        <div ref="mapviewContainer">
          <q-resize-observer @resize="onResize" />
          <GlobeGDP ref="mapViewer"
                    class="flex flex-center"
                    :width="globeWidth" :height="globeHeight"/>
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
  components: {GlobeGDP},
  data() {
    return {
      globeSizePercent: 0.99, //use 99% of the div
      globeWidth: 0,
      globeHeight:0,
    };
  },
  mounted() {
    this.globeWidth = this.$refs.mapviewContainer.getBoundingClientRect().width * this.globeSizePercent;
    this.globeHeight = this.$refs.mapviewContainer.getBoundingClientRect().height * this.globeSizePercent;
  },
  methods: {
    onResize(size) {
      // Adjust the globe size when the window resized
      this.globeWidth = size.width * this.globeSizePercent;
      this.globeHeight = size.height * this.globeSizePercent;
      this.$refs.mapViewer.resizeMap(this.globeWidth, this.globeHeight);
    },
  }
}
</script>

<style scoped>

</style>
