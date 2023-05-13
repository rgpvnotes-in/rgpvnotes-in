<script setup>
const props = defineProps({
    labelArray: {
        required: true,
        type: Array,
    },
});
</script>

<template>
    <div class="d-flex align-items-center mb-2">
        <strong class="me-2">TAGS: </strong>
        <span
            class="badge rounded-pill bg-primary py-2 px-3 me-2"
            v-for="label in props.labelArray"
            :key="label"
            >{{ label }}</span
        >
    </div>
</template>
