<script setup>

import heroImg from '../../../assets/img/hero-img.png'
// import { VueTyper } from "vue-typer";

</script>

<template>
  <!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex align-items-center">
    <div class="container-fluid" data-aos="fade-up">
      <div class="row justify-content-center">
        <div
          class="col-xl-5 col-lg-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center"
        >
          <h1>Welcome To RGPV NOTES</h1>
          <h2>One stop solution for all your RGPV needs</h2>
          <h2>
            We provide
            <!-- <vue-typer
              :text="[
                'notes',
                'previous year question paper',
                'university alerts',
              ]"
              :repeat="Infinity"
              :shuffle="false"
              initial-action="typing"
              :pre-type-delay="70"
              :type-delay="70"
              :pre-erase-delay="1000"
              :erase-delay="50"
              erase-style="backspace"
              :erase-on-complete="false"
              caret-animation="phase"
            ></vue-typer> -->
          </h2>

          <!-- <div>
            <a href="#about" class="btn-get-started scrollto">Learn More</a>
          </div> -->
        </div>
        <div
          class="col-xl-4 col-lg-6 order-1 order-lg-2 hero-img"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          <img
            :src="heroImg"
            class="img-fluid animated"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
  <!-- End Hero -->
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.vue-typer .custom.char.typed {
  color: rgba(255, 255, 255, 0.8);
  margin: 10px 0 0 0;
  font-size: 20px;
  font-weight: bold;
}

@media (max-width: 768px) {
  .vue-typer .custom.char.typed {
    font-size: 16px;
  }
}
</style>


<style scoped>
/*--------------------------------------------------------------
# Hero Section
--------------------------------------------------------------*/
#hero {
  width: 100%;
  height: 100vh;
  background: linear-gradient(45deg, rgba(86, 58, 250, 0.9) 0%, rgba(116, 15, 214, 0.9) 100%), url("/assets/img/hero-bg.jpg") center center no-repeat;
  background-size: cover;
}

#hero .container,
#hero .container-fluid {
  padding-top: 84px;
}

#hero h1 {
  margin: 0;
  font-size: 52px;
  font-weight: 700;
  line-height: 64px;
  color: #fff;
}

#hero h2 {
  color: rgba(255, 255, 255, 0.8);
  margin: 10px 0 0 0;
  font-size: 20px;
}

#hero .btn-get-started {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 10px 28px;
  border-radius: 5px;
  transition: 0.5s;
  margin-top: 30px;
  color: #fff;
  border: 2px solid #fff;
}

#hero .btn-get-started:hover {
  background: #fff;
  color: #5846f9;
}

#hero .animated {
  animation: up-down 2s ease-in-out infinite alternate-reverse both;
}

@media (min-width: 1200px) {
  #hero {
    background-attachment: fixed;
  }
}

@media (max-width: 991px) {
  #hero {
    text-align: center;
  }

  #hero .container,
  #hero .container-fluid {
    padding-top: 68px;
  }

  #hero .animated {
    animation: none;
  }

  #hero .hero-img {
    text-align: center;
  }

  #hero .hero-img img {
    width: 50%;
  }
}

@media (max-width: 768px) {
  #hero h1 {
    font-size: 26px;
    line-height: 36px;
  }

  #hero h2 {
    font-size: 18px;
    line-height: 24px;
  }

  #hero .hero-img img {
    width: 60%;
  }
}

@media (max-width: 575px) {
  #hero .hero-img img {
    width: 80%;
  }
}

@media (max-width: 575px),
(max-height: 600px) {
  #hero {
    height: auto;
  }
}

@keyframes up-down {
  0% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(-10px);
  }
}

</style>