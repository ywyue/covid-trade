<template>
<!--  <button @click="">Scale</button>-->
  <div id="map-container">
    <svg id="map"></svg>
  </div>
</template>

<script>
import * as d3 from "d3";


export default {
  name: "tradeCartogram",
  data(){
    return{
      topology: null,
      geometries: null,
      carto: null,
      dataById: {},
      proj: null,
      map: null,
      layer: null,
      mapFeatures: null,
      tooltip: null,
    }
  },
  methods: {
    /**
     * Initialize the map. Creates the basic map without scaling of the
     * features.
     */
    init(){
      // Create the cartogram features (without any scaling)
      var cartoFeatures = this.carto.features(this.topology, this.geometries),
        path = d3.geo.path()
          .projection(this.proj);

      // Determine extent of the topology
      let b = this.topology.bbox;
      let t = [(b[0]+b[2])/2, (b[1]+b[3])/2];
      let s = 0.95 / Math.max(
        (b[2] - b[0]) / width,
        (b[3] - b[1]) / height
      );

      // Scale it to fit nicely
      s = s * 55;
      this.proj
        .scale(s)
        .center(t).translate([width / 2, height / 2]);

      // Put the features on the map
      this.mapFeatures = this.mapFeatures.data(cartoFeatures)
        .enter()
        .append("path")
        .attr("class", "mapFeature")
        .attr("id", function(d) {
          return getName(d);
        })
        .attr("fill", "#ddd")
        .attr("d", path);

      // Show tooltips when hovering over the features
      // Use "mousemove" instead of "mouseover" to update the tooltip
      // position when moving the cursor inside the feature.
      this.mapFeatures.on('mousemove', this.showTooltip)
        .on('mouseout', this.hideTooltip);

    },

    /**
     * Show a tooltip with details of a feature, e.g. when hovering over a
     * feature on the map.
     *
     * @param {Feature} d - The feature
     * @param {Number} i - The ID of the feature
     */
    showTooltip(d, i) {

      // Get the current mouse position (as integer)
      var mouse = d3.mouse(this.map.node()).map(function(d) { return parseInt(d); });

      // Calculate the absolute left and top offsets of the tooltip. If the
      // mouse is close to the right border of the map, show the tooltip on
      // the left.
      // To calculate the offsest, it is necessary to use the current size
      // of the map in proportion to the original size.
      var currentWidth = $('#map').width();
      var currentHeight = $('#map').height();
      var mouseL = mouse[0] * currentWidth / width;
      var mouseT = mouse[1] * currentHeight / height;
      var left = Math.min(currentWidth-12*getName(d).length, (mouseL+20));
      var top = Math.min(currentHeight-40, (mouseT+20));

      var self = this;
      // Populate the tooltip, position it and show it
      this.tooltip.classed("hidden", false)
        .attr("style", "left:"+left+"px;top:"+top+"px")
        .html([
          '<strong>', self.getName(d), '</strong><br/>',
          'Population: ', self.formatNumber(self.getValue(d)),
        ].join(''));
    },

    /**
     * Hide the tooltip.
     */
    hideTooltip(){
      this.tooltip.classed("hidden", true);
    },

    /**
     * Helper function to access the property of the feature used as value.
     *
     * @param {Feature} f
     * @return {Number} value
     */
    getValue(f) {
      return +f.properties["Population"];
    },

    /**
     * Helper function to access the property of the feature used as name or
     * label.
     *
     * @param {Feature} f
     * @return {String} name
     */
    getName(f) {
      return f.properties.Canton;
    },

    /**
     * Format a number: Add thousands separator.
     * http://stackoverflow.com/a/2901298/841644
     */
    formatNumber(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
    },

},
  mounted(){
    // Set the (initial) width and height of the map
    var width = 960,
      height = 600;

    this.map = d3.select("#map").attr("preserveAspectRatio", "xMidYMid")
        .attr("viewBox", "0 0 " + width + " " + height);
    this.layer = map.append("g")
        .attr("id", "layer");
    this.mapFeatures = layer.append("g")
        .attr("id", "mapFeatures")
        .selectAll("path");
    this.tooltip = d3.select("#map-container")
        .append("div")
        .attr("class", "ttip hidden");

    // Define the zoom and attach it to the map
    var zoom = d3.behavior.zoom()
      .scaleExtent([1, 10])
      .on('zoom', doZoom);
    this.map.call(zoom);

    // Define the projection of the map (center and scale will be defined
    // later)
    this.proj = d3.geo.mercator();

    // Prepare the cartogram
    let self = this;
    this.carto = d3.cartogram()
        .projection(self.proj)
        .properties(function(d) {
          if (!self.dataById[d.properties.KTNAME]) {
            console.log('ERROR: Entry "' + d.properties.KTNAME + '" was found in the Topojson but not in the data CSV. Please correct either of them.');
          }
          // Add the cartogram data as property of the cartogram features
          return self.dataById[d.properties.KTNAME];
        });

    // Read the geometry data
    d3.json('../../assets/json/ch_cantons.topojson', function(topo) {
      self.topology = topo;

      // The mapped unit for cantons: Cantons
      self.geometries = self.topology.objects.cantons.geometries;

      // Read the data for the cartogram
      d3.csv("../../assets/json/ch_cantons.csv", function(data) {

        // Prepare a function to easily access the data by its ID
        // "ID" for cantons: Canton
        self.dataById = d3.nest()
          .key(function(d) { return d.Canton; })
          .rollup(function(d) { return d[0]; })
          .map(data);

        // Initialize the map
        self.init();
      });
    });
  }
}
</script>

<style scoped lang="scss">
#map-container {
  border: 1px solid silver;
  position: relative;
}

#map {
  background: #fff;
}

path.mapFeature {
  stroke: #666;
  stroke-width: .5;
}

path.mapFeature:hover {
  stroke: #000;
  opacity: 0.8;
}

div.ttip {
  color: #222;
  background: #fff;
  padding: .5em;
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

div.footer {
  border-top: 1px solid silver;
  margin-top: 20px;
  text-align: right;
}
</style>
