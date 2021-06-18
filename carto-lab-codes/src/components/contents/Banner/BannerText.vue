<template>
  <div class="message">
    <h2>Situation of Global Trade</h2>

    <h5>
      Since the outbreak of the coronavirus disease of 2019 (COVID-19), ...
    </h5>
  </div>
</template>

<script>
export default {
  name: "BannerText",
};
</script>

<style scoped lang="scss">
h2 {
  text-align: center;
  font-weight: bold;
  color: white;
  pointer-events: all;
}

h5 {
  text-align: center;
  font-weight: bold;
  color: white;
  pointer-events: all;
  background: rgba(5, 155, 201, 0.993);
  width: 50%;
  min-width: 375px;
  margin: auto;
}

.message {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
