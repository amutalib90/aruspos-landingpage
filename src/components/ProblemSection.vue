<script setup>
const problems = [
  {
    icon: "🧾",
    title: "Disconnected sales",
    desc: "Till receipts and QR payments land in different apps, so daily totals never quite match.",
  },
  {
    icon: "📦",
    title: "Guesswork stock",
    desc: "You restock by memory, not by what actually sold — so you're either overstocked or out.",
  },
  {
    icon: "👥",
    title: "No customer memory",
    desc: "Regulars are still treated like strangers, because nothing tracks who they are or what they buy.",
  },
  {
    icon: "📊",
    title: "Numbers, too late",
    desc: "You find out if today was good or bad a week later, when it's too late to act on it.",
  },
];
</script>

<template>
  <section class="py-25">
    <div class="wrap">
      <div v-reveal class="max-w-160 mb-13">
        <span class="mono text-moss text-[0.76rem] mb-3.5 block">The problem</span>
        <h2 class="text-[clamp(1.9rem,3.4vw,2.6rem)] leading-[1.12]">
          Your shop runs on five apps that don't talk to each other.
        </h2>
        <p class="mt-4 text-text-dim text-[1.02rem] leading-relaxed">
          POS in one corner, QR payment in another, a notebook for inventory, WhatsApp for customer
          follow-ups, and an accountant who gets a shoebox of receipts at month-end. That's not a system —
          it's five part-time jobs you didn't sign up for.
        </p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          v-for="(p, i) in problems"
          :key="p.title"
          v-reveal="{ delay: i * 100 }"
          class="bg-cream-deep border border-line rounded-2xl px-5.5 py-6.5"
        >
          <div class="text-[1.4rem] mb-3.5">{{ p.icon }}</div>
          <h4 class="font-sans font-semibold text-[0.98rem] mb-2">{{ p.title }}</h4>
          <p class="text-[0.86rem] text-text-dim leading-[1.55]">{{ p.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
