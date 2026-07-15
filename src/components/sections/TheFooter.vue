<script setup>
import { FOOTER_LINKS } from "../../data/site.js";
import AppLogo from "../ui/AppLogo.vue";
</script>

<template>
  <footer class="border-t border-white/8 bg-forest py-12 text-[0.84rem] text-cream/55">
    <div class="wrap flex flex-wrap items-center justify-between gap-6">
      <AppLogo :size="32" tone="dark" />
      <nav aria-label="Footer">
        <ul class="flex flex-wrap gap-x-7 gap-y-2">
          <li v-for="link in FOOTER_LINKS" :key="link.label">
            <a :href="link.href" class="font-semibold transition-colors hover:text-cream">
              {{ link.label }}
            </a>
          </li>
        </ul>
      </nav>
      <p>© 2026 ArusPOS. All rights reserved.</p>
    </div>
  </footer>
</template>
