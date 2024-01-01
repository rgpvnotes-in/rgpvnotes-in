<script setup>
import BreadcrumbsComponent from '@components/breadcrumbsComponent/breadcrumbsComponent.vue';

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
        <BreadcrumbsComponent
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
