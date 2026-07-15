<script setup>
import { STATS } from "../../data/stats.js";
import AnimatedCounter from "../ui/AnimatedCounter.vue";
</script>

<template>
  <section class="bg-forest-2 py-16 md:py-20" aria-label="ArusPOS in numbers">
    <div class="wrap">
      <dl class="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        <div
          v-for="(stat, i) in STATS"
          :key="stat.label"
          v-reveal="{ delay: i * 90 }"
          class="text-center"
        >
          <dd class="text-[clamp(2rem,1.5rem+2vw,2.9rem)] font-bold tracking-tight text-cream">
            <template v-if="stat.static">{{ stat.static }}</template>
            <AnimatedCounter
              v-else
              :target="stat.target"
              :decimals="stat.decimals || 0"
              :prefix="stat.prefix || ''"
              :suffix="stat.suffix || ''"
            />
          </dd>
          <dt class="mt-1.5 text-[0.82rem] font-semibold text-leaf">{{ stat.label }}</dt>
        </div>
      </dl>
    </div>
  </section>
</template>
