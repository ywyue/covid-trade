<template>
  <q-page>
    <session-banner title="Outlook to Post-Pandemic Period"
                    subtitle=""
                    img-url="images/container4.jpg"/>
    <q-space class="q-ma-xl"/>
    <div class="row justify-center">
      <div class="col-12 col-md-8">
        <div class="text-body1 q-mt-lg q-mb-lg">
          The shadow of COVID-19 pandemic over the world economies will last long.
          With the vaccinations and stronger policy support, the global economies are expected to recover.
          But the ameliorating progress is uneven across countries.
        </div>
        <div class="text-body1 q-mt-lg q-mb-lg">
          Organization for Economic Co-operation and Development (OECD) released OECD Economic Outlook Volume 2021.
          It pointed out progress in vaccination in advanced countries and massive government support for people
          and companies are boosting prospects for the global economy.
        </div>
        <q-video
          :ratio="16/9"
          src="https://www.youtube.com/embed/bunsfGYpHF0"
        />
        <q-space class="q-ma-lg"/>

      </div>
    </div>
  </q-page>
</template>

<script>
import SessionBanner from "components/tools/SessionBanner";
export default {
  name: "Conclusion",
  components: {SessionBanner},
};
</script>

<style scoped></style>
