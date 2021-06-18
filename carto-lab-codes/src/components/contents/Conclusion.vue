<template>
  <q-page>
    <session-banner title="Outlook to Post-Pandemic Period"
                    subtitle=""
                    img-url="images/container4.jpg"/>
    <q-space class="q-ma-xl"/>
    <subsession-title title="The global economy is in recovery"/>
    <div class="row justify-center">
      <div class="col-12 col-md-8">
        <div class="text-body1 q-mt-lg q-mb-lg">
          The shadow of COVID-19 pandemic over the world economies will last long.
          With the vaccinations and stronger policy support, the global economies are expected to recover.
          But the ameliorating progress is uneven across countries.
        </div>
        <div class="text-body1 q-mt-lg q-mb-lg">
          Organization for Economic Co-operation and Development (OECD) released OECD Economic Outlook Volume 2021.
          It pointed out "progress in vaccination in advanced countries and massive government support for people
          and companies are boosting prospects for the global economy".
        </div>
        <q-video
          :ratio="16/9"
          src="https://www.youtube.com/embed/bunsfGYpHF0"
        />
        <q-space class="q-ma-lg"/>
      </div>
    </div>
    <subsession-title title="What can governments do?"/>
    <div class="row justify-center text-center" >
      <div class="col-12 col-md-3 title" >
        <div class="text-h5 text-bold title-text">Vaccinate and co-operate</div>
      </div>
      <div class="col-12 col-md-3 title">
        <div class="text-h5 text-bold title-text">Support people and business</div>
      </div>
      <div class="col-12 col-md-3 title">
        <div class="text-h5 text-bold title-text">Prepare for a sustainable recovery</div>
      </div>
    </div>
    <div class="row justify-center text-body2">
      <div class="col-12 col-md-3 content">
        Increase vaccine production and accelerate vaccination across the world.
        <q-space class="q-ma-sm"/>
        Reduce barriers to the supply chain of vaccine components and materials.
        <q-space class="q-ma-sm"/>
        Improve cooperation between countries and expand medical and financial resources to help developing regions.
      </div>
      <div class="col-12 col-md-3 content">
        Offer income support for workers in hard-hit sectors.
        Adapt policies according to economic and health developments to transition from emergency to recovery.
        <q-space class="q-ma-sm"/>
        Support companies affected by restrictions, preferably through grants and equity rather than debt.
        <q-space class="q-ma-sm"/>
        Help the low skilled and the vulnerable, improve training schemes and access to the labour market.
      </div>
      <div class="col-12 col-md-3 content">
        Avoid removing government stimulus funding too early.
        <q-space class="q-ma-sm"/>
        Invest in healthcare, cleaner infrastructure and digital technology to foster a transition to a more resilient and sustainable economy.
        <q-space class="q-ma-sm"/>
        Focus on structural reforms that can boost medium-term growth in productivity and employment.
      </div>
    </div>
  </q-page>
</template>

<script>
import SessionBanner from "components/tools/SessionBanner";
import SubsessionTitle from "components/tools/SubsessionTitle";
export default {
  name: "Conclusion",
  components: {SubsessionTitle, SessionBanner},
};
</script>

<style scoped>
.title{
  background-color: #cdcdcd;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 5px;
  padding: 10px;
}
.title-text{
  color: #0C120C;
}
.content {
  margin: 5px;
  padding: 10px;
}
</style>
