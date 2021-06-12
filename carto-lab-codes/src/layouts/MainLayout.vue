<template>
  <div>
    <q-layout view="hhh LpR fff">
      <q-header elevated height="200">
        <q-toolbar style="background-color: white">
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            class="q-mr-sm"
            size="0.8em"
            @click="leftDrawerOpen = !leftDrawerOpen"
          />
          <q-toolbar-title>
            <div class="items-center">
              <q-icon class="text-dark q-ma-md-lg" size="70px">
                <img
                  src="images/globalization.svg"
                  style="width: 50px; height: 50px"
                />
              </q-icon>
              <strong>TITLE HERE</strong>
            </div>
          </q-toolbar-title>
          <q-space></q-space>
        </q-toolbar>
      </q-header>

      <!-- Left menu -->
      <!-- on mouseover shows name-->
      <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        mini-to-overlay
        :width="350"
        :breakpoint="500"
        content-class="bg-grey-3"
        @on-layout="leftDrawerToggled"
      >
        <q-list padding>
          <Menu :menuItems="menuItems" />
        </q-list>
      </q-drawer>

      <q-page-container style="height: 100vh">
        <Index />
        <!-- place QPageScroller at end of page -->
        <q-page-scroller
          position="bottom-right"
          :scroll-offset="150"
          :offset="[18, 18]"
        >
          <q-btn
            fab
            icon="keyboard_arrow_up"
            background="rgba(39, 155, 72, 0.5)"
            style="z-index: 100"
          />
        </q-page-scroller>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import Menu from "layouts/Menu.vue";
import Index from "pages/Index";

const menuItems = [
  {
    title: "Introduction",
    icon: "favorite",
  },
  {
    title: "Global situation",
    icon: "fact_check",
  },
  {
    title: "China",
    icon: "track_changes",
  },
  {
    title: "Policies and measurements",
    icon: "public",
  },
  {
    title: "Conclusion",
    icon: "insights",
  },
];

export default {
  name: "MainLayout",
  components: { Menu, Index },
  data() {
    return {
      leftDrawerOpen: false,
      miniState: true,
      menuItems,
    };
  },
  methods: {
    leftDrawerToggled() {
      const self = this;
    },
  },
};
</script>

<style scoped></style>
