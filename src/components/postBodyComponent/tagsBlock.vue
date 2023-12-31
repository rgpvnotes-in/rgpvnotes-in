<script setup>
const props = defineProps({
    postLabel: {
        required: true,
        type: [Array, String],
    },
    showTag: {
        required: true,
        type: Boolean,
    },
});

const isLabelArray = Array.isArray(props.postLabel)

</script>

<template>
    <div class="d-flex align-items-center"  :class="[showTag ? 'my-3 border-dark border-1 border-top pt-2' : 'mb-3']" v-if="postLabel.length > 0">
        <strong v-if="showTag" class="me-2">TAGS: </strong>
        <span
            v-if="!isLabelArray"
            class="badge bg-primary py-2 px-3 me-2"
            :class="[showTag ? 'rounded-pill' : '']"
            >{{ props.postLabel }}</span
        >
        <span
            v-else
            class="badge bg-primary py-2 px-3 me-2"
            :class="[showTag ? 'rounded-pill' : '']"
            v-for="label in props.postLabel"
            :key="label"
            >{{ label }}</span
        >
    </div>
</template>
