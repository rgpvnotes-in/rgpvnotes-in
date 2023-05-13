<script setup>
import '@assets/css/blogger-style.css';

const props = defineProps({
    content: {
        required: false,
        type: Array,
    },
    index: {
        required: false,
        type: Number,
        default: 100,
    },
    subjectsDataList: {
        required: false,
        type: Object,
    },
});


</script>

<template>
    <div v-if="props.subjectsDataList">
        <div
            class="custom-fancy-container"
            :class="'fancy-container-background-' + (index + 1)"
            :key="subjectObject.post_id"
            v-for="(subjectObject, index) in subjectsDataList"
        >
            <a :href="subjectObject.slug"
                ><b>{{ subjectObject.rendered_title }}</b></a
            >
        </div>
    </div>
    <div
        class="custom-fancy-container"
        :class="'fancy-container-background-' + props.index"
        v-if="props.content?.length > 0 && props.index"
    >
        <p class="mb-0">
            <strong>UNIT {{ props.index }}:</strong>
        </p>
        <p v-for="data in props.content" :key="{ data }">{{ data }}</p>
    </div>
</template>
