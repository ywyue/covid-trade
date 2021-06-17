<template>
  <div id="ways" class="row" style="margin:1%;padding:0px">
    <div class="col-12 col-md-4">
      <q-card class="my-card, container" style="width:95%">
        <q-img src="images/cov-trade.jpg" alt="art" class="image">
          <div class="text-h5 absolute-bottom text-right">
            Policy1
          </div>
        </q-img>
        <div class="overlay">
          <div class="text" style="text-align:left;">
            000
          </div>
        </div>
      </q-card>
    </div>

    <div class="col-12 col-md-4">
      <q-card class="my-card, container" style="width:95%">
        <q-img src="images/cov-trade.jpg" alt="art" class="image">
          <div class="text-h5 absolute-bottom text-right">
            Policy 2
          </div>
        </q-img>
        <div class="overlay">
          <div class="text" style="text-align:left;">
            00000
          </div>
        </div>
      </q-card>
    </div>

    <div class="col-12 col-md-4">
      <q-card class="my-card, container" style="width:95%">
        <q-img src="images/cov-trade.jpg" alt="art" class="image">
          <div class="text-h5 absolute-bottom text-right">
            Policy 3
          </div>
        </q-img>
        <div class="overlay">
          <div class="text" style="text-align:left;">
          000
          </div>
        </div>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
name: "policyCard"
}
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
  transition: .5s ease;
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
</style>
