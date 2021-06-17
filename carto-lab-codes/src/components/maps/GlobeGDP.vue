<template>
  <!--  3D Globe Map -->
  <div id="globeViz"></div>
</template>

<script>
import * as d3 from "d3";
import Globe from "globe.gl";


export default {
  name: "GlobeGDP",
  props: ["width","height"],
  data: function() {
    return{
      world: null,
      rotationSpeed: 0.85,
      globeColorScale: d3.scaleSequentialSqrt(d3.interpolateRgb("#FFDA67", "#5EC9DB")),
      dataColumn: '2017_death_rate',
      dataFilePath: 'data/hiv-death-rates.geojson',
      flagEndpoint:'https://corona.lmao.ninja/assets/img/flags', //url to get country flags
    }
  },
  methods: {
    initMap(){
      // Initialize the globe
      this.world = Globe()(document.getElementById('globeViz'))
        .showGlobe(false)
        .showAtmosphere(false)
        .backgroundColor('#FFFFFF')
        .lineHoverPrecision(0)
        .width(this.width)
        .height(this.height)
        .pointOfView({lat:0,lng:0, altitude:1.75}, 4000);
      this.showLayer();
      this.autoRotate(true);
    },

    getToolTip(d, colName, title){
      // Show the tooltip when mouse hovering on polygons
      let flagName = d.ISO_A2.toLowerCase();
      if (d.ADMIN === 'France') {
        flagName = 'fr';
      } else if (d.ADMIN === 'Norway') {
        flagName = 'no';
      } else if (d.ADMIN === 'Taiwan,China') {
        flagName = 'cn'
      }
      let div_html = `<div class="globe-viewer-tooltip-container">
                        <img class="flag-img" src="${this.flagEndpoint}/${flagName}.png"/>
                        <div class="country-title">${d.ADMIN}</div>
                        <div class="description">
                            GDP: $<i>${this.numberWithCommas(d.GDP_MD_EST)}</i> Million<br/>
                            ${title} between 2019 and 2020: <i>${d[colName].toFixed(2)}</i><br/>
                        </div>
                      </div>`

      return div_html;
    },

    numberWithCommas(x) {
      // Format numbers: 1,000,000,000
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    resizeMap(height, width){
      // Resize the globe
      this.world.width([width]);
      this.world.height([height]);
    },

    autoRotate(auto=true){
      // Add auto-rotation
      this.world.controls().autoRotate = auto;
      if(auto){
        this.world.controls().autoRotateSpeed = this.rotationSpeed;
      }

    },

    showLayer(){
      // Show layer
      const getVal = feat => Math.log(feat.properties[this.dataColumn]);
      fetch(this.dataFilePath).then(res => res.json()).then(countries =>
      {
        const maxVal = Math.max(...countries.features.map(getVal));
        this.globeColorScale.domain([0, maxVal]);
        this.world
          .polygonsData(countries.features.filter(d => d.properties.ISO_A3 !== 'AQ'))
          .polygonAltitude(0.06)
          .polygonCapColor(d => this.globeColorScale(getVal(d)))
          .polygonSideColor(() => 'rgba(255,255,255,0.15)')
          .polygonStrokeColor(() => 'rgba(40,70,70,0.65)')
          .polygonLabel(({ properties: d }) => this.getToolTip(d, this.dataColumn, "Percent Change of GDP"))
          .onPolygonHover(hoverD => this.world
            .polygonAltitude(d => d === hoverD ? 0.12 : 0.06)
            .polygonCapColor(d => d === hoverD ? '#2F4F4F' : this.globeColorScale(getVal(d)))
          )
          .polygonsTransitionDuration(300);

      });
    },

  },
  mounted() {
    this.initMap();
  },
}
</script>

<style scoped>

</style>
