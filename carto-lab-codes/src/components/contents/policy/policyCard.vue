<template>
  <div id="ways" class="row" style="margin: 1%; padding: 0px">
    <div class="col-12 col-md-4">
      <q-card class="my-card, container" style="width: 95%">
        <q-img src="images/cov-measure1.jpg" alt="art" class="image">
          <div class="text-h6 absolute-bottom text-right">
            Measures to promote trade facilitation
          </div>
        </q-img>
        <div class="overlay">
          <div class="text" style="text-align: left">
            The General Administration of Customs of China (GACC) issued a
            series of measures such as the following ones, to ensure both
            effective control against the outbreak of COVID-19 and to facilitate
            resuming business operations: <br />

            <li>
              <a
                href="http://english.customs.gov.cn/Statics/8f0f8824-eef2-492b-ace6-77d84bf12f1f.html"
                target="_blank"
                >10 facilitative measures</a
              >
              as foreign-trade businesses begin to resume operations,
            </li>
            <li>
              <a
                href="http://english.customs.gov.cn/Statics/e980894c-edb2-4698-a11a-33993d4e5945.html"
                target="_blank"
                >10 measures</a
              >
              to support the China Railway (CR) Express and
            </li>
            <li>
              <a
                href="http://www.customs.gov.cn/customs/xwfb34/302425/2892073/index.html"
                target="_blank"
                >List of measures</a
              >
              for coordinating work to prevent and control the epidemic at ports
              and for facilitating customs clearance
            </li>
          </div>
        </div>
      </q-card>
    </div>

    <div class="col-12 col-md-4">
      <q-card class="my-card, container" style="width: 95%">
        <q-img src="images/cov-measure2.jpg" alt="art" class="image">
          <div class="text-h6 absolute-bottom text-right">
            Measures to contain COVID-19
          </div>
        </q-img>
        <div class="overlay">
          <div class="text" style="text-align: left">
            Getting medical supplies without delays required Chinese Customs and
            other compliance authorities to adopt several exceptional
            initiatives such as the following:
            <li>Speeding up the release of goods</li>
            <li>Enhancing access to information about new procedures</li>
            <li>Reducing tariffs</li>
            <li>Adopting more flexible sanitary requirements</li>
            <li>Keeping records</li>
            <li>Coping with trade restrictions</li>
          </div>
        </div>
      </q-card>
    </div>

    <div class="col-12 col-md-4">
      <q-card class="my-card, container" style="width: 95%">
        <q-img src="images/cov-measure3.jpg" alt="art" class="image">
          <div class="text-h6 absolute-bottom text-right">
            Measures to prevent supply chain disruption
          </div>
        </q-img>
        <div class="overlay">
          <div class="text" style="text-align: left">
            COVID-19 has slowed down global trade flows and, as a result,
            importers are struggling to get inputs and inventories are running
            low. China has adopted the following measures to prevent supply
            chain disruption and to facilitate resuming business operations:
            <li>Relaxing procedures and requirements</li>
            <li>Expediting clearance</li>
            <li>Reducing costs</li>
            <li>Enhancing logistic/transport capabilities</li>
            <li>International coordination</li>
          </div>
        </div>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "policyCard",
};
</script>

<style scoped>
/* on hovering, shows text information over image card */
.container {
  position: relative;
  width: 50%;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: rgba(45, 45, 45, 0.7);
}

.container:hover .overlay {
  opacity: 1;
}

.text {
  color: white;
  font-size: 18px;
  position: absolute;
  top: 50%;
  left: 50%;
  right: 0%;
  width: 90%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

a:link {
  color: white;
  background-color: transparent;
  text-decoration: underline;
}
</style>
