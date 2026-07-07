<script setup>
const phases = [
  {
    marker: "01",
    active: true,
    tag: "Acquire",
    title: "Get paid, get organised",
    desc: "POS, QR payments, payment links, and digital receipts replace the notebook and the loose change tin — free, forever.",
  },
  {
    marker: "02",
    active: false,
    tag: "Daily usage",
    title: "Bring customers back",
    desc: "Loyalty, membership tiers, and voucher campaigns — built on the customer data you already collected.",
  },
  {
    marker: "03",
    active: false,
    tag: "Operations",
    title: "Run the whole operation",
    desc: "Staff attendance, multi-branch and warehouse stock, online ordering, and table or slot booking.",
  },
  {
    marker: "04",
    active: false,
    tag: "Financial platform",
    title: "Access capital, on your terms",
    desc: "Merchant wallet, working-capital financing, and supplier payments sized to your real sales history.",
  },
];
</script>

<template>
  <section id="journey" class="py-25">
    <div class="wrap">
      <div v-reveal class="max-w-160 mb-13">
        <span class="mono text-moss text-[0.76rem] mb-3.5 block">How this grows with you</span>
        <h2 class="text-[clamp(1.9rem,3.4vw,2.6rem)] leading-[1.12]">
          You don't outgrow this. You unlock the next room.
        </h2>
        <p class="mt-4 text-text-dim text-[1.02rem] leading-relaxed">
          Each stage only shows up once the one before it is actually working for your shop — not before.
        </p>
      </div>
      <div class="journey-track-line relative grid grid-cols-1 md:grid-cols-4 gap-5.5 md:gap-0 mt-5">
        <div v-for="(phase, i) in phases" :key="phase.marker" v-reveal="{ delay: i * 120 }" class="relative md:pr-6">
          <div
            class="w-11.5 h-11.5 rounded-full border border-line flex items-center justify-center font-mono text-[0.78rem] relative z-2 mb-5"
            :class="phase.active ? 'bg-ink text-sage border-ink' : 'bg-cream'"
          >
            {{ phase.marker }}
          </div>
          <span class="mono text-[0.66rem] text-moss block mb-1.5">{{ phase.tag }}</span>
          <h4 class="text-[1.02rem] mb-2 font-sans font-semibold">{{ phase.title }}</h4>
          <p class="text-[0.86rem] text-text-dim leading-[1.55]">{{ phase.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
