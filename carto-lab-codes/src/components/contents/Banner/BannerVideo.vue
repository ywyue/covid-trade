<template>
  <!-- <div class="q-px-lg q-pb-md"> -->
  <video id="video" preload autoplay muted loop>
    <source src="videos/background2.webm" type="video/webm" />
  </video>
  <!-- </div> -->
</template>

<script>
export default {
  name: "BannerVideo",
};
</script>

<style scoped>
@media (min-aspect-ratio: 16/9) {
  #video {
    width: 100%;
    height: auto;
  }
}

@media (max-aspect-ratio: 16/9) {
  #video {
    width: auto;
    height: 100%;
  }
}

/* #video {
  width: 100%;
  height: auto;
} */
</style>
