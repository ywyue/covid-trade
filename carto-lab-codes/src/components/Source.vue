<template>
  <div class="q-pa-md" style="background-color:#3A3A3A; height: 70px; margin-top:0px; display:flex; justify-content:center;">
    <q-btn @click="scroll" push align="around"  text-color="white" label="Source" icon="lightbulb_outline" style="margin:auto; display:block; background:#4B4B4B;"/>
  </div>

  <div class="row" style="background-color:#3A3A3A;" v-if="show" id="source">
    <div class="column">
      <p>
        <span style="color:whitesmoke; font-size:120%">Data Source:</span><br>

      </p>
    </div>
    <q-separator vertical inset color="white"/>
    <div class="column">
       <p>
        <span style="color:whitesmoke; font-size:120%">Software:</span><br>
       </p>
    </div>
    <q-separator vertical inset color="white"/>
    <div class="column">
      <p>
        <span style="color:whitesmoke; font-size:120%">Images: </span><br>

      </p>
    </div>
  </div>
  <div class="text-body2 q-pl-lg q-pr-lg q-pb-sm">
    &copy; 2021 Yuanwen Yue & Jingyan Li. All rights reserved.
  </div>


</template>

<script>
export default {
  name: "Source",
  data() {
    return {
      show: false
    }
  },
  methods: {
    scroll() {
      if (this.show == true) {
        this.show = false
      }else{
        this.show = true
        setTimeout(() => {
          const element = document.getElementById('source');
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100)
      }
    }
  },
}
</script>

<style  scoped>
  .column {
    float: left;
    width: 33%;
    padding-left: 2%;
    color: #D2D2D2;
  }

  .row:after {
    content: "";
    display: table;
    clear: both;
  }

  .no_underline {
    text-decoration: none;
  }

  p {
    color: #D2D2D2;
    font-size: 90%;
  }

  a {
    color: #D2D2D2;
    text-decoration: underline;
    font-size: 80%;
  }

  html {
    scroll-behavior: smooth;
  }

  @media screen and (max-width: 600px) {
    .column {
      width: 100%;
    }
  }
</style>
