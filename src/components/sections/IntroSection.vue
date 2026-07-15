<script setup>
import SectionHeader from "../ui/SectionHeader.vue";
import AppIcon from "../ui/AppIcon.vue";

const PROBLEMS = [
  {
    icon: "receipt",
    title: "Disconnected sales",
    desc: "Till receipts and QR payments land in different apps, so daily totals never quite match.",
  },
  {
    icon: "box",
    title: "Guesswork stock",
    desc: "You restock by memory, not by what actually sold — so you're either overstocked or out.",
  },
  {
    icon: "users",
    title: "No customer memory",
    desc: "Regulars are still treated like strangers, because nothing tracks who they are or what they buy.",
  },
  {
    icon: "chart",
    title: "Numbers, too late",
    desc: "You find out if today was good or bad a week later, when it's too late to act on it.",
  },
];

const ANSWERS = ["One till", "One stock count", "One customer list", "One daily total"];
</script>

<template>
  <section id="product" class="bg-cream py-24 md:py-32">
    <div class="wrap">
      <SectionHeader
        eyebrow="The problem"
        title="Your shop runs on five apps that don't talk to each other."
        lede="POS in one corner, QR payment in another, a notebook for inventory, WhatsApp for customer follow-ups, and an accountant who gets a shoebox of receipts at month-end. That's not a system — it's five part-time jobs you didn't sign up for."
      />

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(p, i) in PROBLEMS"
          :key="p.title"
          v-reveal="{ delay: i * 90 }"
          class="card-lift rounded-2xl border border-line bg-white px-6 py-7"
        >
          <div class="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cream text-stone">
            <AppIcon :name="p.icon" :size="20" />
          </div>
          <h3 class="mb-2 text-[1rem] font-bold text-forest">{{ p.title }}</h3>
          <p class="text-[0.88rem] leading-relaxed text-stone">{{ p.desc }}</p>
        </div>
      </div>

      <!-- The turn: from problem to product -->
      <div
        v-reveal="{ delay: 150 }"
        class="mt-14 flex flex-col items-start justify-between gap-8 rounded-3xl bg-forest px-8 py-10 md:mt-16 md:flex-row md:items-center md:px-12"
      >
        <div class="max-w-xl">
          <p class="eyebrow mb-3 text-leaf">Meet ArusPOS</p>
          <h3 class="heading-3 text-cream">
            One system where every sale, every item, and every customer
            <em class="accent-serif text-leaf">flows</em> into the same place.
          </h3>
        </div>
        <ul class="flex flex-wrap gap-2.5 md:max-w-xs md:justify-end">
          <li
            v-for="answer in ANSWERS"
            :key="answer"
            class="flex items-center gap-2 rounded-full border border-cream/15 bg-white/5 px-4 py-2 text-[0.82rem] font-bold text-cream"
          >
            <AppIcon name="check" :size="14" class="text-leaf" />
            {{ answer }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
