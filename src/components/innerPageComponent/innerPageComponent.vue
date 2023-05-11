<script setup>
import breadcrumbsComponent from '../breadcrumbsComponent/breadcrumbsComponent.vue';

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
    <main id="main">
        <breadcrumbsComponent
            :staticTitle="props.staticTitle"
            :breadCrumbsArray="props.breadCrumbsArray"
        />

        <section class="inner-page">
            <div class="container">
                <slot />
            </div>
        </section>
    </main>
</template>
