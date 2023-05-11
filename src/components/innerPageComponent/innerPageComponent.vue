<script setup>
import breadcrumbsComponent from '../breadcrumbsComponent/breadcrumbsComponent.vue';

const props = defineProps({
    staticTitle: {
        required: false,
        type: String,
        default: '',
    },
    breadCrumbsArray: {
        required: false,
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
