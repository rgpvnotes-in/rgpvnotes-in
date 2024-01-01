<template>
    <div
        class="col-xl-3 col-lg-6 order-1 order-lg-2 hero-img"
        data-aos="zoom-in"
        data-aos-delay="150"
    >
        <img src="https://www.rgpvnotes.in/assets/img/hero-img.png" class="img-fluid animated" alt="hero Img" />
    </div>
</template>

<style scoped>

@-webkit-keyframes up-down {
    0% {
        transform: translateY(10px)
    }

    100% {
        transform: translateY(-10px)
    }
}

@keyframes up-down {
    0% {
        transform: translateY(10px)
    }

    100% {
        transform: translateY(-10px)
    }
}
#hero .animated {
    animation: up-down 2s ease-in-out infinite alternate-reverse both;
}

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
