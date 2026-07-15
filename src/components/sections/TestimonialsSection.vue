<script setup>
import { ref, onUnmounted } from "vue";
import { TESTIMONIALS } from "../../data/testimonials.js";
import { useInViewOnce } from "../../composables/useInViewOnce.js";
import { useReducedMotion } from "../../composables/useReducedMotion.js";
import SectionHeader from "../ui/SectionHeader.vue";
import AppIcon from "../ui/AppIcon.vue";

const reduced = useReducedMotion();
const active = ref(0);
const paused = ref(false);
let timer = null;

function go(index) {
  active.value = (index + TESTIMONIALS.length) % TESTIMONIALS.length;
}

function manual(index) {
  stopAuto();
  go(index);
}

function stopAuto() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}

const sectionEl = useInViewOnce(
  () => {
    if (reduced.value) return;
    timer = setInterval(() => {
      if (!paused.value) go(active.value + 1);
    }, 6000);
  },
  { threshold: 0.3 }
);

onUnmounted(stopAuto);
</script>

<template>
  <section
    ref="sectionEl"
    class="bg-cream py-24 md:py-32"
    aria-roledescription="carousel"
    aria-label="Merchant testimonials"
    @mouseenter="paused = true"
    @mouseleave="paused = false"
    @focusin="paused = true"
    @focusout="paused = false"
  >
    <div class="wrap">
      <SectionHeader
        align="center"
        eyebrow="Merchant stories"
        title="The till balanced. The merchants noticed."
      />

      <div class="relative mx-auto max-w-3xl">
        <div v-reveal class="relative min-h-[300px] sm:min-h-[260px]" aria-live="polite">
          <Transition
            enter-active-class="transition duration-500 ease-out"
            enter-from-class="opacity-0 translate-y-4"
            leave-active-class="transition duration-300 ease-in absolute inset-0"
            leave-to-class="opacity-0 -translate-y-3"
          >
            <figure
              :key="active"
              class="rounded-3xl border border-line bg-white px-8 py-10 text-center shadow-[var(--shadow-card)] md:px-14"
            >
              <AppIcon name="quote" :size="26" class="mx-auto mb-5 text-leaf" />
              <blockquote
                class="accent-serif text-[clamp(1.15rem,1rem+0.9vw,1.45rem)] leading-normal text-forest"
              >
                {{ TESTIMONIALS[active].quote }}
              </blockquote>
              <figcaption class="mt-7 flex flex-col items-center gap-2.5">
                <span
                  class="flex h-12 w-12 items-center justify-center rounded-full bg-leaf-light text-[0.85rem] font-bold text-moss-dark"
                  aria-hidden="true"
                >
                  {{ TESTIMONIALS[active].initials }}
                </span>
                <span class="text-[0.95rem] font-bold text-forest">{{ TESTIMONIALS[active].name }}</span>
                <span class="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[0.8rem] font-semibold text-stone">
                  {{ TESTIMONIALS[active].business }}
                  <span class="inline-flex items-center gap-1 rounded-full bg-success-bg px-2.5 py-0.5 text-[0.68rem] font-bold text-success-text">
                    <AppIcon name="check" :size="11" />
                    Verified merchant
                  </span>
                </span>
                <span class="text-[0.72rem] font-semibold text-stone">{{ TESTIMONIALS[active].tag }}</span>
              </figcaption>
            </figure>
          </Transition>
        </div>

        <!-- Controls -->
        <div class="mt-8 flex items-center justify-center gap-5">
          <button
            type="button"
            class="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-line bg-white text-forest transition-colors hover:border-stone"
            aria-label="Previous testimonial"
            @click="manual(active - 1)"
          >
            <AppIcon name="arrowRight" :size="16" class="rotate-180" />
          </button>
          <div class="flex gap-2" role="tablist" aria-label="Choose testimonial">
            <button
              v-for="(t, i) in TESTIMONIALS"
              :key="t.name"
              type="button"
              role="tab"
              :aria-selected="active === i"
              :aria-label="`Testimonial from ${t.name}`"
              class="h-2 cursor-pointer rounded-full transition-all duration-300"
              :class="active === i ? 'w-7 bg-moss' : 'w-2 bg-line hover:bg-leaf'"
              @click="manual(i)"
            ></button>
          </div>
          <button
            type="button"
            class="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-line bg-white text-forest transition-colors hover:border-stone"
            aria-label="Next testimonial"
            @click="manual(active + 1)"
          >
            <AppIcon name="arrowRight" :size="16" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
