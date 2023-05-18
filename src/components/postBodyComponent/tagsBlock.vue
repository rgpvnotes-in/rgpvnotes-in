<script setup>
const props = defineProps({
    labelArray: {
        required: true,
        type: Array,
    },
    showTag: {
        required: true,
        type: Boolean,
    },
});
</script>

<template>
    <div class="d-flex align-items-center my-3 border-dark border-1 border-top pt-2">
        <strong v-if="showTag" class="me-2">TAGS: </strong>
        <span
            class="badge bg-primary py-2 px-3 me-2"
            :class="[showTag ? 'rounded-pill' : '']"
            v-for="label in props.labelArray"
            :key="label"
            >{{ label }}</span
        >
    </div>
</template>
