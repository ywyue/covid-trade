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
        <div>
          WHO Announces Mysterious Coronavirus-Related Pneumonia in Wuhan, China
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="January 21, 2020"
        subtitle="January 21, 2020"
        side="right"
      >
        <div>
          Chinese Scientist Confirms COVID-19 Human Transmission
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="January 31, 2020"
        subtitle="January 31, 2020"
        side="left"
      >
        <div>
          WHO Issues Global Health Emergency
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="February 2, 2020"
        subtitle="February 2, 2020"
        side="right"
      >
        <div>
          Global Air Travel Is Restricted
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="March 11, 2020"
        subtitle="March 11, 2020"
        side="left"
      >
        <div>
          WHO Declares COVID-19 a Pandemic
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="March 15, 2020"
        subtitle="March 15, 2020"
        side="right"
      >
        <div>
          Reports Find Extended Shutdowns Can Delay Second Wave
        </div>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<script>
export default {
name: "TimelineCovid",
  computed: {
    layout () {
      return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
    }
  }
}
</script>

<style scoped>

</style>
