<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  target: { type: Number, required: true },
  prefix: { type: String, default: "" },
  suffix: { type: String, default: "" },
  decimals: { type: Number, default: 0 },
  duration: { type: Number, default: 1400 },
});

const display = ref((0).toFixed(props.decimals));
const rootEl = ref(null);
let observer;

function formatNumber(value) {
  return value.toLocaleString("en-MY", {
    minimumFractionDigits: props.decimals,
    maximumFractionDigits: props.decimals,
  });
}

function animate() {
  const start = performance.now();
  const from = 0;
  const to = props.target;

  function tick(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / props.duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    display.value = formatNumber(from + (to - from) * eased);
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate();
          observer.unobserve(rootEl.value);
        }
      });
    },
    { threshold: 0.4 }
  );
  if (rootEl.value) observer.observe(rootEl.value);
});

onUnmounted(() => observer?.disconnect());
</script>

<template>
  <span ref="rootEl" class="tabular">{{ prefix }}{{ display }}{{ suffix }}</span>
</template>
