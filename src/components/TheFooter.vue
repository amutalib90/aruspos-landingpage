<script setup>
import AppLogo from "./AppLogo.vue";

const links = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "hello@aruspay.com", href: "#" },
];
</script>

<template>
  <footer class="bg-ink text-cream/50 py-10 text-[0.82rem]">
    <div class="wrap flex justify-between items-center flex-wrap gap-3">
      <AppLogo :size="32" wordmark-class="text-cream/70" />
      <div class="flex gap-5.5">
        <a v-for="link in links" :key="link.label" :href="link.href" class="hover:text-cream transition-colors">
          {{ link.label }}
        </a>
      </div>
      <div>© <span class="year-badge">2026</span> ArusPOS. All rights reserved.</div>
    </div>
  </footer>
</template>
