<script setup>
import logoImage from '../../assets/img/logo.png';

const props = defineProps({
    isInnerPage: Boolean,
});
</script>

<template>
    <!-- ======= Header ======= -->
    <header
        id="header"
        class="fixed-top"
        v-bind:class="{ 'header-inner-pages': props.isInnerPage }"
    >
        <div
            class="container d-flex align-items-center justify-content-between"
        >
            <a href="/" class="logo"
                ><img :src="logoImage" alt="" class="img-fluid"
            /></a>

            <nav id="navbar" class="navbar">
                <ul>
                    <li>
                        <a class="nav-link scrollto active" href="/#hero"
                            >Home</a
                        >
                    </li>
                    <li>
                        <a class="nav-link scrollto" href="/#about">About Us</a>
                    </li>
                    <li>
                        <a class="nav-link scrollto" href="/#services"
                            >Why Us</a
                        >
                    </li>
                    <li>
                        <a class="nav-link scrollto" href="/#portfolio"
                            >Our Services</a
                        >
                    </li>
                    <li>
                        <a class="nav-link" href="/our-journey">Our Journey</a>
                    </li>
                    <li>
                        <a class="nav-link scrollto" href="#contact"
                            >Contact</a
                        >
                    </li>
                    <li>
                        <a class="getstarted scrollto" href="/support-us"
                            >Support Us</a
                        >
                    </li>
                </ul>
                <i class="bi bi-list mobile-nav-toggle"></i>
            </nav>
            <!-- .navbar -->
        </div>
    </header>
    <!-- End Header -->
</template>

<style scoped>
/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
#header {
    transition: all 0.5s;
    z-index: 997;
    padding: 20px 0;
}

#header.header-scrolled,
#header.header-inner-pages {
    background: rgba(24, 6, 185, 0.8);
    padding: 12px 0;
}

#header .logo {
    font-size: 32px;
    margin: 0;
    padding: 0;
    line-height: 1;
    font-weight: 400;
    letter-spacing: 2px;
    text-transform: uppercase;
}

#header .logo a {
    color: #fff;
}

#header .logo img {
    max-height: 40px;
}

/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/**
* Desktop Navigation 
*/
.navbar {
    padding: 0;
}

.navbar ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    align-items: center;
}

.navbar li {
    position: relative;
}

.navbar > ul > li {
    padding: 10px 0 10px 24px;
}

.navbar a,
.navbar a:focus {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3px;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.7);
    white-space: nowrap;
    transition: 0.3s;
    position: relative;
}

.navbar a i,
.navbar a:focus i {
    font-size: 12px;
    line-height: 0;
    margin-left: 5px;
}

.navbar > ul > li > a:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #fff;
    visibility: hidden;
    width: 0px;
    transition: all 0.3s ease-in-out 0s;
}

.navbar a:hover:before,
.navbar li:hover > a:before,
.navbar .active:before {
    visibility: visible;
    width: 100%;
}

.navbar a:hover,
.navbar .active,
.navbar .active:focus,
.navbar li:hover > a {
    color: #fff;
}

.navbar .getstarted,
.navbar .getstarted:focus {
    padding: 8px 25px;
    margin-left: 30px;
    border-radius: 5px;
    color: #fff;
    transition: 0.3s;
    font-size: 14px;
    font-weight: 600;
    border: 2px solid rgba(255, 255, 255, 0.5);
}

.navbar .getstarted:hover,
.navbar .getstarted:focus:hover {
    color: #fff;
    border-color: #fff;
}

.navbar .getstarted:before,
.navbar li:hover > .getstarted:before {
    visibility: hidden;
}

.navbar .dropdown ul {
    display: block;
    position: absolute;
    left: 24px;
    top: calc(100% + 30px);
    margin: 0;
    padding: 10px 0;
    z-index: 99;
    opacity: 0;
    visibility: hidden;
    background: #fff;
    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
    transition: 0.3s;
}

.navbar .dropdown ul li {
    min-width: 200px;
}

.navbar .dropdown ul a {
    padding: 10px 20px;
    font-size: 14px;
    color: #2c4964;
}

.navbar .dropdown ul a i {
    font-size: 12px;
}

.navbar .dropdown ul a:hover,
.navbar .dropdown ul .active:hover,
.navbar .dropdown ul li:hover > a {
    color: #5846f9;
}

.navbar .dropdown:hover > ul {
    opacity: 1;
    top: 100%;
    visibility: visible;
}

.navbar .dropdown .dropdown ul {
    top: 0;
    left: calc(100% - 30px);
    visibility: hidden;
}

.navbar .dropdown .dropdown:hover > ul {
    opacity: 1;
    top: 0;
    left: 100%;
    visibility: visible;
}

@media (max-width: 1366px) {
    .navbar .dropdown .dropdown ul {
        left: -90%;
    }

    .navbar .dropdown .dropdown:hover > ul {
        left: -100%;
    }
}

/**
* Mobile Navigation 
*/
.mobile-nav-toggle {
    color: #fff;
    font-size: 28px;
    cursor: pointer;
    display: none;
    line-height: 0;
    transition: 0.5s;
}

@media (max-width: 991px) {
    .mobile-nav-toggle {
        display: block;
    }

    .navbar ul {
        display: none;
    }
}

.navbar-mobile {
    position: fixed;
    overflow: hidden;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(28, 47, 65, 0.9);
    transition: 0.3s;
    z-index: 999;
}

.navbar-mobile .mobile-nav-toggle {
    position: absolute;
    top: 15px;
    right: 15px;
}

.navbar-mobile ul {
    display: block;
    position: absolute;
    top: 55px;
    right: 15px;
    bottom: 15px;
    left: 15px;
    padding: 10px 0;
    background-color: #fff;
    overflow-y: auto;
    transition: 0.3s;
}

.navbar-mobile > ul > li {
    padding: 0;
}

.navbar-mobile a,
.navbar-mobile a:focus {
    padding: 10px 20px;
    font-size: 15px;
    color: #2c4964;
}

.navbar-mobile a:hover:before,
.navbar-mobile li:hover > a:before,
.navbar-mobile .active:before {
    visibility: hidden;
}

.navbar-mobile a:hover,
.navbar-mobile .active,
.navbar-mobile li:hover > a {
    color: #5846f9;
}

.navbar-mobile .getstarted,
.navbar-mobile .getstarted:focus {
    margin: 15px;
}

.navbar-mobile .dropdown ul {
    position: static;
    display: none;
    margin: 10px 20px;
    padding: 10px 0;
    z-index: 99;
    opacity: 1;
    visibility: visible;
    background: #fff;
    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
}

.navbar-mobile .dropdown ul li {
    min-width: 200px;
}

.navbar-mobile .dropdown ul a {
    padding: 10px 20px;
}

.navbar-mobile .dropdown ul a i {
    font-size: 12px;
}

.navbar-mobile .dropdown ul a:hover,
.navbar-mobile .dropdown ul .active:hover,
.navbar-mobile .dropdown ul li:hover > a {
    color: #5846f9;
}

.navbar-mobile .dropdown > .dropdown-active {
    display: block;
}
</style>

<style>
/*--------------------------------------------------------------
# Preloader
--------------------------------------------------------------*/
#preloader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    overflow: hidden;
    background: #fff;
}

#preloader:before {
    content: '';
    position: fixed;
    top: calc(50% - 30px);
    left: calc(50% - 30px);
    border: 6px solid #5846f9;
    border-top-color: #e7e4fe;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: animate-preloader 1s linear infinite;
}

@keyframes animate-preloader {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
