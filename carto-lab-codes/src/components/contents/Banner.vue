<template>
  <ParallaxSection
    foreground-alignment="center"
    :paddingLeft="paddingLeft"
    class="flex flex-center"
  >
    <template v-slot:background>
      <BannerVideo />
    </template>
    <template v-slot:foreground>
      <BannerText />
    </template>
  </ParallaxSection>
</template>

<script>
import BannerVideo from "components/contents/Banner/BannerVideo";
import BannerText from "components/contents/Banner/BannerText";

import ParallaxSection from "layouts/ParallaxSection";
// import Background from './Intro/background.vue';

export default {
  name: "Introduction",
  components: {
    BannerVideo,
    BannerText,
    ParallaxSection,

    // Background,
  },
};
</script>

<style lang="scss" scoped>
.banner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
