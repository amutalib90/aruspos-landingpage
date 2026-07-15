<script setup>
import { computed } from "vue";
import { ICON_PATHS } from "../../data/icons.js";

const props = defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: 20 },
});

const paths = computed(() => ICON_PATHS[props.name] || []);
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    class="shrink-0"
  >
    <path v-for="(d, i) in paths" :key="i" :d="d" />
  </svg>
</template>
