<script setup>
import '@assets/css/blogger-style.css';
import StaticTitleCard from '../postBodyComponent/blackBackground.vue';

const props = defineProps({
    getBranchYearDataArray: {
        required: true,
        type: Array,
    },
});

const semesterArray = [];
for (const subjectsData of props.allSubjectsData) {
    semesterArray.push(subjectsData.semester);
}

let filteredSemesterArray = [...new Set(semesterArray)].sort();

const filteredSubjectsData = (semesterName) =>
    (props.allSubjectsData.filter(
        (subjectsData) => subjectsData.semester === semesterName,
    )).sort();

</script>

<template>
    <div v-for="semesterData in filteredSemesterArray" :key="semesterData">
        <StaticTitleCard>
            <h2>{{ semesterData }}</h2>
        </StaticTitleCard>
        <div
            class="custom-fancy-container"
            :class="'fancy-container-background-' + (index + 1)"
            :key="subjectObject.post_id"
            v-for="(subjectObject, index) in filteredSubjectsData(semesterData)"
        >
            <a :href="subjectObject.slug"
                ><b>{{ subjectObject.rendered_title }}</b></a
            >
        </div>
    </div>
</template>
