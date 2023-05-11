<script>
import { computed } from 'vue';

export default {
  setup(_, { slots }) {
    const hasHeaderSlot = computed(() => slots.header && slots.header());

    return {
      hasHeaderSlot,
    };
  },
};
</script>

<template>
    <div class="post-body-title-card" v-if="hasHeaderSlot">
        <slot />
    </div>
</template>
