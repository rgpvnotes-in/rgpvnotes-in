<script setup>
const props = defineProps({
    staticTitle: {
        required: true,
        type: String,
        default: '',
    },
    breadCrumbsArray: {
        required: true,
        type: Array,
    },
});
</script>

<template>
    <section class="breadcrumbs" v-if="props.staticTitle">
        <div class="container">
            <div class="d-flex justify-content-between align-items-center">
                <h2>{{ props.staticTitle }}</h2>
                <ol>
                    <li
                        v-for="breadCrumb in props.breadCrumbsArray"
                        :key="breadCrumb.name"
                    >
                        <a :href="breadCrumb.url">{{ breadCrumb.name }}</a>
                    </li>
                </ol>
            </div>
        </div>
    </section>
</template>
