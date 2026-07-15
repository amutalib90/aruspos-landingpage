<script setup>
import { JOURNEY_PHASES } from "../../data/journey.js";
import { MOAT_RECEIPT } from "../../data/stats.js";
import SectionHeader from "../ui/SectionHeader.vue";
import AnimatedCounter from "../ui/AnimatedCounter.vue";
</script>

<template>
  <section id="experience" class="bg-white py-24 md:py-32">
    <div class="wrap">
      <SectionHeader
        eyebrow="The merchant experience"
        title="You don't outgrow this. You unlock the next room."
        lede="Each stage only shows up once the one before it is actually working for your shop — not before."
      />

      <!-- Journey timeline -->
      <div class="relative grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-6">
        <div
          class="absolute top-[23px] right-0 left-0 hidden h-px bg-line md:block"
          aria-hidden="true"
        ></div>
        <div
          v-for="(phase, i) in JOURNEY_PHASES"
          :key="phase.marker"
          v-reveal="{ delay: i * 110 }"
          class="relative"
        >
          <div
            class="relative z-10 mb-5 flex h-11.5 w-11.5 items-center justify-center rounded-full border text-[0.78rem] font-bold tabular"
            :class="
              phase.active
                ? 'border-forest bg-forest text-leaf'
                : 'border-line bg-white text-stone'
            "
          >
            {{ phase.marker }}
          </div>
          <span class="eyebrow mb-1.5 block !text-[0.68rem] text-moss">{{ phase.tag }}</span>
          <h3 class="mb-2 text-[1.02rem] font-bold text-forest">{{ phase.title }}</h3>
          <p class="text-[0.86rem] leading-relaxed text-stone">{{ phase.desc }}</p>
        </div>
      </div>

      <!-- Two years later: the receipt that explains why merchants stay -->
      <div class="mt-20 grid grid-cols-1 items-center gap-10 rounded-3xl bg-forest px-8 py-12 md:mt-24 md:grid-cols-2 md:gap-16 md:px-14">
        <div v-reveal>
          <p class="eyebrow mb-4 text-leaf">Why merchants stay</p>
          <h3 class="heading-2 text-cream">
            Not lock-in. Just two years of a business you'd
            <em class="accent-serif text-leaf">rather not rebuild</em>.
          </h3>
          <p class="mt-5 max-w-md leading-relaxed text-cream/65">
            You can export your data and leave any time — we mean that. But after two years,
            "leaving" means walking away from your loyalty list, your sales history, your stock
            patterns, and every regular customer's order habits. Most merchants stay because
            rebuilding that would cost more than staying ever did.
          </p>
        </div>

        <div v-reveal="{ delay: 150, scale: true }" class="relative mx-auto w-full max-w-sm">
          <div
            class="relative bg-cream px-7 py-8 text-forest shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]"
            style="
              clip-path: polygon(
                0 8px, 4% 0, 8% 8px, 12% 0, 16% 8px, 20% 0, 24% 8px, 28% 0, 32% 8px, 36% 0,
                40% 8px, 44% 0, 48% 8px, 52% 0, 56% 8px, 60% 0, 64% 8px, 68% 0, 72% 8px, 76% 0,
                80% 8px, 84% 0, 88% 8px, 92% 0, 96% 8px, 100% 0, 100% calc(100% - 8px),
                96% 100%, 92% calc(100% - 8px), 88% 100%, 84% calc(100% - 8px), 80% 100%,
                76% calc(100% - 8px), 72% 100%, 68% calc(100% - 8px), 64% 100%,
                60% calc(100% - 8px), 56% 100%, 52% calc(100% - 8px), 48% 100%,
                44% calc(100% - 8px), 40% 100%, 36% calc(100% - 8px), 32% 100%,
                28% calc(100% - 8px), 24% 100%, 20% calc(100% - 8px), 16% 100%,
                12% calc(100% - 8px), 8% 100%, 4% calc(100% - 8px), 0 100%
              );
            "
          >
            <p class="caption mb-4 text-center tracking-[0.16em]">★ 2 YEARS ON ARUSPOS ★</p>
            <ul>
              <li
                v-for="line in MOAT_RECEIPT"
                :key="line.label"
                class="flex justify-between border-b border-dotted border-forest/20 py-1.5 text-[0.86rem] font-semibold"
              >
                <span>{{ line.label }}</span>
                <span class="tabular font-bold"><AnimatedCounter :target="line.target" /></span>
              </li>
            </ul>
            <div class="mt-3 flex justify-between pt-1.5 text-[0.86rem] font-bold">
              <span>Operational history</span>
              <span class="accent-serif">Irreplaceable</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
