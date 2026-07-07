<script setup>
import AnimatedCounter from "./AnimatedCounter.vue";

const receiptLines = [
  { label: "Customer profiles", target: 2140 },
  { label: "Loyalty members", target: 860 },
  { label: "SKUs tracked", target: 312 },
  { label: "Digital receipts issued", target: 48900 },
  { label: "Branches connected", target: 3 },
];
</script>

<template>
  <section id="moat" class="bg-ink text-cream py-27.5">
    <div class="wrap grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-15 items-center">
      <div v-reveal>
        <span class="mono text-sage-deep text-[0.76rem] block mb-4">Why merchants stay</span>
        <h2 class="text-[clamp(1.9rem,3.4vw,2.5rem)] leading-[1.14] max-w-120">
          Not lock-in. Just two years of a business you'd rather not rebuild.
        </h2>
        <p class="mt-4.5 text-cream/65 leading-relaxed max-w-115">
          You can export your data and leave any time — we mean that. But after two years, "leaving" means
          walking away from your loyalty list, your sales history, your stock patterns, and every regular
          customer's order habits. Most merchants stay because rebuilding that would cost more than staying
          ever did.
        </p>
      </div>
      <div
        v-reveal="{ delay: 150 }"
        class="receipt-tape relative bg-cream text-ink rounded px-6.5 py-7 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]"
      >
        <div class="text-center font-serif text-base mb-3.5 tracking-wide">★ 2 YEARS ON ARUSPOS ★</div>
        <div
          v-for="line in receiptLines"
          :key="line.label"
          class="text-[0.86rem] flex justify-between py-1.25 border-b border-dotted border-ink/20"
        >
          <span>{{ line.label }}</span>
          <span class="tabular font-medium"><AnimatedCounter :target="line.target" /></span>
        </div>
        <div class="text-[0.86rem] flex justify-between pt-3 mt-1.5 font-semibold">
          <span>Operational history</span>
          <span>Irreplaceable</span>
        </div>
      </div>
    </div>
  </section>
</template>
