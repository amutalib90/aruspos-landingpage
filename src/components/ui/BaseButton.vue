<script setup>
import { computed } from "vue";
import { useMagnetic } from "../../composables/useMagnetic.js";
import AppIcon from "./AppIcon.vue";

const props = defineProps({
  href: { type: String, default: "#" },
  /**
   * primary  — forest pill on light surfaces (guideline "on cream")
   * gold     — gold pill, reserved for dark surfaces (guideline "on forest")
   * ghost    — outline pill on light surfaces
   * ghostDark— outline pill on dark surfaces
   */
  variant: { type: String, default: "primary" },
  size: { type: String, default: "md" },
  arrow: { type: Boolean, default: false },
});

const { el, onMove, onLeave } = useMagnetic();

const variantClasses = {
  primary: "bg-forest text-cream hover:bg-forest-2",
  gold: "bg-gold text-forest hover:brightness-95",
  ghost: "border border-line text-forest bg-white/60 hover:border-stone hover:bg-white",
  ghostDark: "border border-cream/30 text-cream hover:border-cream/60 hover:bg-white/5",
};

const sizeClasses = {
  md: "px-6 py-3 text-[0.9rem]",
  lg: "px-7 py-3.5 text-[0.95rem]",
};

const classes = computed(() => [variantClasses[props.variant], sizeClasses[props.size]]);
</script>

<template>
  <a
    ref="el"
    :href="href"
    class="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full font-semibold transition-[background-color,border-color,filter,box-shadow] duration-200 will-change-transform"
    :class="classes"
    @pointermove="onMove"
    @pointerleave="onLeave"
  >
    <slot />
    <AppIcon
      v-if="arrow"
      name="arrowRight"
      :size="16"
      class="transition-transform duration-300 group-hover:translate-x-0.5"
    />
  </a>
</template>
