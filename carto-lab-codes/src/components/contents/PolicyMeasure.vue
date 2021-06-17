<template>
  <q-page>
    <session-banner
      img-url="images/container.jpg"
      title="Policies and measurements"
      subtitle="The health crisis has unleashed a global economic shock"
    />
    <subsession-title
      title="China's Trade Facilitation responses to the COVID-19 Pandemic"
    />
    <div class="row items-start text-center">
      <div class="col-12 col-md-6 text-center">
        <div class="text-body1">
          China has been at the epicentre of disease Covid-19, and it has
          launched a series of trade facilitation and compliance measures since
          January 2020.
          <q-space class="q-ma-md" />
          Maintaining incoming trade flows of medical supplies and food products
          has been seen as crucial.
          <q-space class="q-ma-md" />
          China also sought to minimize the disruption of COVID-19 on its export
          trade flows, which supplies nearly 20% of the global
          intermediate-goods trade.
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import SessionBanner from "components/tools/SessionBanner";
import SubsessionTitle from "components/tools/SubsessionTitle";
export default {
  name: "PolicyMeasure",
  components: {
    SubsessionTitle,
    SessionBanner,
  },
};
</script>

<style scoped></style>
