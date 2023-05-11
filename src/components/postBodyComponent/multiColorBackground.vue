<script>
import '@assets/css/blogger-style.css';


export default {
    props: {
        getBranchYearDataArray: {
            required: true,
            type: Array,
        },
    },
    setup(props) {
        // eslint-disable-next-line vue/no-setup-props-destructure
        const allSubjectsData = props.getBranchYearDataArray;

        return {
            allSubjectsData,
        };
    },
};
</script>

<template>
    <div
        class="custom-fancy-container"
        :class="'fancy-container-background-' + (index + 1)"
        :key="subjectObject.post_id"
        v-for="(subjectObject, index) in allSubjectsData"
    >
        <a :href="subjectObject.slug"
            ><b>{{ subjectObject.rendered_title }}</b></a
        >
    </div>
</template>
