<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-sticky position="top-left" :offset="[18, 18]" style="z-index: 2">
      <q-btn
        fab
        color="grey"
        icon="menu"
        aria-label="Menu"
        @click="toggleLeftDrawer"
      >
      </q-btn>
    </q-page-sticky>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-1"
      @on-layout="leftDrawerToggled"
    >
      <q-list>
        <q-item-label header class="text-grey-8">
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    <q-page-container ref="page">
      <router-view :paddingLeft="paddingLeft" />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, nextTick } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Globe",
    caption: "Cesium.js",
    icon: "3d_rotation",
    link: "#globe",
  },
  {
    title: "Diagram",
    caption: "D3.js",
    icon: "bar_chart",
    link: "#chart",
  },
  {
    title: "Map",
    caption: "Leaflet",
    icon: "map",
    link: "#map",
  },
  {
    title: "Table",
    caption: "Vue.js",
    icon: "table_rows",
    link: "#table",
  },
  {
    title: "Image",
    caption: "JPEG",
    icon: "image",
    link: "#image",
  },
];

export default defineComponent({
  name: "MainLayout",
  components: {
    EssentialLink,
  },
  data: () => {
    return {
      leftDrawerOpen: false,
      paddingLeft: "",
      essentialLinks: linksList,
    };
  },
  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
    leftDrawerToggled() {
      const self = this;

      //need to wait until DOM has changed
      nextTick(() => {
        this.paddingLeft = self.$refs.page.$el.style["paddingLeft"];
      });
    },
  },
});
</script>
