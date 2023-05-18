<script setup>
import StaticTitleCard from './blackBackground.vue';

const props = defineProps({
    questionPaperDataArray: {
        required: true,
        type: Array,
    },
});

</script>

<template>
    <div v-if="props.questionPaperDataArray.length > 0">
        <hr class="cool-line" />
        <StaticTitleCard> Previous Year Question Papers </StaticTitleCard>
        <ul class="list-group">
            <li v-for="questionPaperData in props.questionPaperDataArray" :key="questionPaperData.post_id" class="list-group-item border-0 bg-transparent ps-0">
                <a :href="questionPaperData.slug" class="text-dark fw-bold"
                    > {{ questionPaperData.rendered_title }}</a
                >
            </li>
        </ul>
    </div>
</template>
