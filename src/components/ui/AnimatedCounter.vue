<script setup>
import { ref } from "vue";
import { useInViewOnce } from "../../composables/useInViewOnce.js";
import { useReducedMotion } from "../../composables/useReducedMotion.js";

const props = defineProps({
  target: { type: Number, required: true },
  prefix: { type: String, default: "" },
  suffix: { type: String, default: "" },
  decimals: { type: Number, default: 0 },
  duration: { type: Number, default: 1400 },
});

const display = ref(formatNumber(0));
const reduced = useReducedMotion();

function formatNumber(value) {
  return value.toLocaleString("en-MY", {
    minimumFractionDigits: props.decimals,
    maximumFractionDigits: props.decimals,
  });
}

function animate() {
  if (reduced.value) {
    display.value = formatNumber(props.target);
    return;
  }
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / props.duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    display.value = formatNumber(props.target * eased);
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

const rootEl = useInViewOnce(animate, { threshold: 0.4 });
</script>

<template>
  <span ref="rootEl" class="tabular">{{ prefix }}{{ display }}{{ suffix }}</span>
</template>
