<template>
  <div
    class="q-pa-md items-center"
    style="
      background-color: #e0e0e0;
      height: 60px;
      margin-top: 0px;
      display: flex;
      justify-content: center;
    "
  >
    <q-btn
      @click="scroll"
      flat
      align="around"
      label="Source"
      icon="source"
      style="margin: auto; display: block"
    />
  </div>

  <div class="row" style="background-color: #e0e0e0" v-if="show" id="source">
    <div class="column">
      <span style="color: #505050; font-size: 120%">Data Source:</span>
      <div class="text-body2">
        <a href="https://www.imf.org/external/pubs/ft/weo/disclaim.htm"
          >IMF World Economic Outlook Database</a
        >
      </div>
      <div class="text-body2">
        <a
          href="https://unctadstat.unctad.org/wds/ReportFolders/reportFolders.aspx"
          >UNCTAD STAT</a
        >
      </div>
      <div class="text-body2">
        <a
          href="https://marketplace.officialstatistics.org/ais-weekly-port-calls"
          >AIS: Weekly Port Calls</a
        >
      </div>
    </div>
    <q-separator vertical inset color="white" />
    <div class="column">
      <span style="color: #505050; font-size: 120%">Software:</span>
    </div>
    <q-separator vertical inset color="white" />
    <div class="column">
      <span style="color: #505050; font-size: 120%">Images: </span>
      <div class="text-body2">
        <a href="https://www.flaticon.com/">FLATICON.COM</a>
      </div>
    </div>
    <q-space class="q-ma-md" />
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
      show: false,
    };
  },
  methods: {
    scroll() {
      if (this.show == true) {
        this.show = false;
      } else {
        this.show = true;
        setTimeout(() => {
          const element = document.getElementById("source");
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    },
  },
};
</script>

<style scoped>
.column {
  float: left;
  width: 33%;
  padding-left: 2%;
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
  font-size: 90%;
}

a {
  color: #505050;
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
