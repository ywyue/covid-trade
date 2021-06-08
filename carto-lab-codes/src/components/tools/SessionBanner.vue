<template>
<!--  SESSION BANNER : Banner for each session with parallel effect -->
  <div class="q-pa-md">
    <q-parallax :height="450" :speed="0.5">
      <template v-slot:media>
        <img :src="imgUrl">
      </template>

      <template v-slot:content="scope">
        <div
          class="absolute column items-lg-start"
          :style="{
            opacity: 0.9 + (1 - scope.percentScrolled) * 0.1,
            top: (scope.percentScrolled * 60) + '%',
            left: 0,
            right: 0
          }"
        >
          <div class="q-ma-md"><p class="text-h3 text-white q-pl-md session-title">{{title}}</p>
          </div>

          <div class="text-h5 text-grey-1  q-ma-md">
            {{subtitle}}
          </div>
        </div>
      </template>
    </q-parallax>
  </div>
</template>

<script>
export default {
  name: "SessionBanner",
  props:["imgUrl","title","subtitle"]
}
</script>

<style scoped lang="scss">
img{
  opacity: 0.85;
}
.session-title {
  display: inline-block;
  width: auto;
  border-left: 3px solid;
  border-left-color: $negative;
  text-transform: capitalize;
}
</style>
