<script>
import { ref } from 'vue';

import {
    programNamesArray,
    schemeNamesArray,
    yearArray,
    branchArray,
} from '@utils/const/index.js';

export default {
    props: {
        isInnerPage: Boolean,
        selectedProgramProp: {
            required: false,
            type: String,
            default: '',
        },
        selectedSchemeProp: {
            required: false,
            type: String,
            default: '',
        },
        selectedYearProp: {
            required: false,
            type: String,
            default: '',
        },
        selectedBranchProp: {
            required: false,
            type: String,
            default: '',
        },
    },
    setup(props) {
        const searchSubjectName = ref('');
        const searchMeBtnRef = ref(null)
        const shouldShowProgram =
            props.selectedProgramProp === '' ? ref(true) : ref(false);
        const shouldShowScheme =
            props.selectedSchemeProp === '' ? ref(true) : ref(false);
        const shouldShowYear =
            props.selectedYearProp === '' ? ref(true) : ref(false);
        const shouldShowBranch =
            props.selectedBranchProp === '' ? ref(true) : ref(false);

        const selectedProgram =
            props.selectedProgramProp === ''
                ? ref('')
                : ref(props.selectedProgramProp);
        const selectedScheme =
            props.selectedSchemeProp === ''
                ? ref('')
                : ref(props.selectedSchemeProp);
        const selectedYear =
            props.selectedYearProp === ''
                ? ref('')
                : ref(props.selectedYearProp);
        const selectedBranch =
            props.selectedBranchProp === ''
                ? ref('')
                : ref(props.selectedBranchProp);

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

            if ('1st year' === year) {
                redirectToStudyMaterialPage(
                    selectedProgram.value,
                    selectedScheme.value,
                    selectedYear.value,
                    selectedBranch.value,
                );
            } else {
                shouldShowYear.value = false;
                shouldShowBranch.value = true;
            }
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
            selectedProgram = '',
            selectedScheme = '',
            selectedYear = '',
            selectedBranch = '',
        ) => {
            if ('1st year' === selectedYear) {
                window.location.href = `/${selectedProgram.toLowerCase()}/${selectedScheme.toLowerCase().replace(/ /gm, "-")}/${selectedYear.replace(/ /gm, "-")}`;
            } else {
                window.location.href = `/${selectedProgram.toLowerCase()}/${selectedScheme.toLowerCase().replace(/ /gm, "-")}/${selectedBranch.toLowerCase().replace(/&/gm, "and").replace(/ /gm, "-")}-${selectedYear.replace(/ /gm, "-")}`;
            }
        };

        const searchSubject = () => {
            searchMeBtnRef.value.click();
            searchMeBtnRef.value = '';
        }

        return {
            programNamesArray,
            schemeNamesArray,
            yearArray,
            branchArray,
            changeSelectedProgram,
            changeSelectedScheme,
            changeSelectedYear,
            changeSelectedBranch,
            shouldShowProgram,
            shouldShowScheme,
            shouldShowYear,
            shouldShowBranch,
            searchSubjectName,
            searchSubject,
            searchMeBtnRef
        };
    },
};
</script>

<template>
    <div
        class="pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center"
        :class="[
            isInnerPage
                ? 'inner-pages-css col-xl-12 col-lg-12 align-items-center'
                : 'col-xl-6 col-lg-6',
        ]"
    >
        <h1>Welcome To RGPV NOTES</h1>
        <h2>One stop solution for all your RGPV needs</h2>

        <div class="input-group mb-3 mt-4 hero-custom-container">
            <a :href="`https://www.google.com/search?q=site:www.rgpvnotes.in ${searchSubjectName}`" target="_blank" rel="noopener noreferrer" ref="searchMeBtnRef" ></a>
            <input
                type="text"
                class="form-control"
                name="subjectSubject"
                placeholder="Subject Name"
                aria-label="subjectSubject"
                aria-describedby="subjectSubject"
                data-subject-search-input=""
                :style="[isInnerPage ? 'border:1px solid #000' : '']"
                v-model="searchSubjectName"
                v-on:keyup.enter="searchSubject()" >
            <button
                class="btn"
                :class="[
                    isInnerPage ? 'btn-outline-dark' : 'btn-outline-light',
                ]"
                type="button"
                @click='searchSubject()'
                data-subject-search-btn=""
            >
                Search
            </button>
        </div>

        <div
            class="d-flex align-items-center flex-column mb-3"
            :class="[isInnerPage ? 'w-100' : '']"
        >
            <hr class="search-subject-division" data-content="OR" />
        </div>

        <div
            data-select-program-container
            v-if="shouldShowProgram"
            class="d-flex align-items-center flex-column hero-custom-container"
        >
            <h3
                class="mb-3"
                :class="[isInnerPage ? 'text-dark' : 'text-white']"
            >
                Please select the program
            </h3>

            <div
                data-program-btn-container
                class="d-flex flex-wrap justify-content-center"
            >
                <span
                    v-for="programName in programNamesArray"
                    :key="programName._id"
                    @click="changeSelectedProgram(programName.folderName)"
                    class="theme-default-btn me-2 mb-2"
                    >{{ programName.shortDisplayText }}</span
                >
            </div>
        </div>

        <div
            data-select-scheme-container
            v-else-if="shouldShowScheme"
            class="d-flex align-items-center flex-column hero-custom-container"
        >
            <h3
                class="mb-3"
                :class="[isInnerPage ? 'text-dark' : 'text-white']"
            >
                Please select the scheme
            </h3>

            <div
                data-program-btn-container
                class="d-flex flex-wrap justify-content-center"
            >
                <span
                    v-for="schemeName in schemeNamesArray"
                    :key="schemeName._id"
                    @click="changeSelectedScheme(schemeName.folderName)"
                    class="theme-default-btn me-2 mb-2"
                    >{{ schemeName.shortDisplayText }}</span
                >
            </div>
            <div>
                <span
                    @click="shouldShowProgram = true"
                    class="theme-default-btn me-2 mb-2 theme-default-btn-orange-border"
                    > Back To Course Program List</span
                >
            </div>
        </div>

        <div
            data-select-year-container
            v-else-if="shouldShowYear"
            class="d-flex align-items-center flex-column hero-custom-container"
        >
            <h3
                class="mb-3"
                :class="[isInnerPage ? 'text-dark' : 'text-white']"
            >
                Please select the year
            </h3>

            <div
                data-program-btn-container
                class="d-flex flex-wrap justify-content-center"
            >
                <span
                    v-for="yearName in yearArray"
                    :key="yearName._id"
                    @click="changeSelectedYear(yearName.shortDisplayText)"
                    class="theme-default-btn me-2 mb-2"
                    >{{ yearName.longDisplayText }}</span
                >
            </div>
            <div>
                <span
                    @click="shouldShowScheme = true"
                    class="theme-default-btn me-2 mb-2 theme-default-btn-orange-border"
                    > Back To Scheme List</span
                >
            </div>
        </div>

        <div
            data-select-branch-container
            v-else
            class="d-flex align-items-center flex-column hero-custom-container"
        >
            <h3
                class="mb-3"
                :class="[isInnerPage ? 'text-dark' : 'text-white']"
            >
                Please select the branch
            </h3>

            <div
                data-program-btn-container
                class="d-flex flex-wrap justify-content-center"
            >
                <span
                    v-for="branchName in branchArray"
                    :key="branchName._id"
                    @click="
                        changeSelectedBranch(
                            branchName.longDisplayText,
                        )
                    "
                    class="theme-default-btn me-2 mb-2"
                    >{{ branchName.longDisplayText }}</span
                >
            </div>
            <div>
                <span
                    @click="shouldShowYear = true"
                    class="theme-default-btn me-2 mb-2 theme-default-btn-orange-border"
                    > Back To Year List</span
                >
            </div>
        </div>
    </div>
</template>

<style scoped>
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
        margin-left: -8vw;
    }

    .inner-pages-css .search-subject-division {
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

h1 {
    margin: 0;
    font-size: 52px;
    font-weight: 700;
    line-height: 64px;
    color: #fff;
}

.inner-pages-css h1 {
    margin: 0;
    font-size: 52px;
    font-weight: 700;
    line-height: 64px;
    color: #5846f9;
}

h2 {
    color: rgba(255, 255, 255, 0.8);
    margin: 10px 0 0 0;
    font-size: 20px;
}

.inner-pages-css h2 {
    color: rgba(0, 0, 0, 0.8);
    margin: 10px 0 0 0;
    font-size: 20px;
}

.theme-default-btn {
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

.theme-default-btn-orange-border {
    border: 2px solid orange;
}

.inner-pages-css .theme-default-btn {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 1px;
    display: inline-block;
    padding: 10px 28px;
    border-radius: 5px;
    transition: 0.5s;
    color: #000;
    border: 2px solid #000;
}

.theme-default-btn:hover {
    background: #fff;
    color: #5846f9;
}

.inner-pages-css .theme-default-btn:hover {
    background: #5846f9;
    color: #fff;
}

@media (max-width: 768px) {
    h1 {
        font-size: 26px;
        line-height: 36px;
    }

    h2 {
        font-size: 18px;
        line-height: 24px;
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
