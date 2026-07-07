<script setup>
const engine = [
  "Free Merchant Tools",
  "Daily Merchant Usage",
  "Higher Transaction Volume",
  "Payment Gateway Revenue",
  "Financial Services Expansion",
];
</script>

<template>
  <section class="bg-ink text-cream py-25 overflow-hidden">
    <div class="wrap">
      <div v-reveal class="max-w-160 mb-16">
        <span class="mono text-sage-deep text-[0.76rem] mb-3.5 block">Not another POS app</span>
        <h2 class="text-[clamp(1.9rem,3.4vw,2.6rem)] leading-[1.12]">
          We're building the operating system your shop runs on.
        </h2>
        <p class="mt-4 text-cream/65 text-[1.02rem] leading-relaxed max-w-140">
          Free tools bring you in. Daily use keeps you here. And because every ringgit you take
          flows through ArusPOS, we only grow when your shop does — so the incentive to make this
          genuinely useful never runs out.
        </p>
      </div>

      <div v-reveal="{ delay: 120 }" class="flex flex-col lg:flex-row items-stretch lg:items-center gap-0">
        <template v-for="(step, i) in engine" :key="step">
          <div
            class="rounded-2xl border border-white/12 bg-white/5 px-6 py-5 text-center lg:flex-1"
          >
            <span class="mono text-[0.68rem] text-amber block mb-1.5">Stage {{ String(i + 1).padStart(2, "0") }}</span>
            <span class="text-[0.95rem] font-medium text-cream">{{ step }}</span>
          </div>
          <div v-if="i < engine.length - 1" class="flex items-center justify-center py-3 lg:py-0 lg:px-3 shrink-0">
            <div class="hidden lg:block w-8 h-0.5 flow-line rounded-full"></div>
            <span class="flow-arrow text-sage-deep text-lg leading-none lg:ml-1">
              <span class="lg:hidden">↓</span>
              <span class="hidden lg:inline">→</span>
            </span>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
