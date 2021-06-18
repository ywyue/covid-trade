<template>
  <div class="q-px-lg q-pb-md">
    <q-timeline :layout="layout" color="secondary">
      <!--      <q-timeline-entry heading>-->
      <!--        Key dates of COVID-19-->
      <!--      </q-timeline-entry>-->

      <q-timeline-entry
        title="January 9, 2020"
        subtitle="January 9, 2020"
        side="left"
      >
        <q-card class="my-card left" flat bordered>
          <q-card-section horizontal>
            <q-card-section>
              WHO Announces Mysterious Coronavirus-Related Pneumonia in Wuhan,
              China
            </q-card-section>

            <q-img
              class="col-5"
              src="https://cdn.quasar.dev/img/parallax2.jpg"
            ></q-img>
          </q-card-section>
        </q-card>
      </q-timeline-entry>

      <q-timeline-entry
        title="January 21, 2020"
        subtitle="January 21, 2020"
        side="right"
      >
        <q-card class="my-card right" flat bordered>
          <q-card-section horizontal>
            <q-img
              class="col-5"
              src="https://cdn.quasar.dev/img/parallax2.jpg"
            ></q-img>
            <q-card-section>
              Chinese Scientist Confirms COVID-19 Human Transmission
            </q-card-section>
          </q-card-section>
        </q-card>
      </q-timeline-entry>

      <q-timeline-entry
        title="January 31, 2020"
        subtitle="January 31, 2020"
        side="left"
      >
        <q-card class="my-card left" flat bordered>
          <q-card-section horizontal>
            <q-card-section>
              WHO Issues Global Health Emergency
            </q-card-section>

            <q-img
              class="col-5"
              src="https://cdn.quasar.dev/img/parallax2.jpg"
            ></q-img>
          </q-card-section>
        </q-card>
      </q-timeline-entry>

      <q-timeline-entry
        title="February 2, 2020"
        subtitle="February 2, 2020"
        side="right"
      >
        <q-card class="my-card right" flat bordered>
          <q-card-section horizontal>
            <q-img
              class="col-5"
              src="https://cdn.quasar.dev/img/parallax2.jpg"
            ></q-img>
            <q-card-section> Global Air Travel Is Restricted </q-card-section>
          </q-card-section>
        </q-card>
      </q-timeline-entry>

      <q-timeline-entry
        title="March 11, 2020"
        subtitle="March 11, 2020"
        side="left"
      >
        <q-card class="my-card left" flat bordered>
          <q-card-section horizontal>
            <q-img
              class="col-5"
              src="https://cdn.quasar.dev/img/parallax2.jpg"
            ></q-img>
            <q-card-section> WHO Declares COVID-19 a Pandemic </q-card-section>
          </q-card-section>
        </q-card>
      </q-timeline-entry>

      <q-timeline-entry
        title="March 15, 2020"
        subtitle="March 15, 2020"
        side="right"
      >
        <q-card class="my-card right" flat bordered>
          <q-card-section horizontal>
            <q-img
              class="col-5"
              src="https://cdn.quasar.dev/img/parallax2.jpg"
            ></q-img>
            <q-card-section>
              Reports Find Extended Shutdowns Can Delay Second Wave
            </q-card-section>
          </q-card-section>
        </q-card>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<script>
export default {
  name: "TimelineCovid",
  computed: {
    layout() {
      return this.$q.screen.lt.sm
        ? "dense"
        : this.$q.screen.lt.md
        ? "comfortable"
        : "loose";
    },
  },
};
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 650px;
}

.left {
  float: right;
}

.right {
  float: left;
}
</style>
