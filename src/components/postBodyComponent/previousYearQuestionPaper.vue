<script setup>
import StaticTitleCard from './blackBackground.vue';

const urlToName = (urlValue) => {
    const splitUrl = urlValue.split('/');
    const nameOnly = splitUrl[splitUrl.length - 1];
    let tempName = nameOnly.split('-');
    const subjectCode = tempName.slice(0, 2).join('-').toUpperCase();
    tempName = tempName.slice(2);

    //loop through each element of the array and capitalize the first letter.
    for (var i = 0; i < tempName.length; i++) {
        tempName[i] = tempName[i].charAt(0).toUpperCase() + tempName[i].slice(1);
    }

    const subjectName = tempName.join('-').replace('.pdf', '');
    return `${subjectCode}-${subjectName}`;
};

const props = defineProps({
    questionPaperDataArray: {
        required: true,
        type: Array,
    },
});

</script>

<template>
    <div v-if="props.questionPaperDataArray.length > 0" id="questionPapers">
        <hr class="cool-line" />
        <StaticTitleCard> Previous Year Question Papers </StaticTitleCard>
        <ul class="list-group">
            <li
                v-for="questionPaperData in props.questionPaperDataArray"
                :key="questionPaperData"
                class="list-group-item border-0 bg-transparent ps-0"
            >
                <a :href="questionPaperData" class="text-dark fw-bold">
                    {{ urlToName(questionPaperData) }}</a
                >
            </li>
        </ul>
    </div>
</template>
