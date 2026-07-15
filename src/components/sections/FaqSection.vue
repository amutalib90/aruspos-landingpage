<script setup>
import { ref } from "vue";
import { FAQS } from "../../data/faq.js";
import SectionHeader from "../ui/SectionHeader.vue";
import AppIcon from "../ui/AppIcon.vue";

const open = ref(0);

function toggle(index) {
  open.value = open.value === index ? -1 : index;
}
</script>

<template>
  <section id="faq" class="bg-cream py-24 md:py-32">
    <div class="wrap grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
      <div>
        <SectionHeader
          eyebrow="FAQ"
          title="Asked at every demo."
          lede="If your question isn't here, a real person replies within one business day."
          class="!mb-6"
        />
        <a
          href="mailto:hello@aruspay.com"
          class="inline-flex items-center gap-2 text-[0.92rem] font-bold text-moss transition-colors hover:text-moss-dark"
        >
          hello@aruspay.com
          <AppIcon name="arrowRight" :size="15" />
        </a>
      </div>

      <div v-reveal="{ delay: 100 }">
        <div
          v-for="(faq, i) in FAQS"
          :key="faq.q"
          class="border-b border-line transition-colors"
          :class="open === i ? 'bg-white/60 rounded-2xl border-transparent' : ''"
        >
          <h3>
            <button
              type="button"
              class="flex w-full cursor-pointer items-center justify-between gap-6 px-2 py-5 text-left text-[1rem] font-bold text-forest transition-colors hover:text-moss-dark md:px-4"
              :aria-expanded="open === i"
              :aria-controls="`faq-panel-${i}`"
              @click="toggle(i)"
            >
              {{ faq.q }}
              <span
                class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-white text-stone transition-transform duration-300"
                :class="open === i ? 'rotate-180 text-moss' : ''"
              >
                <AppIcon name="chevronDown" :size="15" />
              </span>
            </button>
          </h3>
          <div
            :id="`faq-panel-${i}`"
            class="grid transition-[grid-template-rows] duration-300 ease-out"
            :style="{ gridTemplateRows: open === i ? '1fr' : '0fr' }"
          >
            <div class="overflow-hidden">
              <p class="px-2 pb-6 text-[0.92rem] leading-relaxed text-forest/70 md:px-4">
                {{ faq.a }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
