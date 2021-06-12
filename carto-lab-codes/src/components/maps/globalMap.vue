<template>
  <div class="container">
    <div id="globalMap"></div>

    <div class="map-overlay" id="legend">
      <div class="q-pa-md">
        <div class="q-gutter-sm">
          <q-radio
            v-model="trade_mode"
            val="exports"
            label="Export"
            color="teal"
            v-on:click.enter="updateColor"
          ></q-radio>
          <q-radio
            v-model="trade_mode"
            val="imports"
            label="Import"
            color="cyan"
            v-on:click.enter="updateColor"
          ></q-radio>
        </div>
      </div>

      <a>Trade value (Million USD)</a>
      <div v-for="item in items" :key="item">
        <span
          class="legend-key"
          v-bind:style="'background-color:' + item.color"
        ></span
        ><span>{{ item.value }}</span>
      </div>

      <br />

      <label id="year">Year: {{ sliderValue }}</label>
      <input
        id="slider"
        type="range"
        min="2005"
        max="2020"
        step="1"
        v-model="sliderValue"
        v-on:change="updateColor"
      />
    </div>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";

export default {
  data() {
    return {
      trade_mode: "exports",
      map: "",
      accessToken:
        "pk.eyJ1IjoieXVleXVhbndlbiIsImEiOiJja25zOXhtNTYyZzZ2MnZueG1tZmRoaTZmIn0.T7uJoZ3bRJs9f82LjGc-Hw",
      items: [],
      sliderValue: "2015",
      year: "2015",
    };
  },
  methods: {
    updateColor: function () {
      this.map.setPaintProperty("countries-layer", "fill-color", [
        "case",
        ["==", ["get", this.trade_mode + "_" + this.sliderValue], null],
        "white",
        [
          "step",
          ["get", this.trade_mode + "_" + this.sliderValue],
          "#EF7A4E",
          500,
          "#F19563",
          1000,
          "#F3AE7D",
          10000,
          "#F8DCBC",
          100000,
          "#C6DBB4",
          500000,
          "#9FD0A8",
          1000000,
          "#6DC6A6",
          2000000,
          "#08BAAD",
        ],
      ]);
    },
  },

  mounted() {
    mapboxgl.accessToken = this.accessToken;

    console.log(this.items);

    console.log(this.sliderValue);
    var bounds = [
      [-180, -57.27879], // Southwest coordinates
      [180, 78.11794], // Northeast coordinates
    ];

    var map = new mapboxgl.Map({
      container: "globalMap",
      style: "mapbox://styles/mapbox/light-v10",
      center: [-2.82308, 27.28041],
      zoom: 1.49,
      maxBounds: bounds, // Sets bounds as max
    });

    var hoveredStateId = null;

    map.on("load", () => {
      // define legend contents
      var values = [
        " [0, 500)",
        " [500, 1k)",
        " [1k, 10k)",
        " [10k, 100k)",
        " [100k, 500k)",
        " [500k, 1000k)",
        " [1000k, 2000k)",
        " 2000k+",
        " No data",
      ];
      var colors = [
        "#EF7A4E",
        "#F19563",
        "#F3AE7D",
        "#F8DCBC",
        "#C6DBB4",
        "#9FD0A8",
        "#6DC6A6",
        "#08BAAD",
        "#FFFFFF",
      ];

      var i;
      for (i = 0; i < values.length; i++) {
        var value = values[i];
        var color = colors[i];
        this.items.push({ value, color });
      }

      // Add a source for the country polygons.
      map.addSource("countries", {
        type: "geojson",
        data: "data/world_trade_by_area.geojson",
        generateId: true, // This ensures that all features have unique IDs
      });

      // Add a layer showing the country polygons.
      map.addLayer(
        {
          id: "countries-layer",
          type: "fill",
          source: "countries",
          paint: {
            "fill-color": [
              "case",
              ["==", ["get", this.trade_mode + "_" + this.sliderValue], null],
              "white",
              [
                "step",
                ["get", this.trade_mode + "_" + this.sliderValue],
                "#EF7A4E",
                500,
                "#F19563",
                1000,
                "#F3AE7D",
                10000,
                "#F8DCBC",
                100000,
                "#C6DBB4",
                500000,
                "#9FD0A8",
                1000000,
                "#6DC6A6",
                2000000,
                "#08BAAD",
              ],
            ],

            "fill-outline-color": "#d9d9d9",
            "fill-opacity": [
              "case",
              ["boolean", ["feature-state", "hover"], false],
              0.5,
              1,
            ],
          },
        },
        "waterway-label"
      );

      // Create a popup, but don't add it to the map yet.
      var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
      });

      // Change the cursor to a pointer when the mouse is over the states layer.
      // Update popup window on hover.
      map.on("mousemove", "countries-layer", (e) => {
        map.getCanvas().style.cursor = "pointer";
        console.log(this.sliderValue);

        var popupInfo;
        if (
          e.features[0].properties[this.trade_mode + "_" + this.sliderValue] !==
          "null"
        ) {
          popupInfo =
            "<strong>" +
            e.features[0].properties.name +
            "</strong>" +
            " " +
            this.trade_mode +
            " in " +
            this.sliderValue +
            ":" +
            "<br />" +
            e.features[0].properties[
              this.trade_mode + "_" + this.sliderValue
            ].toFixed(2) +
            " Million USD";
        } else {
          popupInfo =
            "<strong>" +
            e.features[0].properties.name +
            "</strong>" +
            ": No data";
        }

        popup.setLngLat(e.lngLat).setHTML(popupInfo).addTo(map);

        if (e.features.length > 0) {
          if (hoveredStateId !== null) {
            map.setFeatureState(
              { source: "countries", id: hoveredStateId },
              { hover: false }
            );
          }
          hoveredStateId = e.features[0].id;
          map.setFeatureState(
            { source: "countries", id: hoveredStateId },
            { hover: true }
          );
        }
      });

      // Change the cursor back to a pointer and remove popup when the mouse leaves.
      map.on("mouseleave", "countries-layer", function () {
        map.getCanvas().style.cursor = "";
        popup.remove();
        if (hoveredStateId !== null) {
          map.setFeatureState(
            { source: "countries", id: hoveredStateId },
            { hover: false }
          );
        }
        hoveredStateId = null;
      });
    });

    // Disable map zoom in/out using scroll
    map.scrollZoom.disable();

    // Disable map rotation using right click + drag
    map.dragRotate.disable();

    // Disable map rotation using touch rotation gesture
    map.touchZoomRotate.disableRotation();

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());

    this.map = map;
  },
};
</script>

<style scoped lang="scss">
#globalMap {
  //   position: absolute;
  width: 1300px;
  height: 600px;
}

/*Container bottom left*/

.container {
  //   position: relative;
  width: 1300px;
  height: 600px;
}

.map-overlay {
  position: absolute;
  bottom: 30px;
  left: 30px;
  background: rgba(255, 255, 255, 0.8);
  font-family: Arial, sans-serif;
  overflow: auto;
  border-radius: 3px;
  overflow-y: hidden;
}

#legend {
  padding: 10px;
  //   padding-left: 20px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  line-height: 20px;
  height: 355px;
  margin-bottom: 40px;
  width: 230px;
}

.legend-key {
  display: inline-block;
  border-radius: 20%;
  width: 10px;
  height: 10px;
  margin-left: 20px;
  //   padding-left: 20px;
}

.map-overlay input {
  background-color: transparent;
  display: inline-block;
  width: 100%;
  position: relative;
  margin: 0;
  cursor: ew-resize;
}
</style>
