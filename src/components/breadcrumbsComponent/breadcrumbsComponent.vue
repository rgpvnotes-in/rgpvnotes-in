<script setup>
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

<style scoped>
/*--------------------------------------------------------------
# Breadcrumbs
--------------------------------------------------------------*/
.breadcrumbs {
  padding: 15px 0;
  background: #f2f6f9;
  min-height: 40px;
  margin-top: 85px;
}

@media (max-width: 992px) {
  .breadcrumbs {
    margin-top: 56px;
  }
}

.breadcrumbs h2 {
  font-size: 28px;
  font-weight: 300;
}

.breadcrumbs ol {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  font-size: 14px;
  margin: 0;
}

.breadcrumbs ol li+li {
  padding-left: 10px;
}

.breadcrumbs ol li+li::before {
  display: inline-block;
  padding-right: 10px;
  color: #3c6387;
  content: "/";
}

@media (max-width: 768px) {
  .breadcrumbs .d-flex {
    display: block !important;
  }

  .breadcrumbs ol {
    display: block;
  }

  .breadcrumbs ol li {
    display: inline-block;
  }
}
</style>
