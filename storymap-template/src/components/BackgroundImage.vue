<template>
  <div
    class="background-image"
    :style="{ 'background-image': 'url(' + imageURL + ')' }"
  ></div>
</template>

<script>
export default {
  name: "BackgroundImage",
  props: {
    imageURL: String,
  },
};
</script>

<style scoped lang="scss">
.background-image {
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0.65;
}
</style>
