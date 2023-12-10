<script setup>
import '@css/blogger-style.css';
import StaticTitleCard from '../postBodyComponent/blackBackground.vue';
import MultiColorCard from '../postBodyComponent/multiColorBackground.vue';

const props = defineProps({
    getBranchYearDataArray: {
        required: true,
        type: Array,
    },
});

const semesterArray = [];
for (const subjectsData of props.getBranchYearDataArray) {
    semesterArray.push(subjectsData.semester);
}


let filteredSemesterArray = [...new Set(semesterArray)].sort();

const filteredSubjectsData = (semesterName) =>
    props.getBranchYearDataArray
        .filter((subjectsData) => subjectsData.semester === semesterName)
        .sort();
</script>

<template>
    <div v-for="semesterData in filteredSemesterArray" :key="semesterData">
        <StaticTitleCard>
            {{ semesterData }}
        </StaticTitleCard>
        <MultiColorCard
            :subjectsDataList="filteredSubjectsData(semesterData)"
        />
    </div>
</template>
