<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { NAV_LINKS } from "../../data/site.js";
import AppLogo from "../ui/AppLogo.vue";
import BaseButton from "../ui/BaseButton.vue";

const scrolled = ref(false);
const menuOpen = ref(false);

function onScroll() {
  scrolled.value = window.scrollY > 12;
}

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});

onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>

<template>
  <nav
    class="fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300"
    :class="
      scrolled || menuOpen
        ? 'border-b border-line bg-white/85 shadow-[0_1px_0_rgba(21,35,27,0.02)] backdrop-blur-xl'
        : 'border-b border-transparent bg-transparent'
    "
    aria-label="Main"
  >
    <div class="wrap flex h-[72px] items-center justify-between gap-6">
      <a href="#top" aria-label="ArusPOS home" class="rounded-lg">
        <AppLogo :size="36" />
      </a>

      <div class="hidden items-center gap-8 lg:flex">
        <a
          v-for="link in NAV_LINKS"
          :key="link.href"
          :href="link.href"
          class="text-[0.92rem] font-semibold text-stone transition-colors duration-200 hover:text-forest"
        >
          {{ link.label }}
        </a>
      </div>

      <div class="hidden items-center gap-3 lg:flex">
        <BaseButton href="#cta" variant="ghost">Talk to Sales</BaseButton>
        <BaseButton href="#pricing" variant="primary" arrow>Get Started Free</BaseButton>
      </div>

      <button
        type="button"
        class="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-forest lg:hidden"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        aria-label="Toggle menu"
        @click="menuOpen = !menuOpen"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path v-if="!menuOpen" d="M4 7h16M4 12h16M4 17h16" />
          <path v-else d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </div>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="-translate-y-2 opacity-0"
      leave-active-class="transition duration-200 ease-in"
      leave-to-class="-translate-y-2 opacity-0"
    >
      <div
        v-if="menuOpen"
        id="mobile-menu"
        class="border-b border-line bg-white/95 backdrop-blur-xl lg:hidden"
      >
        <div class="wrap flex flex-col gap-1 py-4">
          <a
            v-for="link in NAV_LINKS"
            :key="link.href"
            :href="link.href"
            class="rounded-xl px-3 py-3 text-[1rem] font-semibold text-forest transition-colors hover:bg-cream"
            @click="menuOpen = false"
          >
            {{ link.label }}
          </a>
          <div class="mt-3 flex flex-col gap-2.5 border-t border-line pt-4">
            <BaseButton href="#cta" variant="ghost" @click="menuOpen = false">Talk to Sales</BaseButton>
            <BaseButton href="#pricing" variant="primary" arrow @click="menuOpen = false">
              Get Started Free
            </BaseButton>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>
