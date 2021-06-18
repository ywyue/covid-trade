<template>
  <q-page>
    <session-banner
      img-url="images/container2.jpg"
      title="Policies & Measurements"
      subtitle=""
    />
    <subsession-title
      title="China's trade responses to the COVID-19 Pandemic"
    />
    <div class="items-center row justify-center">
      <div class="col-12 col-md-8">
        <div class="text-body1">
          China has been at the epicentre of disease Covid-19, and it has
          launched a series of trade facilitation and compliance measures since
          January 2020.
          <q-space class="q-ma-md" />
          Maintaining incoming trade flows of medical supplies and food products
          has been seen as crucial. China also sought to minimize the disruption
          of COVID-19 on its export trade flows, which supplies nearly
          <b>20%</b> of the global intermediate-goods trade.
        </div>
      </div>
    </div>
    <q-space class="q-ma-xl" />
    <div>
      <policy-card />
    </div>
  </q-page>
</template>

<script>
import SessionBanner from "components/tools/SessionBanner";
import SubsessionTitle from "components/tools/SubsessionTitle";
import PolicyCard from "components/contents/policy/policyCard";
export default {
  name: "PolicyMeasure",
  components: {
    PolicyCard,
    SubsessionTitle,
    SessionBanner,
  },
};
</script>

<style scoped></style>
