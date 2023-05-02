<script setup>
const typeFilters = [
    {
        cssClass: 'grading',
        text: 'Grading System',
    },
    {
        cssClass: 'non-grading',
        text: 'Non Grading System',
    },
    {
        cssClass: 'lateral-entry',
        text: 'Lateral Entry',
    },
    {
        cssClass: 'cbcs',
        text: 'CBCS',
    },
    {
        cssClass: 'cbgs',
        text: 'CBGS',
    },
    {
        cssClass: 'as-per-coa',
        text: 'As per COA',
    },
];
const programList = [
    {
        programLink: '/be/',
        programName: 'Bachelor of Engineering',
        programCategory: [
            {
                name: 'non-grading',
                image: 'assets/img/program/be-non-grading.png',
            },
            { name: 'grading', image: 'assets/img/program/be-grading.png' },
            { name: 'cbcs', image: 'assets/img/program/be-cbcs.png' },
            { name: 'cbgs', image: 'assets/img/program/be-cbgs.png' },
        ],
    },
    {
        programLink: '/btech/',
        programName: 'Bachelor of Technology',
        programCategory: [
            {
                name: 'non-grading',
                image: 'assets/img/program/btech-non-grading.png',
            },
            { name: 'grading', image: 'assets/img/program/btech-grading.png' },
        ],
    },
];

const systemName = (cssClassName) => {
    const systemDetails = typeFilters.find(
        (element) => element.cssClass === cssClassName,
    );
    return systemDetails.text;
};
</script>

<template>
    <!-- ======= Portfolio Section ======= -->
    <section id="portfolio" class="portfolio">
        <div class="container" data-aos="fade-up">
            <div class="section-title">
                <h2>OUR SERVICES</h2>
                <!-- <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p> -->
            </div>

            <div class="row">
                <div class="col-lg-12 d-flex justify-content-center">
                    <ul id="portfolio-flters">
                        <li data-filter="*" class="filter-active">All</li>
                        <li
                            v-for="(item, index) in typeFilters"
                            :key="`filter-${index}`"
                            :data-filter="`.filter-${item['cssClass']}`"
                        >
                            {{ item.text }}
                        </li>
                    </ul>
                </div>
            </div>

            <div class="row portfolio-container">
                <template v-for="program in programList">
                    <div
                        v-for="(
                            systemDetails, systemIndex
                        ) in program.programCategory"
                        :key="`system-${program.programCategory}-${systemIndex}`"
                        class="col-lg-4 col-md-6 portfolio-item"
                        :class="`filter-${systemDetails.name}`"
                    >
                        <a :href="program.programLink" title="More Details">
                            <div class="portfolio-wrap">
                                <img
                                    :src="systemDetails.image"
                                    class="img-fluid"
                                    alt=""
                                />
                                <div class="portfolio-info">
                                    <h4>{{ program.programName }}</h4>
                                    <p>
                                        {{ systemName(systemDetails.name) }}
                                        <br />
                                        Notes &amp; Question Papers
                                    </p>
                                </div>
                                <div class="portfolio-links"></div>
                            </div>
                        </a>
                    </div>
                </template>
            </div>
        </div>
    </section>
    <!-- End Portfolio Section -->
</template>


<style scoped>
/*--------------------------------------------------------------
# Portfolio
--------------------------------------------------------------*/
.portfolio .portfolio-item {
    margin-bottom: 30px;
}

.portfolio #portfolio-flters {
    padding: 0;
    margin: 0 auto 25px auto;
    list-style: none;
    text-align: center;
    border-radius: 50px;
    padding: 2px 15px;
}

.portfolio #portfolio-flters li {
    cursor: pointer;
    display: inline-block;
    padding: 10px 15px;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
    color: #444444;
    margin-bottom: 5px;
    transition: all 0.3s ease-in-out;
    border-radius: 5px;
    font-family: 'Poppins', sans-serif;
}

.portfolio #portfolio-flters li:hover,
.portfolio #portfolio-flters li.filter-active {
    color: #fff;
    background: #5846f9;
}

.portfolio #portfolio-flters li:last-child {
    margin-right: 0;
}

.portfolio .portfolio-wrap {
    transition: 0.3s;
    position: relative;
    overflow: hidden;
    z-index: 1;
}

.portfolio .portfolio-wrap::before {
    content: '';
    background: rgba(88, 70, 249, 0.8);
    position: absolute;
    left: 30px;
    right: 30px;
    top: 30px;
    bottom: 30px;
    transition: all ease-in-out 0.3s;
    z-index: 2;
    opacity: 0;
}

.portfolio .portfolio-wrap .portfolio-info {
    opacity: 0;
    position: absolute;
    top: 10%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 3;
    transition: all ease-in-out 0.3s;
}

.portfolio .portfolio-wrap .portfolio-info h4 {
    font-size: 20px;
    color: #fff;
    font-weight: 600;
}

.portfolio .portfolio-wrap .portfolio-info p {
    color: #ffffff;
    font-size: 14px;
    text-transform: uppercase;
}

.portfolio .portfolio-wrap .portfolio-links {
    opacity: 0;
    left: 0;
    right: 0;
    bottom: 10%;
    text-align: center;
    z-index: 3;
    position: absolute;
    transition: all ease-in-out 0.3s;
}

.portfolio .portfolio-wrap .portfolio-links a {
    color: rgba(255, 255, 255, 0.6);
    margin: 0 2px;
    font-size: 28px;
    display: inline-block;
    transition: 0.3s;
}

.portfolio .portfolio-wrap .portfolio-links a:hover {
    color: #fff;
}

.portfolio .portfolio-wrap:hover::before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 1;
}

.portfolio .portfolio-wrap:hover .portfolio-info {
    opacity: 1;
    top: calc(50% - 48px);
}

.portfolio .portfolio-wrap:hover .portfolio-links {
    opacity: 1;
    bottom: calc(50% - 50px);
}

/*--------------------------------------------------------------
# Portfolio Details
--------------------------------------------------------------*/
.portfolio-details {
    padding-top: 40px;
}

.portfolio-details .portfolio-details-slider img {
    width: 100%;
}

.portfolio-details .portfolio-details-slider .swiper-pagination {
    margin-top: 20px;
    position: relative;
}

.portfolio-details
    .portfolio-details-slider
    .swiper-pagination
    .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background-color: #fff;
    opacity: 1;
    border: 1px solid #5846f9;
}

.portfolio-details
    .portfolio-details-slider
    .swiper-pagination
    .swiper-pagination-bullet-active {
    background-color: #5846f9;
}

.portfolio-details .portfolio-info {
    padding: 30px;
    box-shadow: 0px 0 30px rgba(44, 73, 100, 0.08);
}

.portfolio-details .portfolio-info h3 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
}

.portfolio-details .portfolio-info ul {
    list-style: none;
    padding: 0;
    font-size: 15px;
}

.portfolio-details .portfolio-info ul li + li {
    margin-top: 10px;
}

.portfolio-details .portfolio-description {
    padding-top: 30px;
}

.portfolio-details .portfolio-description h2 {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 20px;
}

.portfolio-details .portfolio-description p {
    padding: 0;
}
</style>