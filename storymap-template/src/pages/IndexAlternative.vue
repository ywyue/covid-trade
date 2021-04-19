<template>
  <q-page class="flex flex-center">
    <q-page-sticky position="top-left" :offset="[18, 18]" style="z-index: 2">
      <q-fab color="grey" icon="keyboard_arrow_down" direction="down">
        <q-fab-action to="#globe" color="grey" icon="3d_rotation" />
        <q-fab-action to="#chart" color="grey" icon="bar_chart" />
        <q-fab-action to="#map" color="grey" icon="map" />
        <q-fab-action to="#table" color="grey" icon="table_rows" />
        <q-fab-action to="#image" color="grey" icon="image" />
      </q-fab>
    </q-page-sticky>
    <ParallaxSection
      hashtag="globe"
      height="160%"
      background-color="black"
      background-alignment="center"
    >
      <template v-slot:background>
        <CesiumViewer></CesiumViewer>
      </template>
      <template v-slot:foreground>
        <CesiumViewerText></CesiumViewerText>
      </template>
      <template v-slot:separator>
        <div class="text-body1">You could create 3D maps with CesiumJS.</div>
      </template>
    </ParallaxSection>
    <ParallaxSection
      hashtag="chart"
      height="80%"
      background-alignment="center"
      :background-speed="1"
    >
      <template v-slot:background>
        <D3Histogram />
      </template>
      <template v-slot:separator>
        <div class="text-body1">You could insert charts from D3.js.</div>
      </template>
    </ParallaxSection>
    <ParallaxSection hashtag="map" foreground-alignment="right" height="200%">
      <template v-slot:background="{ progress, progressThreshold }">
        <LeafletMap
          :progress="progress"
          :progressThreshold="progressThreshold"
        />
      </template>
      <template v-slot:foreground>
        <LeafletMapText></LeafletMapText>
      </template>
    </ParallaxSection>
    <ParallaxSection
      hashtag="table"
      background-alignment="center"
      height="80%"
      :background-speed="1"
    >
      <template v-slot:background>
        <DynamicTable />
      </template>
      <template v-slot:separator>
        <div class="text-body1">You could insert tables with Vue.js.</div>
      </template>
    </ParallaxSection>
    <ParallaxSection hashtag="image" foreground-alignment="center">
      <template v-slot:background>
        <BackgroundImage imageURL="./images/background1.jpg" />
      </template>
      <template v-slot:foreground>
        <BackgroundImageText />
      </template>
    </ParallaxSection>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import ParallaxSection from "layouts/ParallaxSection";
import CesiumViewer from "components/CesiumViewer";
import CesiumViewerText from "components/CesiumViewerText";
import D3Histogram from "components/D3Histogram";
import DynamicTable from "components/DynamicTable";
import LeafletMap from "components/LeafletMap";
import LeafletMapText from "components/LeafletMapText";
import BackgroundImage from "components/BackgroundImage";
import BackgroundImageText from "components/BackgroundImageText";

export default defineComponent({
  name: "PageIndex",
  components: {
    BackgroundImageText,
    LeafletMapText,
    CesiumViewerText,
    ParallaxSection,
    BackgroundImage,
    LeafletMap,
    D3Histogram,
    CesiumViewer,
    DynamicTable,
  },
});
</script>
