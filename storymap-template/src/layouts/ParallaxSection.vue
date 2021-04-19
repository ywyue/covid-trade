<template>
  <div
    class="bg-content"
    :style="{ height, width, left: paddingLeft }"
    ref="background"
  >
    <div
      class="bg-wrapper"
      :class="[backgroundAlignment]"
      :style="{ backgroundColor }"
    >
      <slot
        name="background"
        :progress="progress"
        :progressThreshold="progressThreshold"
      ></slot>
    </div>
  </div>
  <div
    ref="foreground"
    :id="hashtag"
    class="fg-gap"
    :class="[foregroundAlignment]"
    :style="{ height }"
  >
    <slot name="foreground"></slot>
  </div>
  <div class="fg-text center" v-if="hasSeparatorSlot">
    <slot name="separator"></slot>
  </div>
</template>

<script>
export default {
  name: "ParallaxSection",
  props: {
    height: String,
    hashtag: String,
    backgroundColor: String,
    backgroundAlignment: String,
    backgroundSpeed: {
      type: Number,
      default: 0,
    },
    foregroundAlignment: String,
    paddingLeft: String,
  },
  mounted() {
    const backgroundElement = this.$refs.background;
    //-2 => 0.25; -1 = 0.5; 0 => 1; 1 => 2; 2 => 4
    const backgroundSpeed = Math.pow(2, this.backgroundSpeed);
    const foregroundElement = this.$refs.foreground;

    let move = () => {
      const rect = foregroundElement.getBoundingClientRect();
      backgroundElement.style.top = rect.top + "px";

      backgroundElement.firstElementChild.style.top =
        -rect.top / backgroundSpeed + "px";

      const rectHeightHalf = rect.height / 2;
      const viewportHeightHalf = window.innerHeight / 2;

      //when progress is -1, then the element is just below the viewport
      //when progress is 0, then the element is centred in the viewport
      //when progress is 1, the the element is just above the viewport
      this.progress =
        (viewportHeightHalf - rectHeightHalf - rect.top) /
        (viewportHeightHalf + rectHeightHalf);
    };

    let resize = () => {
      const rect = foregroundElement.getBoundingClientRect();
      let progressThreshold;

      //within this threshold, the element is fully visible in the viewport
      if (rect.height < window.innerHeight) {
        progressThreshold =
          (window.innerHeight - rect.height) /
          (rect.height + window.innerHeight);
      } else if (rect.height > window.innerHeight) {
        progressThreshold =
          (rect.height - window.innerHeight) /
          (rect.height + window.innerHeight);
      } else {
        //avoid zero values (in case of normalization)
        progressThreshold = 0.00000000001;
      }
      this.progressThreshold = progressThreshold;

      move();
    };

    move = move.bind(this);
    resize = resize.bind(this);

    document.addEventListener("scroll", move);
    document.addEventListener("resize", resize);

    resize();
  },
  data: function () {
    return {
      progress: null,
      progressThreshold: null,
    };
  },
  computed: {
    hasSeparatorSlot() {
      //source: https://stackoverflow.com/questions/44077277/only-show-slot-if-it-has-content
      return !!this.$slots.separator;
    },
    width() {
      return `calc(100% - ${this.paddingLeft || "0px"})`;
    },
  },
};
</script>

<style scoped lang="scss">
.bg-content {
  position: fixed;
  height: 100%;
  left: 0;
  right: 0;
  overflow: hidden;
}

.bg-wrapper {
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: white;
}

.fg-text {
  position: relative;
  background-color: white;
  z-index: 1;
  height: 20%;
  text-align: center;
}

.fg-gap {
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}
</style>
