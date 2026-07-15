<script setup>
import { FEATURES } from "../../data/features.js";
import SectionHeader from "../ui/SectionHeader.vue";
import AppIcon from "../ui/AppIcon.vue";

const featured = FEATURES.filter((f) => f.featured);
const rest = FEATURES.filter((f) => !f.featured);
</script>

<template>
  <section id="features" class="bg-white py-24 md:py-32">
    <div class="wrap">
      <SectionHeader
        eyebrow="Core features"
        title="Everything to run the counter — and everything after it."
        lede="No trial period, no feature countdown. The core stays free because we make money the same way you do: only when a sale actually happens."
      />

      <!-- Featured pair: live mini-demos -->
      <div class="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <!-- POS -->
        <article
          v-reveal
          class="card-lift group overflow-hidden rounded-3xl border border-line bg-cream/60"
        >
          <div class="px-7 pt-7 pb-2 md:px-9 md:pt-9">
            <span class="caption text-success-text">Free, always</span>
            <h3 class="heading-3 mt-2 text-forest">{{ featured[0].title }}</h3>
            <p class="mt-2 max-w-md text-[0.92rem] leading-relaxed text-stone">
              {{ featured[0].desc }}
            </p>
          </div>
          <div class="relative mt-5 ml-7 overflow-hidden rounded-tl-2xl border-t border-l border-line bg-white p-5 shadow-[var(--shadow-card)] md:ml-9">
            <div class="flex items-center justify-between text-[0.7rem] font-bold text-stone">
              <span>Order #A215</span>
              <span class="rounded-md bg-success-bg px-2 py-0.5 text-success-text">Open</span>
            </div>
            <div
              v-for="(row, i) in ['Kopi O ×2', 'Roti Bakar ×1', 'Milo Ais ×2']"
              :key="row"
              class="mt-2.5 flex items-center justify-between rounded-xl bg-cream px-3.5 py-2.5 text-[0.8rem] font-semibold text-forest transition-transform duration-300 group-hover:translate-x-1"
              :style="{ transitionDelay: `${i * 60}ms` }"
            >
              <span>{{ row }}</span>
              <AppIcon name="check" :size="14" class="text-moss" />
            </div>
          </div>
        </article>

        <!-- QR Payment -->
        <article
          v-reveal="{ delay: 100 }"
          class="card-lift overflow-hidden rounded-3xl border border-line bg-cream/60"
        >
          <div class="px-7 pt-7 pb-2 md:px-9 md:pt-9">
            <span class="caption text-success-text">Free, always</span>
            <h3 class="heading-3 mt-2 text-forest">{{ featured[1].title }}</h3>
            <p class="mt-2 max-w-md text-[0.92rem] leading-relaxed text-stone">
              {{ featured[1].desc }}
            </p>
          </div>
          <div class="relative mt-5 flex justify-center pb-7">
            <div class="relative overflow-hidden rounded-2xl border border-line bg-white p-4 shadow-[var(--shadow-card)]">
              <svg width="104" height="104" viewBox="0 0 104 104" aria-hidden="true" class="text-forest">
                <g fill="currentColor">
                  <rect x="4" y="4" width="28" height="28" rx="3" fill="none" stroke="currentColor" stroke-width="5" />
                  <rect x="72" y="4" width="28" height="28" rx="3" fill="none" stroke="currentColor" stroke-width="5" />
                  <rect x="4" y="72" width="28" height="28" rx="3" fill="none" stroke="currentColor" stroke-width="5" />
                  <rect x="13" y="13" width="10" height="10" />
                  <rect x="81" y="13" width="10" height="10" />
                  <rect x="13" y="81" width="10" height="10" />
                  <rect x="44" y="8" width="8" height="8" /><rect x="56" y="20" width="8" height="8" />
                  <rect x="44" y="32" width="8" height="8" /><rect x="8" y="44" width="8" height="8" />
                  <rect x="24" y="52" width="8" height="8" /><rect x="44" y="48" width="12" height="12" />
                  <rect x="64" y="44" width="8" height="8" /><rect x="80" y="52" width="8" height="8" />
                  <rect x="92" y="44" width="8" height="8" /><rect x="44" y="68" width="8" height="8" />
                  <rect x="60" y="76" width="8" height="8" /><rect x="76" y="72" width="8" height="8" />
                  <rect x="92" y="80" width="8" height="8" /><rect x="44" y="88" width="8" height="8" />
                  <rect x="72" y="92" width="12" height="8" />
                </g>
              </svg>
              <span
                class="scan-line absolute inset-x-2 top-3 block h-9 rounded bg-gradient-to-b from-leaf-light/0 via-leaf-light/60 to-leaf/40"
                aria-hidden="true"
              ></span>
            </div>
            <span
              class="absolute right-8 bottom-9 hidden items-center gap-1.5 rounded-full bg-forest px-3 py-1.5 text-[0.68rem] font-bold text-cream sm:flex md:right-14"
            >
              <span class="pulse-dot h-1.5 w-1.5 rounded-full bg-leaf"></span>
              DuitNow QR
            </span>
          </div>
        </article>
      </div>

      <!-- Remaining features -->
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(f, i) in rest"
          :key="f.title"
          v-reveal="{ delay: (i % 3) * 80 }"
          class="card-lift group rounded-2xl border border-line bg-white px-6 py-6"
        >
          <div class="mb-4 flex items-start justify-between">
            <div
              class="flex h-11 w-11 items-center justify-center rounded-xl bg-leaf-light/60 text-moss-dark transition-colors duration-300 group-hover:bg-leaf-light"
            >
              <AppIcon :name="f.icon" :size="20" />
            </div>
            <span
              class="rounded-md px-2 py-1 text-[0.62rem] font-bold tracking-wider uppercase"
              :class="f.tier === 'free' ? 'bg-success-bg text-success-text' : 'bg-gold text-forest'"
            >
              {{ f.tier === "free" ? "Free" : "Opt-in" }}
            </span>
          </div>
          <h3 class="mb-1.5 text-[1rem] font-bold text-forest">{{ f.title }}</h3>
          <p class="text-[0.88rem] leading-relaxed text-stone">{{ f.desc }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
