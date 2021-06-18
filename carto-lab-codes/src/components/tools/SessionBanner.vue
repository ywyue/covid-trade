<template>
  <!--  SESSION BANNER : Banner for each session with parallel effect -->
  <div class="q-mb-md q-mt-lg">
    <q-parallax :height="275" :speed="0.5">
      <template v-slot:media>
        <img :src="imgUrl" />
      </template>

      <template v-slot:content="scope">
        <div
          class="absolute column items-center"
          :style="{
            opacity: 0.9 + (1 - scope.percentScrolled) * 0.1,
            top: scope.percentScrolled * 60 + '%',
            left: 0,
            right: 0,
          }"
        >
          <div class="q-ma-md">
            <p class="text-h2 text-white q-pl-md session-title text-bold">{{ title }}</p>
            <div class="text-h5 text-white text-center">
              {{ subtitle }}
            </div>
          </div>
        </div>
      </template>
    </q-parallax>
  </div>
</template>

<script>
export default {
  name: "SessionBanner",
  props: ["imgUrl", "title", "subtitle"],
};
</script>

<style scoped lang="scss">
img {
  opacity: 0.95;
}
.session-title {
  display: inline-block;
  width: auto;
  padding: 1px;
  //border-bottom: 3px solid;
  //border-bottom-color: $negative;
  text-transform: capitalize;
}
</style>
