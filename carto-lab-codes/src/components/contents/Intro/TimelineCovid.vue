<template>
  <div class="q-px-lg q-pb-md">
    <q-timeline :layout="layout" color="secondary">
      <!--      <q-timeline-entry heading>-->
      <!--        Key dates of COVID-19-->
      <!--      </q-timeline-entry>-->

      <q-timeline-entry subtitle="January 9, 2020" side="left">
        <q-card class="my-card left" flat>
          <q-card-section horizontal>
            <q-img
              class="col-5"
              height="150px"
              width="150px"
              src="images/who_logo.png"
            ></q-img>
            <q-card-section>
              <a
                href="https://www.who.int/china/news/detail/09-01-2020-who-statement-regarding-cluster-of-pneumonia-cases-in-wuhan-china"
              >
                <strong
                  >WHO Statement regarding cluster of pneumonia cases in Wuhan,
                  China</strong
                >
              </a>
              <q-space class="q-ma-sm" />
              At this point, the World Health Organization (WHO) still has
              doubts about the roots of what would become the COVID-19 pandemic,
              noting that the spate of pneumonia-like cases in Wuhan could have
              stemmed from a new coronavirus.
            </q-card-section>
          </q-card-section>
        </q-card>
      </q-timeline-entry>

      <q-timeline-entry subtitle="January 21, 2020" side="right">
        Chinese Scientist Confirms COVID-19 Human Transmission
      </q-timeline-entry>

      <q-timeline-entry subtitle="January 31, 2020" side="left">
        WHO Issues Global Health Emergency
      </q-timeline-entry>

      <q-timeline-entry subtitle="February 2, 2020" side="right">
        <q-card class="my-card right" flat>
          <q-card-section horizontal>
            <q-img
              class="col-5"
              height="150px"
              src="images/timeline-1.jpg"
            ></q-img>
            <q-card-section>
              <a
                href="https://www.bloomberg.com/news/articles/2020-02-02/coronavirus-these-countries-airlines-restrict-travel-to-china"
              >
                <strong>Global Air Travel Is Restricted</strong>
              </a>
              <q-space class="q-ma-md" />
              Many countries began to impose air-travel restrictions at this
              point, including the United States, Australia, Germany.
            </q-card-section>
          </q-card-section>
        </q-card>
      </q-timeline-entry>

      <q-timeline-entry subtitle="March 11, 2020" side="left">
        <q-card class="my-card left" flat>
          <q-card-section horizontal>
            <!--            <q-img-->
            <!--              class="col-5"-->
            <!--              height="150px"-->
            <!--              width="150px"-->
            <!--              src="images/who_logo.png"-->
            <!--            ></q-img>-->
            <q-card-section>
              <a
                href="https://www.who.int/director-general/speeches/detail/who-director-general-s-opening-remarks-at-the-media-briefing-on-covid-19---11-march-2020"
              >
                <strong>WHO Declares COVID-19 a Pandemic</strong>
              </a>
              <q-space class="q-ma-sm" />
              Tedros Adhanom Ghebreyesus, director general of WHO, declared
              COVID-19 a Pandemic and said the agency is “deeply concerned by
              the alarming levels of spread and severity” of the outbreak.
            </q-card-section>
          </q-card-section>
        </q-card>
      </q-timeline-entry>

      <q-timeline-entry subtitle="March 21, 2020" side="right">
        United States and AstraZeneca Form Vaccine Deal The US administration
        and AstraZeneca announce a collaboration to speed development of a
        COVID-19 vaccine called AZD1222.
      </q-timeline-entry>

      <q-timeline-entry subtitle="September, 2020" side="left">
        Pfizer, BioNTech, Moderna Expanded Phase 3 Trial
      </q-timeline-entry>
      <q-timeline-entry subtitle="Since January, 2021" side="right">
        Several countries and regions started vaccination. Till June 2021,
        Canada, Israel, United Kingdom marked as the top three countries with
        the highest share (> 60%) of people who received at least one dose of
        COVID-19 vaccine.
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
  width: 90%;
  max-width: 650px;
}

.left {
  float: right;
}

.right {
  float: left;
}
</style>
