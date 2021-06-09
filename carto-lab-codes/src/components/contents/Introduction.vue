<template>
  <q-page>
    <div class="text-center text-h1">Introduction</div>
    <div class="row items-start text-center">
      <div class="col-12 col-md-4">
        <number-counter number="1"
                        unit="million+"
                        title="deaths due to the pandemic"
                        img-src="images/virus.svg"
        />
      </div>
      <div class="col-12 col-md-4">
        <number-counter number="4.3"
                        unit="percent"
                        title="contraction of global gross domestic product estimated for 2020"
                        img-src="images/economic_down.svg"
        />
      </div>
      <div class="col-12 col-md-4">
        <number-counter number="130"
                        unit="million"
                        title="more people living in extreme poverty due to the crisis"
                        img-src="images/help.svg"
        />
      </div>
    </div>
  </q-page>

</template>

<script>
import NumberCounter from "components/tools/NumberCounter";
export default {
name: "Introduction",
  components: {NumberCounter}
}
</script>

<style lang="scss" scoped>

</style>
