<template>
  <section class="outter hero-video">
    <section class="video-container">
      <video
        src="videos/background.webm"
        autoplay
        loop
        playsinline
        muted
      ></video>
      <div class="callout">
        <!-- <h1>Global trade</h1> -->
        <h3>How COVID-19 is changing the world: an economic perspective</h3>

          <h5>
            The COVID-19 pandemic represents an unprecedented disruption to the
            global economy and world trade, as production and consumption are
            scaled back across the globe.
          </h5>


      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "Background",
};
</script>

<style scoped>
/* Hero Video */
.outter.hero-video {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 767px) {
    height: 325px;
  }
}

.video-container {
  height: 650px;
  width: 100%;
  position: relative;
  overflow: hidden;
  @media (max-width: 767px) {
    height: 325px;
  }
}

video {
  object-fit: cover;
  position: absolute;
  height: 650px;
  width: 100%;
  top: 0;
  left: 0;
  @media (max-width: 767px) {
    height: 325px;
  }
}

.video-container:after {
  content: "";
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(black, 0.2);
  z-index: 1;
}

h1 {
  text-transform: uppercase;
  margin: 0 0 1rem;
  padding: 0;
  line-height: 1;
  color: white;
  @media (max-width: 767px) {
    font-size: 32px;
  }
  @media (min-width: 768px) {
    font-size: 52px;
  }
}

h3 {
  text-align: center;
  font-weight: bold;
  color: white;
  /* width: 50%; */
  min-width: 375px;
  margin: auto;
}

h5 {
  text-align: center;
  font-weight: bold;
  color: white;
  background: rgb(6, 167, 216, 0.7);
  width: 70%;
  min-width: 375px;
  margin: auto;
  padding: 10px;
}

.desc {
  color: white;
  font-weight: 400;
  font-size: 18px;
}

.callout {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  text-align: center;
  position: relative;
  z-index: 10;
  width: 70%;
  margin: auto;
  @media (max-width: 767px) {
    width: 90%;
  }
}
</style>
