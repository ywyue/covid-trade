<template>
  <q-page>
    <div id="map-container">
      <svg id="map" preserveAspectRatio="xMidYMid">
        <g id="layer"><g id="mapFeatures"></g></g>
      </svg>
      <div
        id="tooltip"
        class="ttip"
        style="left: 106.71666666666667px; top: 67.39166666666667px"
      >
        <strong>Neuchâtel</strong><br />Population: 176'402
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "ChinaSituation",
  data() {
    return {
      mapFeatures: null,
      map: null,
      width: 360,
      height: 150,
      tooltip: null,
      carto: null,
    };
  },
  mounted() {
    // Set the (initial) width and height of the map
    // Define the colors with colorbrewer
    var colors = colorbrewer.RdYlGn[3].reverse().map(function (rgb) {
      return d3.hsl(rgb);
    });

    this.map = d3
      .select("#map")
      .attr("viewBox", "0 0 " + this.width + " " + this.height);
    var layer = d3.select("#layer");
    this.mapFeatures = d3.select("#mapFeatures").selectAll("path");

    this.tooltip = d3.select("#tooltip").attr("class", "ttip hidden");
    var zoom = d3.behavior
      .zoom()
      .scaleExtent([0.5, 10])
      .on("zoom", this.doZoom);
    this.map.call(zoom);

    // Define the projection of the map (center and scale will be defined
    // later)
    var proj = d3.geo.mercator();
    // Prepare the cartogram
    var topology,
      geometries,
      dataById = {};
    this.carto = d3
      .cartogram()
      .projection(proj)
      .properties(function (d) {
        if (!dataById[d.properties.KTNAME]) {
          console.log(
            'ERROR: Entry "' +
              d.properties.KTNAME +
              '" was found in the Topojson but not in the data CSV. Please correct either of them.'
          );
        }
        // Add the cartogram data as property of the cartogram features
        return dataById[d.properties.KTNAME];
      });

    // Read the geometry data
    d3.json("data/ch_cantons.topojson", (topo) => {
      topology = topo;

      // The mapped unit for cantons: Cantons
      geometries = topology.objects.cantons.geometries;

      // Read the data for the cartogram
      d3.csv("data/ch_cantons.csv", (data) => {
        // Prepare a function to easily access the data by its ID
        // "ID" for cantons: Canton
        dataById = d3
          .nest()
          .key(function (d) {
            return d.Canton;
          })
          .rollup(function (d) {
            return d[0];
          })
          .map(data);

        // Initialize the map
        // init();
        // Create the cartogram features (without any scaling)
        var cartoFeatures = this.carto.features(topology, geometries),
          path = d3.geo.path().projection(proj);

        // Determine extent of the topology
        var b = topology.bbox;
        var t = [(b[0] + b[2]) / 2, (b[1] + b[3]) / 2];
        var s =
          0.95 /
          Math.max((b[2] - b[0]) / this.width, (b[3] - b[1]) / this.height);

        // Scale it to fit nicely
        s = s * 55;
        proj
          .scale(s)
          .center(t)
          .translate([this.width / 2, this.height / 2]);

        // Put the features on the map
        this.mapFeatures = this.mapFeatures
          .data(cartoFeatures)
          .enter()
          .append("path")
          .attr("class", "mapFeature")
          .attr("id", function (d) {
            return d.properties.Canton;
          })
          .attr("fill", "#ddd")
          .attr("style", "stroke: #666;stroke-width: 0.2;")
          .attr("d", path);

        // Show tooltips when hovering over the features
        // Use "mousemove" instead of "mouseover" to update the tooltip
        // position when moving the cursor inside the feature.
        this.mapFeatures
          .on("mousemove", this.showTooltip)
          .on("mouseout", this.hideTooltip);
        //   .on("mouseout", hideTooltip);

        // Prepare the values and determine minimum and maximum values
        var value = (d) => {
            return this.getValue(d);
          },
          values = this.mapFeatures
            .data()
            .map(value)
            .filter(function (n) {
              return !isNaN(n);
            })
            .sort(d3.ascending),
          lo = values[0],
          hi = values[values.length - 1];
        // Determine the colors within the range
        var color = d3.scale
          .linear()
          .range(colors)
          .domain(lo < 0 ? [lo, 0, hi] : [lo, d3.mean(values), hi]);
        // Normalize the scale to positive numbers
        var scale = d3.scale.linear().domain([lo, hi]).range([1, 1000]);
        // Tell the cartogram to use the scaled values
        this.carto.value((d) => {
          return scale(value(d));
        });
        // Generate the new features and add them to the map
        var cartoFeatures = this.carto(topology, geometries).features;
        this.mapFeatures.data(cartoFeatures);

        // Scale the cartogram with a transition
        this.mapFeatures
          .transition()
          .duration(750)
          .ease("linear")
          .attr("fill", function (d) {
            return color(value(d));
          })
          .attr("d", this.carto.path);
      });
    });
  },
  methods: {
    /**
     * Zoom the features on the map.
     */
    doZoom: function () {
      // Zoom and keep the stroke width proportional
      this.mapFeatures
        .attr(
          "transform",
          "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")"
        )
        .style("stroke-width", 0.2 / d3.event.scale + "px");

      // Hide the tooltip after zooming
      this.hideTooltip();
    },

    /**
     * Hide the tooltip.
     */
    hideTooltip: function (d) {
      //   d3.select("#" + d.properties.Canton).style("opacity", 1);
      this.tooltip.classed("hidden", true);
    },

    /**
     * Helper function to access the property of the feature used as name or
     * label.
     *
     * @param {Feature} f
     * @return {String} name
     */
    getName: function (f) {
      return f.properties.Canton;
    },

    showTooltip: function (d, i) {
      // Get the current mouse position (as integer)
      var mouse = d3.mouse(this.map.node()).map(function (d) {
        return parseInt(d);
      });
      //   d3.select("#" + d.properties.Canton).style("opacity", 0.8);

      // Calculate the absolute left and top offsets of the tooltip. If the
      // mouse is close to the right border of the map, show the tooltip on
      // the left.
      // To calculate the offsest, it is necessary to use the current size
      // of the map in proportion to the original size.
      var currentWidth = $("#map").width();
      var currentHeight = $("#map").height();
      var mouseL = (mouse[0] * currentWidth) / this.width;
      var mouseT = (mouse[1] * currentHeight) / this.height;
      var left = Math.min(
        currentWidth - 12 * this.getName(d).length,
        mouseL + 20
      );
      var top = Math.min(currentHeight - 40, mouseT + 20);

      // Populate the tooltip, position it and show it
      this.tooltip
        .classed("hidden", false)
        .attr("style", "left:" + left + "px;top:" + top + "px")
        .html(
          [
            "<strong>",
            this.getName(d),
            "</strong><br/>",
            "Population: ",
            this.formatNumber(this.getValue(d)),
          ].join("")
        );
    },
    /**
     * Format a number: Add thousands separator.
     * http://stackoverflow.com/a/2901298/841644
     */
    formatNumber: function (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
    },
    /**
     * Helper function to access the property of the feature used as value.
     *
     * @param {Feature} f
     * @return {Number} value
     */
    getValue: function (f) {
      return +f.properties["Population"];
    },
  },
};
</script>

<style scoped>
.sizecontrol {
  width: 100px;
}
.black-content {
  background-color: #121212;
}

#map-container {
  border: 1px solid silver;
  position: relative;
}

#map {
  background: #fff;
}

path.mapFeature {
  stroke: #666;
  stroke-width: 0.5;
}

path.mapFeature:hover {
  stroke: #000;
  opacity: 0.8;
}

div.ttip {
  color: #222;
  background: #fff;
  padding: 0.5em;
  text-shadow: #f5f5f5 0 1px 0;
  border-radius: 2px;
  box-shadow: 0px 0px 2px 0px #a6a6a6;
  opacity: 0.9;
  position: absolute;
  top: 0;
  left: 0;
}

.hidden {
  display: none;
}
</style>
