<script setup>
import { PLANS } from "../../data/pricing.js";
import SectionHeader from "../ui/SectionHeader.vue";
import BaseButton from "../ui/BaseButton.vue";
import AppIcon from "../ui/AppIcon.vue";
</script>

<template>
  <section id="pricing" class="bg-white py-24 md:py-32">
    <div class="wrap">
      <SectionHeader
        align="center"
        eyebrow="Pricing"
        title="Free to run. Honest to grow."
        lede="No trial countdowns, no forced hardware, no multi-year contracts. You switch things on when your shop is ready — and off when it isn't."
      />

      <div class="mx-auto grid max-w-5xl grid-cols-1 items-stretch gap-5 lg:grid-cols-3">
        <article
          v-for="(plan, i) in PLANS"
          :key="plan.name"
          v-reveal="{ delay: i * 110 }"
          class="card-lift relative flex flex-col rounded-3xl px-7 py-8"
          :class="
            plan.popular
              ? 'bg-forest text-cream shadow-[var(--shadow-lift)] lg:-my-3 lg:py-11'
              : 'border border-line bg-white'
          "
        >
          <span
            v-if="plan.popular"
            class="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1.5 text-[0.7rem] font-bold tracking-wider text-forest uppercase"
          >
            Most popular
          </span>

          <h3 class="text-[1.05rem] font-bold" :class="plan.popular ? 'text-leaf' : 'text-moss'">
            {{ plan.name }}
          </h3>
          <div class="mt-3 flex items-baseline gap-2">
            <span class="text-[2.4rem] leading-none font-bold tracking-tight">{{ plan.price }}</span>
            <span class="text-[0.85rem] font-semibold" :class="plan.popular ? 'text-cream/60' : 'text-stone'">
              {{ plan.period }}
            </span>
          </div>
          <p
            class="mt-3 text-[0.9rem] leading-relaxed"
            :class="plan.popular ? 'text-cream/70' : 'text-stone'"
          >
            {{ plan.tagline }}
          </p>

          <ul class="mt-6 mb-8 flex-1 space-y-2.5">
            <li
              v-for="feature in plan.features"
              :key="feature"
              class="flex items-start gap-2.5 text-[0.88rem] font-semibold"
              :class="plan.popular ? 'text-cream/90' : 'text-forest'"
            >
              <AppIcon
                name="check"
                :size="15"
                class="mt-0.5 shrink-0"
                :class="plan.popular ? 'text-leaf' : 'text-moss'"
              />
              {{ feature }}
            </li>
          </ul>

          <BaseButton
            :href="plan.cta.href"
            :variant="plan.popular ? 'gold' : plan.cta.variant"
            size="lg"
            arrow
            class="w-full"
          >
            {{ plan.cta.label }}
          </BaseButton>
          <p
            class="mt-4 text-center text-[0.74rem] leading-snug font-semibold"
            :class="plan.popular ? 'text-cream/55' : 'text-stone/90'"
          >
            {{ plan.footnote }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
