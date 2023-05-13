<script setup>
import StaticTitleCard from './blackBackground.vue';

const props = defineProps({
    title: {
        required: true,
        type: String,
    },
    textArray: {
        required: true,
        type: Array,
    },
});

</script>

<template>
    <div v-if="1">
        <StaticTitleCard>
        {{ props.title }}
    </StaticTitleCard>
    <p v-for="textData in props.textArray" :key="textData">
        {{ textData }}
    </p>
    </div>

</template>
