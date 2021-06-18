<template>
  <div
    class="q-pa-md items-center"
    style="
      background-color: #e0e0e0;
      height: 60px;
      margin-top: 0px;
      display: flex;
      justify-content: center;
    "
  >
    <q-btn
      @click="scroll"
      flat
      align="around"
      label="Source"
      icon="source"
      style="margin: auto; display: block"
    />
  </div>

  <div class="row" style="background-color: #e0e0e0" v-if="show" id="source">
    <div class="column">
      <span style="color: #505050; font-size: 120%">Data Source:</span>
      <div class="text-body2">
        <a href="https://www.imf.org/external/pubs/ft/weo/disclaim.htm"
          >IMF World Economic Outlook Database</a
        >
      </div>
      <div class="text-body2">
        <a
          href="https://unctadstat.unctad.org/wds/ReportFolders/reportFolders.aspx"
          >UNCTAD STAT</a
        >
      </div>
      <div class="text-body2">
        <a
          href="https://marketplace.officialstatistics.org/ais-weekly-port-calls"
          >AIS: Weekly Port Calls</a
        >
      </div>
    </div>
    <q-separator vertical inset color="white" />
    <div class="column">
      <span style="color: #505050; font-size: 120%">Software:</span>
      <div class="text-body2">
        Data Processing: <a href="https://pandas.pydata.org/">Pandas</a>,
        <a href="https://geopandas.org/">GeoPandas</a>,
        <a herf="https://www.qgis.org/en/site/">QGIS</a>
      </div>
      <div class="text-body2">
        Front-end design and development:
        <a href="https://v3.vuejs.org/">Vue</a>,
        <a href="https://quasar.dev/">Quasar</a>,
        <a href="https://animejs.com/">animejs</a>
      </div>
      <div class="text-body2">
        Visualization:
        <a href="https://docs.mapbox.com/mapbox-gl-js/api/">Mapbox</a>,
        <a href="https://globe.gl/">Globe.GL</a>,
        <a href="https://d3js.org/">D3.js</a>,
        <a href="https://echarts.apache.org/zh/index.html">Apache ECharts</a>
      </div>
    </div>
    <q-separator vertical inset color="white" />
    <div class="column">
      <span style="color: #505050; font-size: 120%">Images: </span>
      <div class="text-body2">
        <a href="https://www.flaticon.com/">FLATICON.COM</a>
      </div>
      <span style="color: #505050; font-size: 120%">Images: </span>
      <div class="text-body2">
        <a href="https://www.flaticon.com/">FLATICON.COM</a>
      </div>
      <div class="text-body2"><a href="https://www.pexels.com/">Pexels</a></div>
      <div class="text-body2">
        <a href="https://unsplash.com/">unsplash.com</a>
      </div>
    </div>
    <q-space class="q-ma-md" />
  </div>
  <div class="text-body2 q-pl-lg q-pr-lg q-pb-sm">
    &copy; 2021 Yuanwen Yue & Jingyan Li. All rights reserved.
  </div>
</template>

<script>
export default {
  name: "Source",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    scroll() {
      if (this.show == true) {
        this.show = false;
      } else {
        this.show = true;
        setTimeout(() => {
          const element = document.getElementById("source");
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    },
  },
};
</script>

<style scoped>
.column {
  float: left;
  width: 33%;
  padding-left: 2%;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.no_underline {
  text-decoration: none;
}

p {
  font-size: 90%;
}

a {
  color: #505050;
  text-decoration: underline;
  font-size: 80%;
}

html {
  scroll-behavior: smooth;
}

@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}
</style>
