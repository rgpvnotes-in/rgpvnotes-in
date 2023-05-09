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
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 1px;
    display: inline-block;
    padding: 10px 28px;
    border-radius: 5px;
    transition: 0.5s;
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

@media (max-width: 575px), (max-height: 600px) {
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
