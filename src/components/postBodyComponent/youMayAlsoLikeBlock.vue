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
        type: Array,
    },
    subjectYear: {
        required: true,
        type: String,
    },
    subjectSemester: {
        required: true,
        type: String,
    },
    astroSlug: {
        required: true,
        type: String,
    },
});

const fetchedData = []
for (const seprateBranch of props.subjectBranch) {
    const apiResponse = await fetch(
    `http://backend.rgpvnotes.in:8000/api/v1/search.php?program_name=${props.programName}&scheme_name=${props.schemeName}&subject_branch=${seprateBranch}&subject_year=${props.subjectYear}&subject_semester=${props.subjectSemester}`,
)
    .then((response) => response.json())
    .then((data) => data.content)
    .catch((error) => {
        console.error(error);
        return [];
    });
    fetchedData.concat(apiResponse);
}

// removing object if slug matches requesting slug
const filteredFetchData = fetchedData.filter(subjectData => subjectData.slug !== props.astroSlug);


</script>

<template>
    <div v-if="filteredFetchData.length > 0">
        <hr class="cool-line" />
        <StaticTitleCard> You May Also Like </StaticTitleCard>
        <ul class="list-group">
            <li v-for="postData in filteredFetchData" :key="postData.post_id"
                class="list-group-item border-0 bg-transparent ps-0">
                <a :href="postData.slug" class="text-dark fw-bold"> {{ postData.rendered_title }}</a>
            </li>
        </ul>
    </div>
</template>
