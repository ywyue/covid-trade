<template>
<!--  Menu on the left of the page -->
  <div v-for="(item, index) in menuItems" :key="item.title">
    <q-item clickable v-ripple @click="setActiveIndex(index)" :class="activeIndex === index ? 'active' : ''">
      <q-item-section v-if="item.icon" avatar><q-icon :name="item.icon" /></q-item-section>
      <q-item-section>
        <q-item-label>{{ item.title }}</q-item-label>
        <q-item-label caption> {{ item.caption }}</q-item-label>
      </q-item-section>
    </q-item>
    <div v-if="index != menuItems.length - 1" style="horizontal-align: center; text-align: center; color: rgba(0,0,0,0)">|</div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: ['menuItems'],
  data() {
    return {};
  },
  methods: {
    setActiveIndex(e) {
      // set index to current viewing page
      this.$store.commit('sider/updateIndex', e);
      let c = document.getElementById('scroll').children;
      c.forEach((v, i) => {
        if (v.getAttribute('s') == e) {
          c[i].scrollIntoView({ behavior: 'smooth' });
        }
      });
    },
  },
  computed: {
    activeIndex() {
      return this.$store.state.sider.active;
    },
  },
};
</script>
<style scoped>
.active {
  background-color: #279B48;
}
</style>
