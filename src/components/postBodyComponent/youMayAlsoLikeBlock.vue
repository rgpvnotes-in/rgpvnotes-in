<script setup>
import StaticTitleCard from './blackBackground.vue';

const props = defineProps({
    programName: {
        required: true,
        type: String,
    },
    schemeName: {
        required: true,
        type: String,
    },
    subjectBranch: {
        required: true,
        type: String,
    },
    subjectYear: {
        required: true,
        type: String,
    },
    subjectSemester: {
        required: true,
        type: String,
    },
});

const fetchData = await fetch(
    `http://backend.rgpvnotes.in/api/v1/search.php?program_name=${props.programName}&scheme_name=${props.schemeName}&subject_branch=${props.subjectBranch}&subject_year=${props.subjectYear}&subject_semester=${props.subjectSemester}`,
)
    .then((response) => response.json())
    .then((data) => data.content)
    .catch((error) => {
        console.error(error);
        return [];
    });
</script>

<template>
    <div v-if="fetchData.length > 0">
        <StaticTitleCard> You May Also Like </StaticTitleCard>
        <ul class="list-group">
            <li v-for="postData in fetchData" :key="postData.post_id" class="list-group-item border-0 bg-transparent ps-0">
                <a :href="postData.slug" class="text-dark fw-bold"
                    > {{ postData.rendered_title }}</a
                >
            </li>
        </ul>
    </div>
</template>
