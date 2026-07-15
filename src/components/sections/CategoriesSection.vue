<script setup>
import { CATEGORIES } from "../../data/categories.js";
import SectionHeader from "../ui/SectionHeader.vue";
import AppIcon from "../ui/AppIcon.vue";
</script>

<template>
  <section id="industries" class="bg-white py-24 md:py-32">
    <div class="wrap">
      <SectionHeader
        align="center"
        eyebrow="Built for your counter"
        title="Whatever you sell, the till already speaks your language."
        lede="ArusPOS ships configured for the way each business actually works — not a generic template you bend into shape."
      />

      <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
        <a
          v-for="(cat, i) in CATEGORIES"
          :key="cat.title"
          href="#showcase"
          v-reveal="{ delay: (i % 4) * 80 }"
          class="card-lift group rounded-2xl border border-line bg-white px-5 py-6 md:px-6 md:py-7"
        >
          <div
            class="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cream text-forest transition-all duration-300 group-hover:bg-forest group-hover:text-leaf"
          >
            <AppIcon :name="cat.icon" :size="22" />
          </div>
          <h3 class="text-[1rem] font-bold text-forest">{{ cat.title }}</h3>
          <p class="mt-1.5 text-[0.82rem] leading-relaxed text-stone">{{ cat.desc }}</p>
          <span
            class="mt-3 flex items-center gap-1 text-[0.78rem] font-bold text-moss opacity-0 transition-all duration-300 group-hover:opacity-100"
          >
            See the flow
            <AppIcon name="arrowRight" :size="13" class="transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </a>
      </div>
    </div>
  </section>
</template>
