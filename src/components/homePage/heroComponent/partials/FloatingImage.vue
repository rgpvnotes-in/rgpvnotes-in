<script setup>
import heroImg from '../../../../assets/img/hero-img.png';
</script>

<template>
    <div
        class="col-xl-3 col-lg-6 order-1 order-lg-2 hero-img"
        data-aos="zoom-in"
        data-aos-delay="150"
    >
        <img :src="heroImg" class="img-fluid animated" alt="" />
    </div>
</template>

<style scoped>
@media (max-width: 991px) {
    .hero-img {
        text-align: center;
    }

    .hero-img img {
        width: 50%;
    }
}

@media (max-width: 768px) {
    .hero-img img {
        width: 60%;
    }
}

@media (max-width: 575px) {
    .hero-img img {
        width: 80%;
    }
}
</style>
