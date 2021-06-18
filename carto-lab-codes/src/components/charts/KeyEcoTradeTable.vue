<template>
<div class="q-pa-xm" style="width:100%">
  <q-markup-table flat square separator="horizontal">
    <thead class="text-primary ">
    <tr class="bg-dark">
      <th class="text-center" colspan="7">
        <div class="text-h6 text-positive">Change of Trade Volume Among Major Trading Economies in 2020</div>
      </th>
    </tr>
    <tr>
      <th></th>
      <th colspan="3"><div class="text-body2 text-bold text-primary">IMPORTS</div></th>
      <th colspan="3"><div class="text-body2 text-bold text-primary">EXPORTS</div></th>
    </tr>
    <tr class="text-left">
      <th></th>
      <th><div class="text-body2 text-bold text-primary">1ST HALF</div></th>
      <th><div class="text-body2 text-bold text-primary">Q3</div></th>
      <th><div class="text-body2 text-bold text-primary">Q4</div></th>
      <th><div class="text-body2 text-bold text-primary">1ST HALF</div></th>
      <th><div class="text-body2 text-bold text-primary">Q3</div></th>
      <th><div class="text-body2 text-bold text-primary">Q4</div></th>
    </tr>
    </thead>
    <tbody class="hover-table">
    <tr v-for="(record, index) in jsonData" :key="index" class="text-left">
      <th class="table-text column-head">
        <q-img v-if="record['iso_a2'] !== null"
               :src="flagRoot.concat('/', record['iso_a2'].toLowerCase(), '.png')"
               class="flag-img"
        />
        <q-img v-else
               src="images/eu.svg"
               class="flag-img"
        />
        {{record['name']}}
      </th>
      <th class="table-text">
        <q-img :src="getArrow(record['import-1sthalf'])"
               class="arrow-img"
        />
        {{Math.abs(record['import-1sthalf'])}}%
      </th>
      <th class="table-text">
        <q-img :src="getArrow(record['import-q3'])"
               class="arrow-img"
        />
        {{Math.abs(record['import-q3'])}}%
      </th>
      <th class="table-text">
        <q-img :src="getArrow(record['import-q4'])"
               class="arrow-img"
        />
        {{Math.abs(record['import-q4'])}}%
      </th>
      <th class="table-text">
        <q-img :src="getArrow(record['export-1sthalf'])"
               class="arrow-img"
        />
        {{Math.abs(record['export-1sthalf'])}}%
      </th>
      <th class="table-text">
        <q-img :src="getArrow(record['export-q3'])"
               class="arrow-img"
        />
        {{Math.abs(record['export-q3'])}}%
      </th>
      <th class="table-text">
        <q-img :src="getArrow(record['export-q4'])"
               class="arrow-img"
        />
        {{Math.abs(record['export-q4'])}}%
      </th>
    </tr>
    </tbody>
    <thead class="bg-dark text-positive">
    <tr>
      <th class="text-right" colspan="7">
        <div class="text-caption text-positive q-pr-lg">Notes: The data is collected from UNCTAD Global Trade Update, February 2021. Year-over-year growth rates, in US$.</div>
      </th>
    </tr>
    </thead>
  </q-markup-table>
</div>
</template>

<script>
import {tradeDeclineByCountry} from "assets/json/worldData";

export default {
  name: "KeyEcoTradeTable",
  data() {
    return{
      jsonData:tradeDeclineByCountry,
      flagRoot:'https://corona.lmao.ninja/assets/img/flags/',
    }
  },
  methods:{
    getArrow(record){
      if(record>0){
        return 'images/up-arrow.svg'
      }else{
        return 'images/down-arrow.svg'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.arrow-img{
  width:25px;
}
.flag-img{
  width:50px;
  border-radius: 10%;
  margin-right: 20px;
}
.table-text{
  font-size: 1rem;
}
.hover-table tr:hover{
    background-color: ghostwhite;
}
.hover-table th{
  border-bottom: solid 2px ghostwhite;
}
.column-head{
  font-weight: bold;
}
</style>
