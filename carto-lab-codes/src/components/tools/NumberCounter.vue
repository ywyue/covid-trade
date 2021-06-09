<template>
<!--  NUMBER COUNTER : Show key numbers in a highlighted style, with animation to count the number -->
  <div class="number-count-container q-ma-lg">
    <div class="text-center">
      <q-img :src="imgSrc" style="height: 150px; max-width: 150px"></q-img>
      <q-space class="q-ma-md"/>
      <div><span class="text-h3 text-primary">{{count}}</span></div>
      <div><span class="text-h4 text-uppercase text-primary">{{unit}}</span></div>
    </div>
    <div class="text-h5 text-center">{{title}}</div>
  </div>
</template>

<script>
import anime from 'animejs';

export default {
  name: "NumberCounter",
  props:["number","unit","title","imgSrc"],
  data: function() {
    return{
      num: this.number,
      count: 0,
      is_comma: true
    }
  },
  watch: {
    num (val) {
      this.setCount(val)
    }
  },
  methods: {
    resetVal () {
      this.count = 0
    },
    setCount (val) {
      const obj = { n: this.count }
      anime({
        targets: obj,
        n: val,
        round: 1,
        duration: 500,
        easing: 'linear',
        update: () => {
          this.count = obj.n
        }
      })
    },
    startAnim(){
      // Start animation to count the number from 0 to the set number
      this.resetVal();
      this.setCount(this.number);
    }
  },
  mounted () {
    this.setCount(this.number);
  }

}
</script>

<style scoped lang="scss">
.number-count-container{
  display:inline-block;
  width:300px;
}
.color{
  color: $counter;
}

.text-counter {
  color: $counter;
}
.bg-counter {
  background: $counter;
}
</style>
