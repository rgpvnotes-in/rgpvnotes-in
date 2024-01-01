<template>
  <!-- ======= Counts Section ======= -->
  <section id="counts" class="counts">
    <div class="container">
      <div class="row counters">
        <div class="col-lg-3 col-6 text-center">
          <img src="https://www.rgpvnotes.in/assets/img/counter/notes.png" alt="" />
          <span class="purecounter">{{ counter1 }}</span>
          <p>SUBJECTS NOTES AVAILABLE</p>
        </div>

        <div class="col-lg-3 col-6 text-center">
          <img src="https://www.rgpvnotes.in/assets/img/counter/upload.png" alt="" />
          <span class="purecounter">{{ counter2 }}</span>
          <p>MB PDF UPLOADED</p>
        </div>

        <div class="col-lg-3 col-6 text-center">
          <img src="https://www.rgpvnotes.in/assets/img/counter/download.png" alt="" />
          <span class="purecounter">{{ counter3 }}</span>
          <p>FILES DOWNLOADED</p>
        </div>

        <div class="col-lg-3 col-6 text-center">
          <img src="https://www.rgpvnotes.in/assets/img/counter/team.png" alt="" />
          <span class="purecounter">{{ counter4 }}</span>
          <p>MEMBERS IN TEAM</p>
        </div>
      </div>
    </div>
  </section>
  <!-- End Counts Section -->
</template>

<script setup>
import { ref, onMounted } from 'vue';

const counter1 = ref(0);
const counter2 = ref(0);
const counter3 = ref(0);
const counter4 = ref(0);

const startCounting = (targetCount = 0, counterName = '') => {
  const delay = (Math.floor(Math.random() * 5) + 1) * 10; // milliseconds

  const countInterval = setInterval(() => {
    if (counterName.value < targetCount) {
      counterName.value++;
    } else {
      clearInterval(countInterval);
    }
  }, delay);
};

onMounted(() => {
  startCounting(500, counter1);
  startCounting(5000, counter2);
  startCounting(100000, counter3);
  startCounting(15, counter4);
});
</script>

<style scoped>
/*--------------------------------------------------------------
# Counts
--------------------------------------------------------------*/
.counts {
  background: linear-gradient(90deg, rgba(88, 70, 249, 0.5) 0%, rgba(123, 39, 216, 0.5) 100%), url(/assets/img/counts-bg.png) center center no-repeat;
  padding: 80px 0 60px;
  background-size: cover;
}

.counts .counters span {
  font-size: 48px;
  display: block;
  color: #fff;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
}

.counts .counters p {
  padding: 0;
  margin: 0 0 20px 0;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.8);
}
</style>