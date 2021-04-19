<template>
  <div id="cesium" />
</template>
<script>
import "cesium/Build/Cesium/Widgets/widgets.css";
import { Viewer, Cartesian3 } from "cesium"; //, Ion

//Ion.defaultAccessToken = "<insert your own token>";

export default {
  mounted() {
    const viewer = new Viewer("cesium", {
      // add cesium options here
    });

    //zoom to "Story City" :)
    viewer.camera.flyTo({
      destination: Cartesian3.fromDegrees(
        -93.59611977002096,
        42.18731235422934,
        20000
      ),
      orientation: { heading: Math.PI, pitch: -Math.PI / 2, roll: Math.PI },
      duration: 3,
    });
  },
};
</script>

<style scoped lang="scss">
#cesium {
  height: 100%;
  width: 80%;
}
</style>
