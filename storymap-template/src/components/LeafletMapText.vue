<template>
  <div class="center leaflet-map-text">
    <div class="text-body1">You could create 2D maps with Leaflet</div>
    <div class="text-body1">
      ... and change their content based on the scrolling position.
    </div>
  </div>
</template>

<script>
export default {
  name: "LeafletMapText",
};
</script>
<style scoped lang="scss">
.leaflet-map-text {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 17px;
  width: 20%;
  height: 100%;
  text-align: center;
}
</style>
