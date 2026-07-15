<script setup>
import { PILLARS, REVENUE_MODEL, NOT_THIS } from "../../data/why.js";
import SectionHeader from "../ui/SectionHeader.vue";
import AppIcon from "../ui/AppIcon.vue";
</script>

<template>
  <section id="why" class="bg-cream py-24 md:py-32">
    <div class="wrap">
      <SectionHeader
        eyebrow="Why ArusPOS"
        title="Three promises, and a business model you can check."
        lede="Warm enough to trust with your till, clear enough to satisfy your accountant."
      />

      <!-- Pillars -->
      <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div
          v-for="(pillar, i) in PILLARS"
          :key="pillar.title"
          v-reveal="{ delay: i * 100 }"
          class="card-lift rounded-3xl px-7 py-8"
          :class="i === 1 ? 'bg-forest text-cream' : 'border border-line bg-white'"
        >
          <span
            class="mb-5 flex h-11 w-11 items-center justify-center rounded-full"
            :class="i === 1 ? 'bg-white/10 text-leaf' : 'bg-leaf-light/70 text-moss-dark'"
          >
            <AppIcon :name="pillar.icon" :size="20" />
          </span>
          <h3 class="heading-3" :class="i === 1 ? 'text-cream' : 'text-forest'">
            {{ pillar.title }}
          </h3>
          <p class="mt-3 text-[0.92rem] leading-relaxed" :class="i === 1 ? 'text-cream/70' : 'text-stone'">
            {{ pillar.desc }}
          </p>
        </div>
      </div>

      <!-- The honest ledger -->
      <div class="mt-16 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-2 md:gap-16">
        <div v-reveal>
          <h3 class="eyebrow mb-5 text-moss">How we actually make money</h3>
          <ul>
            <li
              v-for="row in REVENUE_MODEL"
              :key="row.label"
              class="flex items-baseline justify-between gap-6 border-b border-line py-3.5 text-[0.92rem]"
            >
              <span class="font-semibold text-forest">{{ row.label }}</span>
              <span class="shrink-0 text-right text-[0.85rem] font-semibold text-forest/70 tabular">
                {{ row.value }}
              </span>
            </li>
          </ul>
        </div>
        <div v-reveal="{ delay: 120 }">
          <h3 class="eyebrow mb-5 text-moss">What this isn't</h3>
          <ul>
            <li
              v-for="row in NOT_THIS"
              :key="row"
              class="flex items-center gap-3.5 border-b border-line py-3.5 text-[0.92rem] font-semibold text-forest"
            >
              <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-error-bg text-error">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </span>
              {{ row }}
            </li>
          </ul>
          <p class="mt-6 text-[0.92rem] leading-relaxed text-forest/70">
            We only grow when your shop does — so the incentive to make this genuinely useful
            never runs out.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
