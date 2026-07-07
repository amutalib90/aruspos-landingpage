<script setup>
import AnimatedCounter from "./AnimatedCounter.vue";

const lineItems = [
  { label: "Nasi Lemak Set ×2", price: "RM 24.00" },
  { label: "Teh Tarik ×3", price: "RM 10.50" },
  { label: "Ayam Goreng ×4", price: "RM 50.00" },
];

const payMethods = ["DuitNow QR", "Card", "E-Wallet", "Cash"];

const stats = [
  { static: "RM0", lbl: "Monthly fee to start" },
  { target: 0.45, decimals: 2, suffix: "%", lbl: "Payment margin, no markup" },
  { target: 7000, suffix: "+", lbl: "Active merchants" },
];
</script>

<template>
  <header
    class="hero-grid-bg relative overflow-hidden pt-24 pb-15 text-cream bg-linear-to-b from-ink to-ink-soft"
    style="background-image: radial-gradient(ellipse 80% 60% at 78% 10%, rgba(221, 162, 79, 0.14), transparent 60%), linear-gradient(180deg, var(--color-ink) 0%, var(--color-ink-soft) 100%)"
  >
    <div class="wrap relative z-2 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
      <div>
        <span v-reveal class="mono inline-flex items-center gap-2 text-sage text-[0.76rem] mb-5.5 eyebrow-dash">
          Free forever · No hardware lock-in
        </span>
        <h1 v-reveal="{ delay: 80 }" class="text-[clamp(2.5rem,5.4vw,4.1rem)] leading-[1.04] max-w-160">
          Run your store.<br />
          Not just your <em class="not-italic text-sage-deep">till</em>.
        </h1>
        <p v-reveal="{ delay: 160 }" class="mt-5.5 max-w-120 text-[1.08rem] leading-relaxed text-cream/72">
          One free operating system for point-of-sale, QR payments, inventory, and customer records —
          built for Malaysian retail and F&amp;B, so every ringgit that moves through your shop is
          reconciled, not guessed at.
        </p>
        <div v-reveal="{ delay: 240 }" class="flex gap-3.5 mt-8.5 flex-wrap">
          <a
            href="#pricing"
            class="bg-amber text-ink font-semibold text-[0.9rem] px-5.5 py-2.75 rounded-full inline-flex items-center gap-2 transition-all hover:bg-amber-deep hover:-translate-y-0.5"
          >
            Set Up in 10 Minutes →
          </a>
          <a href="#stack" class="text-cream border border-white/30 px-5 py-2.5 rounded-full text-[0.9rem]">
            See what's free
          </a>
        </div>
        <div v-reveal="{ delay: 320 }" class="flex gap-8.5 mt-13 flex-wrap">
          <div v-for="stat in stats" :key="stat.lbl">
            <div class="font-serif text-[1.7rem] text-cream">
              <template v-if="stat.static">{{ stat.static }}</template>
              <AnimatedCounter v-else :target="stat.target" :decimals="stat.decimals || 0" :suffix="stat.suffix" />
            </div>
            <div class="text-[0.76rem] text-cream/50 mt-0.5">{{ stat.lbl }}</div>
          </div>
        </div>
      </div>

      <div
        v-reveal="{ delay: 200 }"
        class="rounded-[20px] border border-white/10 p-5.5 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]"
        style="background: linear-gradient(160deg, var(--color-ink-soft), var(--color-ink))"
      >
        <div class="flex justify-between items-center text-[0.78rem] text-cream/55 mb-4">
          <span>Front Counter — Till 01</span>
          <span>Today, 2:41 PM</span>
        </div>
        <div class="bg-cream text-ink rounded-[14px] px-5.5 py-5 mb-3.5">
          <div class="text-[0.72rem] text-text-dim mb-1.5">Order #A214</div>
          <div class="font-serif text-[2.2rem]">RM 84.50</div>
        </div>
        <div
          v-for="item in lineItems"
          :key="item.label"
          class="flex justify-between items-center py-2.75 px-1 border-b border-dashed border-white/12 text-[0.88rem] text-cream/85"
        >
          <span>{{ item.label }}</span>
          <span class="tabular text-cream/60 text-[0.82rem]">{{ item.price }}</span>
        </div>
        <div class="flex gap-2 mt-4 flex-wrap">
          <span v-for="method in payMethods" :key="method" class="bg-white/8 text-cream/70 text-[0.72rem] px-2.5 py-1.5 rounded-lg">
            {{ method }}
          </span>
        </div>
      </div>
    </div>
  </header>
</template>
