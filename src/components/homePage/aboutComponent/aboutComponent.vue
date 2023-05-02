<script setup>
import aboutImg from '../../../assets/img/rgpv-round-logo-about.png'


</script>


<template>
  <!-- ======= About Section ======= -->
  <section id="about" class="about">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-6 order-1 order-lg-2 text-center"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          <img
            :src="aboutImg"
            class="img-fluid"
            alt=""
          />
        </div>
        <div
          class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content mt-lg-5"
          data-aos="fade-right"
        >
          <h3>RGPV NOTES</h3>
          <p class="fst-italic">
            RGPV Notes is a digital library offering free universal access to
            E-books, Notes, Lab Manual, Assignments &amp; Previous Year Question
            Papers.
          </p>
          <ul>
            <li>
              <i class="bi bi-check-circle"></i> There is no mandatory fee for
              the students, they can freely use most of our services without
              paying even a single rupee to us.
            </li>
            <li>
              <i class="bi bi-check-circle"></i> All the study material is just
              one click away, with just a single click you can either view or
              download study material from our ultra-fast servers.
            </li>
            <li>
              <i class="bi bi-check-circle"></i>You don't have to register for
              most of the services we provide. Mostly everything is available
              freely for the students without any condition or restriction.
            </li>
          </ul>
          <!-- <a href="#" class="read-more"
            >Read More <i class="bi bi-long-arrow-right"></i
          ></a> -->
        </div>
      </div>
    </div>
  </section>
  <!-- End About Section -->
</template>

<style scoped>
/*--------------------------------------------------------------
# About
--------------------------------------------------------------*/
.about {
  padding: 120px 0;
}

.about .content h3 {
  font-weight: 600;
  font-size: 32px;
  color: #2c4964;
}

.about .content ul {
  list-style: none;
  padding: 0;
}

.about .content ul li {
  padding-bottom: 10px;
}

.about .content ul i {
  font-size: 20px;
  padding-right: 4px;
  color: #5846f9;
}

.about .content p:last-child {
  margin-bottom: 0;
}

.about .content .read-more {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 10px 50px 10px 28px;
  border-radius: 5px;
  transition: 0.5s;
  color: #fff;
  background: linear-gradient(45deg, #5846f9 0%, #7b27d8 100%);
  position: relative;
}

.about .content .read-more:hover {
  background: linear-gradient(180deg, #5846f9 0%, #7b27d8 100%);
}

.about .content .read-more i {
  font-size: 22px;
  position: absolute;
  right: 20px;
  top: 12px;
}
</style>