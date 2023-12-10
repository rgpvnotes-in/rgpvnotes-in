<script setup>
import RightFloatingImage from './partials/FloatingImage.vue';
import LeftSearchAndSelector from './partials/SearchAndSelector.vue';
</script>

<template>
    <!-- ======= Hero Section ======= -->
    <section id="hero" class="d-flex align-items-center">
        <div class="container-fluid" data-aos="fade-up">
            <div class="row justify-content-center align-items-center">
                <LeftSearchAndSelector />
                <RightFloatingImage />
            </div>
        </div>
    </section>
    <!-- End Hero -->
</template>

<style scoped>
/*--------------------------------------------------------------
# Hero Section
--------------------------------------------------------------*/
#hero {
    width: 100%;
    height: 100vh;
    background: linear-gradient(
            45deg,
            rgba(86, 58, 250, 0.9) 0%,
            rgba(116, 15, 214, 0.9) 100%
        ),
        url('/assets/img/hero-bg.jpg') center center no-repeat;
    background-size: cover;
}

#hero .container-fluid {
    padding-top: 84px;
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

    #hero .container-fluid {
        padding-top: 68px;
    }
}

@media (max-width: 575px), (max-height: 600px) {
    #hero {
        height: auto;
    }
}
</style>
