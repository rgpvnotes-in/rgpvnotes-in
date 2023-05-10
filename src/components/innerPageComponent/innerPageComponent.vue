<script setup>
import breadcrumbsComponent from '../breadcrumbsComponent/breadcrumbsComponent.vue';
</script>

<template>
    <main id="main">
        <breadcrumbsComponent />

        <section class="inner-page">
            <div class="container">
                <slot />
            </div>
        </section>
    </main>
</template>
