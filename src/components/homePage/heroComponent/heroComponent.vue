<script setup>
import { ref } from 'vue';
import heroImg from '../../../assets/img/hero-img.png';
import {
    programNamesArray,
    schemeNamesArray,
    yearArray,
    branchArray,
} from '@utils/const/index.js';

const shouldShowProgram = ref(true);
const shouldShowScheme = ref(false);
const shouldShowYear = ref(false);
const shouldShowBranch = ref(false);

const selectedProgram = ref('');
const selectedScheme = ref('');
const selectedYear = ref('');
const selectedBranch = ref('');

const changeSelectedProgram = (programName = '') => {
    selectedProgram.value = programName;
    shouldShowProgram.value = false;
    shouldShowScheme.value = true;
};
const changeSelectedScheme = (schemeName = '') => {
    selectedScheme.value = schemeName;
    shouldShowScheme.value = false;
    shouldShowYear.value = true;
};
const changeSelectedYear = (year = '') => {
    selectedYear.value = year;
    shouldShowYear.value = false;
    shouldShowBranch.value = true;
};
const changeSelectedBranch = (branch = '') => {
    selectedBranch.value = branch;
    redirectToStudyMaterialPage(
        selectedProgram.value,
        selectedScheme.value,
        selectedYear.value,
        selectedBranch.value,
    );
};

const redirectToStudyMaterialPage = (
    selectedProgram,
    selectedScheme,
    selectedYear,
    selectedBranch,
) => {
    if (selectedProgram && selectedScheme && selectedYear && selectedBranch) {
        window.location.href = `\\${selectedProgram}\\${selectedScheme}\\${selectedYear}\\${selectedBranch}`; 
    }
};
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

                    <div class="input-group mb-3 mt-4 hero-custom-container">
                        <input
                            type="text"
                            class="form-control"
                            name="subjectSubject"
                            placeholder="Subject Name"
                            aria-label="subjectSubject"
                            aria-describedby="subjectSubject"
                            data-subject-search-input=""
                        />
                        <button
                            class="btn btn-outline-light"
                            type="button"
                            data-subject-search-btn=""
                        >
                            Search
                        </button>
                    </div>

                    <div class="d-flex align-items-center flex-column mb-3">
                        <hr class="search-subject-division" data-content="OR" />
                    </div>

                    <div
                        data-select-program-container
                        v-if="shouldShowProgram"
                        class="d-flex align-items-center flex-column hero-custom-container"
                    >
                        <h3 class="text-white mb-3">
                            Please select the program
                        </h3>

                        <div
                            data-program-btn-container
                            class="d-flex flex-wrap justify-content-center"
                        >
                            <span
                                v-for="programName in programNamesArray"
                                :key="programName._id"
                                @click="
                                    changeSelectedProgram(
                                        programName.parameterText,
                                    )
                                "
                                class="btn-get-started me-2 mb-2"
                                >{{ programName.shortDisplayText }}</span
                            >
                        </div>
                    </div>

                    <div
                        data-select-scheme-container
                        v-if="shouldShowScheme"
                        class="d-flex align-items-center flex-column hero-custom-container"
                    >
                        <h3 class="text-white mb-3">
                            Please select the scheme
                        </h3>

                        <div
                            data-program-btn-container
                            class="d-flex flex-wrap justify-content-center"
                        >
                            <span
                                v-for="schemeName in schemeNamesArray"
                                :key="schemeName"
                                @click="
                                    changeSelectedScheme(
                                        schemeName.parameterText,
                                    )
                                "
                                class="btn-get-started me-2 mb-2"
                                >{{ schemeName.shortDisplayText }}</span
                            >
                        </div>
                    </div>

                    <div
                        data-select-year-container
                        v-if="shouldShowYear"
                        class="d-flex align-items-center flex-column hero-custom-container"
                    >
                        <h3 class="text-white mb-3">Please select the year</h3>

                        <div
                            data-program-btn-container
                            class="d-flex flex-wrap justify-content-center"
                        >
                            <span
                                v-for="yearName in yearArray"
                                :key="yearName"
                                @click="changeSelectedYear(yearName)"
                                class="btn-get-started me-2 mb-2"
                                >{{ yearName }}</span
                            >
                        </div>
                    </div>

                    <div
                        data-select-branch-container
                        v-if="shouldShowBranch"
                        class="d-flex align-items-center flex-column hero-custom-container"
                    >
                        <h3 class="text-white mb-3">
                            Please select the branch
                        </h3>

                        <div
                            data-program-btn-container
                            class="d-flex flex-wrap justify-content-center"
                        >
                            <span
                                v-for="branchName in branchArray"
                                :key="branchName"
                                @click="changeSelectedBranch(branchName)"
                                class="btn-get-started me-2 mb-2"
                                >{{ branchName }}</span
                            >
                        </div>
                    </div>
                </div>
                <div
                    class="col-xl-4 col-lg-6 order-1 order-lg-2 hero-img"
                    data-aos="zoom-in"
                    data-aos-delay="150"
                >
                    <img :src="heroImg" class="img-fluid animated" alt="" />
                </div>
            </div>
        </div>
    </section>
    <!-- End Hero -->
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hero-custom-container {
    width: 100%;
    max-width: 990px;
}

/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
    .search-subject-division {
        width: 75%;
    }
}

@media (min-width: 2200px) {
    .search-subject-division {
        margin-left: -1vw;
    }
}

.search-subject-division {
    line-height: 1em;
    position: relative;
    outline: 0;
    border: 0;
    color: black;
    text-align: center;
    height: 1.5em;
    opacity: 0.75;
    width: 100%;
    max-width: 667px;
    font-weight: bold;
}
.search-subject-division:before {
    content: '';
    /* 
     use the linear-gradient for the fading effect
     use a solid background color for a solid bar */
    background: linear-gradient(to right, transparent, #818078, transparent);
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 1px;
}
.search-subject-division:after {
    content: attr(data-content);
    position: relative;
    display: inline-block;

    padding: 0 0.5em;
    line-height: 1.5em;
    /* this is really the only tricky part, you need to specify the background color of the container element... */
    color: #000;
    background-color: #fcfcfa;
}
</style>

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
