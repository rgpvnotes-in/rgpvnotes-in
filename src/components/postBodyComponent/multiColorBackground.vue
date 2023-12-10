<script setup>
import '@css/blogger-style.css';

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

<style scoped>
.custom-fancy-container {
    overflow: hidden;
    position: relative;
    margin: 0.5rem 0 1rem;
    transition: box-shadow 0.25s;
    border-radius: 2px;
    color: #fff;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
        0 2px 10px 0 rgba(0, 0, 0, 0.12);
    padding: 20px;
    text-align: left;
}

.custom-fancy-container a {
    color: #fff;
}

.custom-fancy-container p {
    letter-spacing: 0;
    font-size: 15px;
    line-height: 20px;
    color: #fff;
}

.fancy-container-background-1,
.fancy-container-background-6,
.fancy-container-background-11 {
    background: #03adfc;
}

.fancy-container-background-2,
.fancy-container-background-7,
.fancy-container-background-12 {
    background: #58b65c;
}

.fancy-container-background-3,
.fancy-container-background-8,
.fancy-container-background-13 {
    background: #f44336;
}

.fancy-container-background-4,
.fancy-container-background-9,
.fancy-container-background-14 {
    background: orange;
}

.fancy-container-background-5,
.fancy-container-background-10,
.fancy-container-background-15 {
    background: #673ab7;
}
</style>
