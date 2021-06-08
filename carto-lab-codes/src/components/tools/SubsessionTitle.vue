<template>
<!--  SUBSESSION TITLE : Title of each subsection-->
  <div class="q-pa-md" style="background-color: rgba(39, 155, 72, 0.2); height:90px;">
    <p class="text-h5 q-pl-lg q-pr-lg subsession-title-left" style="font-size: 200%">{{title}}</p>
  </div>
</template>

<script>
export default {
name: "SubsessionTitle",
  props:["title"],
}
</script>

<style scoped lang="scss">
.subsession-title {
  display: inline-block;
  width: auto;
  border-bottom: 2px solid;
  border-bottom-color: $negative;
  line-height: 1.5;
  text-transform: capitalize;
}

.subsession-title-left {
  display: inline-block;
  width: 100%;
  border-left: 6px solid;
  border-left-color: $negative;
  line-height: 1.5;
  //text-transform: capitalize;
}

.subssesion-background{
  background-color: rgba(193,0,21,0.1);
}
</style>
