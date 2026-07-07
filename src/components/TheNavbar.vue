<script setup>
import AppLogo from "./AppLogo.vue";

const navLinks = [
  { label: "Free Tools", href: "#stack" },
  { label: "How It Grows With You", href: "#journey" },
  { label: "Your Data", href: "#moat" },
  { label: "Pricing", href: "#pricing" },
];
</script>

<template>
  <nav class="sticky top-0 z-50 bg-ink border-b border-white/8">
    <div class="wrap flex items-center justify-between h-[74px]">
      <AppLogo :size="38" />

      <div class="hidden md:flex gap-8.5 text-cream/72 text-[0.92rem]">
        <a v-for="link in navLinks" :key="link.href" :href="link.href" class="hover:text-cream transition-colors">
          {{ link.label }}
        </a>
      </div>

      <div class="flex gap-3 items-center">
        <a href="#" class="text-cream border border-white/30 px-5 py-2.5 rounded-full text-[0.9rem]">
          Talk to Sales
        </a>
        <a
          href="#pricing"
          class="bg-amber text-ink font-semibold text-[0.9rem] px-5.5 py-2.75 rounded-full inline-flex items-center gap-2 transition-all hover:bg-amber-deep hover:-translate-y-0.5"
        >
          Get Started Free →
        </a>
      </div>
    </div>
  </nav>
</template>
