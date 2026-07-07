<script setup>
const stack = [
  {
    icon: "🧾",
    title: "POS Lite",
    desc: "Ring up sales, split bills, hold orders — on a phone, tablet, or counter terminal.",
  },
  {
    icon: "📲",
    title: "QR Payment",
    desc: "Accept DuitNow QR, cards, and e-wallets at the counter with no extra hardware to buy.",
  },
  {
    icon: "🔗",
    title: "Payment Link",
    desc: "Send a payment link for orders taken over the phone, WhatsApp, or social media.",
  },
  {
    icon: "📄",
    title: "Invoice & Quotation",
    desc: "Turn a quote into an invoice into a paid receipt without retyping anything three times.",
  },
  {
    icon: "🧾",
    title: "Digital Receipt",
    desc: "Every sale gets a clean digital receipt — searchable, shareable, never lost in a drawer.",
  },
  {
    icon: "📦",
    title: "Inventory Lite",
    desc: "Stock counts update automatically as you sell — no more end-of-day manual tally.",
  },
  {
    icon: "👤",
    title: "Customer CRM Lite",
    desc: "Every sale quietly builds a customer record — repeat visits, spend, last order.",
  },
  {
    icon: "📈",
    title: "Analytics Dashboard",
    desc: "Today's takings, best sellers, and slow hours — the moment your last sale closes.",
  },
];
</script>

<template>
  <section id="stack" class="bg-sage py-25">
    <div class="wrap">
      <div v-reveal class="max-w-160 mb-13">
        <span class="mono text-moss text-[0.76rem] mb-3.5 block">Phase 1 · What you get, free</span>
        <h2 class="text-[clamp(1.9rem,3.4vw,2.6rem)] leading-[1.12]">
          Everything to run the counter — before you pay us a single ringgit.
        </h2>
        <p class="mt-4 text-ink/65 text-[1.02rem] leading-relaxed">
          No trial period, no feature countdown. These stay free because we make money the same way you
          do: only when a sale actually happens.
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4.5">
        <div
          v-for="(item, i) in stack"
          :key="item.title"
          v-reveal="{ delay: (i % 4) * 90 }"
          class="bg-cream rounded-2xl px-6 py-7 relative overflow-hidden transition-transform hover:-translate-y-1"
        >
          <span class="absolute top-5.5 right-5.5 text-[0.65rem] text-amber-deep font-semibold">FREE</span>
          <div class="w-10.5 h-10.5 rounded-[10px] bg-ink text-sage flex items-center justify-center text-[1.1rem] mb-4.5">
            {{ item.icon }}
          </div>
          <h4 class="font-serif font-medium text-[1.05rem] mb-2">{{ item.title }}</h4>
          <p class="text-[0.86rem] text-text-dim leading-[1.5]">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
