<script setup>
const props = defineProps({
    postsArray: {
        required: true,
        type: Array,
    },
});
</script>

<template>
    <div class="d-flex align-items-center mb-3">
        <div>
            <a :href="post.slug" v-for="post in props.postsArray" :key="post.slug" class="row">
            <div class="col-3 px-0"><img :src="post.banner_url" :alt="post.rendered_title" class="w-100 h-auto"></div>
            <div class="col-9"> <h3 class="h6"> {{post.rendered_title}}</h3></div>
            </a>
        </div>
    </div>
</template>
