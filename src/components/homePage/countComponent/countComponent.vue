<template>
  <!-- ======= Counts Section ======= -->
  <section id="counts" class="counts">
    <div class="container">
      <div class="row counters">
        <div class="col-lg-3 col-6 text-center">
          <img src="https://www.rgpvnotes.in/assets/img/counter/notes.png" alt="" />
          <span
            data-purecounter-start="0"
            data-purecounter-end="500"
            data-purecounter-duration="1"
            class="purecounter"
          ></span>
          <p>SUBJECTS NOTES AVAILABLE</p>
        </div>

        <div class="col-lg-3 col-6 text-center">
          <img src="https://www.rgpvnotes.in/assets/img/counter/upload.png" alt="" />
          <span
            data-purecounter-start="0"
            data-purecounter-end="5000"
            data-purecounter-duration="1"
            class="purecounter"
          ></span>
          <p>MB PDF UPLOADED</p>
        </div>

        <div class="col-lg-3 col-6 text-center">
          <img src="https://www.rgpvnotes.in/assets/img/counter/download.png" alt="" />
          <span
            data-purecounter-start="0"
            data-purecounter-end="100000"
            data-purecounter-duration="1"
            class="purecounter"
          ></span>
          <p>FILES DOWNLOADED</p>
        </div>

        <div class="col-lg-3 col-6 text-center">
          <img src="https://www.rgpvnotes.in/assets/img/counter/team.png" alt="" />
          <span
            data-purecounter-start="0"
            data-purecounter-end="15"
            data-purecounter-duration="1"
            class="purecounter"
          ></span>
          <p>MEMBERS IN TEAM</p>
        </div>
      </div>
    </div>
  </section>
  <!-- End Counts Section -->
</template>


<style scoped>
/*--------------------------------------------------------------
# Counts
--------------------------------------------------------------*/
.counts {
  background: linear-gradient( 90deg,rgba(88,70,249,0.5) 0%,rgba(123,39,216,0.5) 100% ),url(/assets/img/counts-bg.png) center center no-repeat;
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