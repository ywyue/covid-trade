<template>
  <div id="scroll" style="height: 100%">
    <Introduction s="0" />
    <GlobalSituation s="1"/>
    <ChinaSituation s="2"/>
    <PolicyMeasure s="3"/>
    <Conclusion s="4"/>
    <Source/>
  </div>
</template>

<script>
import Introduction from "components/contents/Introduction";
import ChinaSituation from "components/contents/ChinaSituation";
import GlobalSituation from "components/contents/GlobalSituation";
import PolicyMeasure from "components/contents/PolicyMeasure";
import Conclusion from "components/contents/Conclusion";
import Source from "components/Source";

export default {
  name: 'PageIndex',
  components: {
    Source,
    PolicyMeasure,
    GlobalSituation,
    Introduction,
    ChinaSituation,
    Conclusion
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    let c = document.getElementById('scroll').children;
    const onScroll = () => {
      c.forEach((e, i) => {
        let p = e.getBoundingClientRect();
        if (p.y >= -p.height - 150 && p.y <= 150) {
          this.$store.commit('sider/updateIndex', i);
        }
      });
    };
    window.document.addEventListener('scroll', onScroll);
  },
};
</script>
