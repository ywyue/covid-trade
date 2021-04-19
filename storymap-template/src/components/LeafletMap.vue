<template>
  <div id="leafletContainer"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";

//workaround for displaying markers:
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default {
  name: "LeafletMap",
  props: ["progress", "progressThreshold"],
  mounted: function () {
    const map = L.map("leafletContainer", {
      zoomControl: false,
      zoomSnap: 0.01,
    }).setView([51.5, -0.09], 14);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([51.5, -0.09])
      .addTo(map)
      .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
      .openPopup();

    L.control
      .zoom({
        position: "topright",
      })
      .addTo(map);

    this.map = map;
  },
  data: function () {
    return {
      map: null,
    };
  },
  watch: {
    progress: function (progress) {
      let zoomLevel;

      if (progress < 0) {
        //start zooming when half of the map is scrolled
        zoomLevel = 14;
      } else if (progress < this.progressThreshold) {
        //only zoom until the map is within the viewport
        //normalize the progress value so that values are between 0 and 1
        zoomLevel = 14 + (progress / this.progressThreshold) * 2;
      } else {
        //stop zooming when the map has been scrolled out of the viewport
        zoomLevel = 16;
      }

      this.map.setView([51.5, -0.09], zoomLevel);
    },
  },
};
</script>

<style scoped lang="scss">
#leafletContainer {
  height: 100%;
  width: 80%;
}
</style>
