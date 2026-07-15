<script setup>
defineProps({
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  lede: { type: String, default: "" },
  /** center | left */
  align: { type: String, default: "left" },
  /** light (forest text) | dark (cream text) */
  tone: { type: String, default: "light" },
});
</script>

<template>
  <div
    v-reveal
    class="mb-12 max-w-2xl md:mb-16"
    :class="align === 'center' ? 'mx-auto text-center' : ''"
  >
    <p
      class="eyebrow mb-4"
      :class="tone === 'dark' ? 'text-leaf' : 'text-moss'"
    >
      {{ eyebrow }}
    </p>
    <h2 class="heading-2" :class="tone === 'dark' ? 'text-cream' : 'text-forest'">
      {{ title }}
    </h2>
    <p
      v-if="lede"
      class="lede mt-4"
      :class="tone === 'dark' ? 'text-cream/65' : 'text-forest/70'"
    >
      {{ lede }}
    </p>
  </div>
</template>
