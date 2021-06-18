<template>
  <!--  3D Globe Map -->
  <div id="globeViz"></div>
</template>

<script>
import * as d3 from "d3";
import Globe from "globe.gl";

export default {
  name: "GlobeGDP",
  props: ["width", "height"],
  data: function () {
    return {
      world: null,
      rotationSpeed: 0.85,
      globeColorScale: d3.scaleSequentialSqrt(
        d3.interpolateRgb("#FFDA67", "#5EC9DB")
      ),
      positiveColorScale: d3.scaleSequentialPow(d3.interpolateBlues),
      negativeColorScale: d3.scaleSequentialPow(d3.interpolateReds),
      dataColumn: "rate",//"gdp_2020",
      dataFilePath: "data/world_gdp_by_area.geojson",
      flagEndpoint: "https://corona.lmao.ninja/assets/img/flags", //url to get country flags
    };
  },
  methods: {
    initMap() {
      // Initialize the globe
      this.world = Globe()(document.getElementById("globeViz"))
        .showGlobe(false)
        .showAtmosphere(false)
        .backgroundColor("#FFFFFF")
        .lineHoverPrecision(0)
        .width(this.width)
        .height(this.height)
        .pointOfView({ lat: 0, lng: 0, altitude: 1.85 }, 4000);
      this.showLayer();
      this.autoRotate(true);
    },

    getToolTip(d, colName, title) {
      // Show the tooltip when mouse hovering on polygons
      let flagName = d.ISO_A2.toLowerCase();
      if (d.ADMIN === "France") {
        flagName = "fr";
      } else if (d.ADMIN === "Norway") {
        flagName = "no";
      } else if (d.ADMIN === "Taiwan,China") {
        flagName = "cn";
      }

      var GDP, changeRate;

      if (d.rate === null) {
        GDP = "No data";
        changeRate = "No data";
      } else {
        GDP = "$ " + this.numberWithCommas(d.gdp_2020) + " B";
        changeRate = d.rate.toFixed(2) + "%";
      }
      let div_html = `<div class="globe-viewer-tooltip-container">
                        <img class="flag-img" src="${this.flagEndpoint}/${flagName}.png"/>
                        <div class="country-title">${d.ADMIN}</div>
                        <div class="description"><table style="width: 100%">
                        <tr><th class="text-left">GDP 2020</th><th class="text-right">${GDP}</th></tr>
                        <tr><th class="text-left">Change*</th><th class="text-right">${changeRate}</th></tr>
                        </table>
                        </div><div class="text-caption">Notes: *Change percentage of GDP between 2019 and 2020.</div>
                      </div>`;

      return div_html;
    },

    numberWithCommas(x) {
      // Format numbers: 1,000,000,000
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    resizeMap(height, width) {
      // Resize the globe
      this.world.width([width]);
      this.world.height([height]);
    },

    autoRotate(auto = true) {
      // Add auto-rotation
      this.world.controls().autoRotate = auto;
      if (auto) {
        this.world.controls().autoRotateSpeed = this.rotationSpeed;
      }
    },

    showLayer() {
      // Show layer
      const getVal = (feat) => feat.properties[this.dataColumn];
      const transferVal = (feat) => Math.log(Math.abs(feat));

      fetch(this.dataFilePath)
        .then((res) => res.json())
        .then((countries) => {
          const minVal = Math.min(...countries.features.map(getVal));
          const maxVal = Math.max(...countries.features.map(getVal));
          console.log(minVal);
          console.log(maxVal);
          this.positiveColorScale.domain([0, transferVal(maxVal)]);
          this.negativeColorScale.domain([0, transferVal(-minVal)]);
          this.world
            .polygonsData(
              countries.features.filter((d) => d.properties.ISO_A3 !== "AQ")
            )
            .polygonAltitude(0.06)
            .polygonCapColor((d) =>
              d.properties[this.dataColumn] === null
                ? "#2F4F4F"
                : getVal(d)>0
                ? this.positiveColorScale(transferVal(getVal(d)))
                : this.negativeColorScale(transferVal(getVal(d)))
            )
            .polygonSideColor(() => "rgba(255,255,255,0.15)")
            .polygonStrokeColor(() => "rgba(40,70,70,0.65)")
            .polygonLabel(({ properties: d }) =>
              this.getToolTip(d, this.dataColumn, "Percent Change of GDP")
            )
            .onPolygonHover((hoverD) =>
              this.world
                .polygonAltitude((d) => (d === hoverD ? 0.12 : 0.06))
                .polygonCapColor((d) =>
                  d === hoverD
                    ? "#2F4F4F"
                    : d.properties[this.dataColumn] === null
                    ? "#2F4F4F"
                    : getVal(d)>0
                      ? this.positiveColorScale(transferVal(getVal(d)))
                      : this.negativeColorScale(transferVal(getVal(d)))
                )
            )
            .polygonsTransitionDuration(300);
        });
    },
  },
  mounted() {
    this.initMap();
  },
};
</script>

<style scoped></style>
