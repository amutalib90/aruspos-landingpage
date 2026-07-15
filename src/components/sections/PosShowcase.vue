<script setup>
import { ref, computed, onUnmounted } from "vue";
import { DEMO_PRODUCTS, SHOWCASE_STEPS } from "../../data/showcase.js";
import { useInViewOnce } from "../../composables/useInViewOnce.js";
import { useReducedMotion } from "../../composables/useReducedMotion.js";
import SectionHeader from "../ui/SectionHeader.vue";
import AppIcon from "../ui/AppIcon.vue";

const reduced = useReducedMotion();
const activeId = ref("sell");
const interacted = ref(false);

/* Demo cart — starts as the hero's order so every step tells one story. */
const cart = ref([
  { id: "nasi-lemak", qty: 2 },
  { id: "teh-tarik", qty: 3 },
  { id: "ayam-goreng", qty: 4 },
]);

const productById = Object.fromEntries(DEMO_PRODUCTS.map((p) => [p.id, p]));

const cartLines = computed(() =>
  cart.value.map((line) => ({
    ...line,
    name: productById[line.id].name,
    amount: productById[line.id].price * line.qty,
  }))
);

const total = computed(() => cartLines.value.reduce((sum, line) => sum + line.amount, 0));

const stockRows = computed(() =>
  DEMO_PRODUCTS.map((p) => {
    const inCart = cart.value.find((l) => l.id === p.id)?.qty || 0;
    return { ...p, remaining: p.stock - inCart, ratio: (p.stock - inCart) / p.stock };
  })
);

function fmt(value) {
  return `RM ${value.toFixed(2)}`;
}

function addItem(id) {
  interacted.value = true;
  const line = cart.value.find((l) => l.id === id);
  if (line) {
    if (line.qty < productById[id].stock) line.qty += 1;
  } else {
    cart.value.push({ id, qty: 1 });
  }
}

function clearCart() {
  interacted.value = true;
  cart.value = [];
}

/* Auto-advance the story until the visitor takes over. */
let timer = null;

function select(id) {
  activeId.value = id;
}

function selectManual(id) {
  interacted.value = true;
  stopAuto();
  select(id);
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
      if (interacted.value) return stopAuto();
      const ids = SHOWCASE_STEPS.map((s) => s.id);
      const next = ids[(ids.indexOf(activeId.value) + 1) % ids.length];
      select(next);
    }, 4500);
  },
  { threshold: 0.35 }
);

onUnmounted(stopAuto);

function onKeydown(e) {
  const ids = SHOWCASE_STEPS.map((s) => s.id);
  const idx = ids.indexOf(activeId.value);
  if (e.key === "ArrowDown" || e.key === "ArrowRight") {
    e.preventDefault();
    selectManual(ids[(idx + 1) % ids.length]);
  } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
    e.preventDefault();
    selectManual(ids[(idx - 1 + ids.length) % ids.length]);
  }
}

const activeStep = computed(() => SHOWCASE_STEPS.find((s) => s.id === activeId.value));

const WEEK_BARS = [42, 58, 50, 74, 66, 92, 80];
</script>

<template>
  <section id="showcase" ref="sectionEl" class="bg-forest py-24 text-cream md:py-32">
    <div class="wrap">
      <SectionHeader
        tone="dark"
        eyebrow="Interactive preview"
        title="This is what closing a sale feels like."
        lede="Tap through a real order — from the first item to tonight's numbers. No signup, no video, just the actual flow."
      />

      <div class="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <!-- Step rail -->
        <div
          role="tablist"
          aria-label="POS demo steps"
          aria-orientation="vertical"
          class="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-2.5 lg:overflow-visible lg:pb-0"
          @keydown="onKeydown"
        >
          <button
            v-for="step in SHOWCASE_STEPS"
            :id="`tab-${step.id}`"
            :key="step.id"
            type="button"
            role="tab"
            :aria-selected="activeId === step.id"
            :aria-controls="`panel-${step.id}`"
            :tabindex="activeId === step.id ? 0 : -1"
            class="group shrink-0 cursor-pointer rounded-2xl border px-5 py-4 text-left transition-all duration-300 lg:w-full"
            :class="
              activeId === step.id
                ? 'border-leaf/40 bg-white/8'
                : 'border-cream/10 bg-transparent hover:border-cream/25 hover:bg-white/4'
            "
            @click="selectManual(step.id)"
          >
            <span class="flex items-center gap-3.5">
              <span
                class="flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300"
                :class="activeId === step.id ? 'bg-leaf text-forest' : 'bg-white/8 text-leaf'"
              >
                <AppIcon :name="step.icon" :size="18" />
              </span>
              <span>
                <span class="block text-[0.95rem] font-bold text-cream">{{ step.title }}</span>
                <span
                  class="mt-0.5 hidden text-[0.82rem] leading-snug font-medium text-cream/55 lg:block"
                >
                  {{ step.desc }}
                </span>
              </span>
            </span>
          </button>
        </div>

        <!-- Device panel -->
        <div
          :id="`panel-${activeId}`"
          role="tabpanel"
          :aria-labelledby="`tab-${activeId}`"
          class="relative"
        >
          <div
            class="rounded-[2rem] border border-cream/12 bg-forest-2 p-3 shadow-[0_60px_120px_-40px_rgba(0,0,0,0.55)]"
          >
            <div class="flex items-center justify-between rounded-t-[1.45rem] bg-white/5 px-6 py-3">
              <span class="text-[0.74rem] font-bold text-cream/60">Front Counter · Till 01</span>
              <span class="flex items-center gap-2 text-[0.74rem] font-bold text-leaf">
                <span class="pulse-dot h-1.5 w-1.5 rounded-full bg-leaf"></span>
                {{ activeStep.label }}
              </span>
            </div>

            <div class="min-h-[420px] rounded-b-[1.45rem] bg-white p-5 text-forest sm:p-6">
              <!-- SELL -->
              <div v-if="activeId === 'sell'" class="grid grid-cols-1 gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <p class="caption mb-3 text-stone">Tap to add items</p>
                  <div class="grid grid-cols-2 gap-2.5">
                    <button
                      v-for="p in DEMO_PRODUCTS"
                      :key="p.id"
                      type="button"
                      class="cursor-pointer rounded-xl border border-line bg-cream px-3.5 py-3 text-left transition-all duration-150 hover:border-moss active:scale-[0.97]"
                      @click="addItem(p.id)"
                    >
                      <span class="block text-[0.82rem] font-bold text-forest">{{ p.name }}</span>
                      <span class="mt-0.5 block text-[0.74rem] font-semibold text-stone tabular">
                        {{ fmt(p.price) }}
                      </span>
                    </button>
                  </div>
                </div>
                <div class="flex flex-col rounded-2xl bg-cream p-4">
                  <div class="flex items-center justify-between">
                    <p class="caption text-stone">Order #A214</p>
                    <button
                      v-if="cartLines.length"
                      type="button"
                      class="cursor-pointer text-[0.7rem] font-bold text-error hover:underline"
                      @click="clearCart"
                    >
                      Clear
                    </button>
                  </div>
                  <ul class="mt-2 flex-1">
                    <li
                      v-for="line in cartLines"
                      :key="line.id"
                      class="flex justify-between border-b border-dashed border-line py-2 text-[0.8rem] font-semibold"
                    >
                      <span>{{ line.name }} ×{{ line.qty }}</span>
                      <span class="tabular text-stone">{{ fmt(line.amount) }}</span>
                    </li>
                    <li v-if="!cartLines.length" class="py-6 text-center text-[0.8rem] font-semibold text-stone">
                      Tap an item to start the order
                    </li>
                  </ul>
                  <div class="mt-3 flex items-baseline justify-between border-t border-line pt-3">
                    <span class="text-[0.8rem] font-bold text-stone">Total</span>
                    <span class="text-[1.35rem] font-bold tracking-tight tabular">{{ fmt(total) }}</span>
                  </div>
                </div>
              </div>

              <!-- PAY -->
              <div v-else-if="activeId === 'pay'" key="pay" class="flex flex-col items-center py-2">
                <p class="caption text-stone">Charging</p>
                <p class="mt-1 text-[2.2rem] font-bold tracking-tight tabular">{{ fmt(total) }}</p>
                <div class="relative mt-5 overflow-hidden rounded-2xl border border-line bg-white p-4 shadow-[var(--shadow-card)]">
                  <svg width="120" height="120" viewBox="0 0 104 104" aria-hidden="true" class="text-forest">
                    <g fill="currentColor">
                      <rect x="4" y="4" width="28" height="28" rx="3" fill="none" stroke="currentColor" stroke-width="5" />
                      <rect x="72" y="4" width="28" height="28" rx="3" fill="none" stroke="currentColor" stroke-width="5" />
                      <rect x="4" y="72" width="28" height="28" rx="3" fill="none" stroke="currentColor" stroke-width="5" />
                      <rect x="13" y="13" width="10" height="10" />
                      <rect x="81" y="13" width="10" height="10" />
                      <rect x="13" y="81" width="10" height="10" />
                      <rect x="44" y="8" width="8" height="8" /><rect x="56" y="20" width="8" height="8" />
                      <rect x="44" y="32" width="8" height="8" /><rect x="8" y="44" width="8" height="8" />
                      <rect x="24" y="52" width="8" height="8" /><rect x="44" y="48" width="12" height="12" />
                      <rect x="64" y="44" width="8" height="8" /><rect x="80" y="52" width="8" height="8" />
                      <rect x="92" y="44" width="8" height="8" /><rect x="44" y="68" width="8" height="8" />
                      <rect x="60" y="76" width="8" height="8" /><rect x="76" y="72" width="8" height="8" />
                      <rect x="92" y="80" width="8" height="8" /><rect x="44" y="88" width="8" height="8" />
                      <rect x="72" y="92" width="12" height="8" />
                    </g>
                  </svg>
                  <span
                    class="scan-line absolute inset-x-2 top-3 block h-10 rounded bg-gradient-to-b from-leaf-light/0 via-leaf-light/70 to-leaf/40"
                    aria-hidden="true"
                  ></span>
                </div>
                <div class="mt-4 flex flex-wrap justify-center gap-1.5">
                  <span
                    v-for="(m, i) in ['DuitNow QR', 'Card', 'E-Wallet', 'NFC', 'Cash']"
                    :key="m"
                    class="rounded-lg px-2.5 py-1.5 text-[0.7rem] font-bold"
                    :class="i === 0 ? 'bg-moss text-white' : 'bg-cream text-stone'"
                  >
                    {{ m }}
                  </span>
                </div>
                <div
                  class="mt-5 flex items-center gap-2.5 rounded-xl border border-success bg-success-bg px-4 py-2.5"
                  style="animation: toast-in 0.6s var(--ease-out-soft) 1.6s backwards"
                >
                  <span class="flex h-6 w-6 items-center justify-center rounded-full bg-success text-white">
                    <AppIcon name="check" :size="13" />
                  </span>
                  <span class="text-[0.82rem] font-bold text-success-text">
                    Payment received · {{ fmt(total) }}
                  </span>
                </div>
              </div>

              <!-- RECEIPT -->
              <div v-else-if="activeId === 'receipt'" key="receipt" class="flex flex-col items-center py-2">
                <div class="flex w-full max-w-[280px] items-center justify-between rounded-xl bg-forest px-4 py-2.5 text-cream">
                  <span class="flex items-center gap-2 text-[0.74rem] font-bold">
                    <AppIcon name="printer" :size="15" class="text-leaf" />
                    Printing receipt
                  </span>
                  <span class="pulse-dot h-1.5 w-1.5 rounded-full bg-leaf"></span>
                </div>
                <div class="w-full max-w-[280px] overflow-hidden px-3">
                  <div
                    class="rounded-b-sm border border-t-0 border-line bg-cream px-5 pt-4 pb-5 shadow-[var(--shadow-card)]"
                    style="animation: receipt-out 1.4s var(--ease-out-soft) both"
                  >
                    <p class="caption text-center tracking-[0.2em] text-forest">ARUSPOS</p>
                    <p class="mt-0.5 text-center text-[0.66rem] font-semibold text-stone">
                      Order #A214 · Till 01 · 2:41 PM
                    </p>
                    <ul class="mt-3 border-t border-dashed border-stone/40 pt-2.5">
                      <li
                        v-for="line in cartLines"
                        :key="line.id"
                        class="flex justify-between py-1 text-[0.76rem] font-semibold"
                      >
                        <span>{{ line.name }} ×{{ line.qty }}</span>
                        <span class="tabular">{{ fmt(line.amount) }}</span>
                      </li>
                    </ul>
                    <div class="mt-1.5 flex justify-between border-t border-dashed border-stone/40 pt-2 text-[0.86rem] font-bold">
                      <span>Total</span>
                      <span class="tabular">{{ fmt(total) }}</span>
                    </div>
                    <p class="mt-3 flex items-center justify-center gap-1.5 text-[0.68rem] font-bold text-success-text">
                      <AppIcon name="check" :size="12" />
                      Digital copy sent via WhatsApp
                    </p>
                  </div>
                </div>
              </div>

              <!-- STOCK -->
              <div v-else-if="activeId === 'stock'" key="stock" class="py-1">
                <div class="mb-4 flex items-center justify-between">
                  <p class="caption text-stone">Inventory</p>
                  <span class="rounded-md bg-success-bg px-2.5 py-1 text-[0.66rem] font-bold text-success-text">
                    Auto-updated after Order #A214
                  </span>
                </div>
                <ul>
                  <li
                    v-for="(row, i) in stockRows"
                    :key="row.id"
                    class="flex items-center gap-4 border-b border-line py-2.5"
                  >
                    <span class="w-32 shrink-0 text-[0.82rem] font-bold text-forest">{{ row.name }}</span>
                    <span class="h-1.5 flex-1 overflow-hidden rounded-full bg-cream">
                      <span
                        class="block h-full origin-left rounded-full transition-transform duration-700"
                        :class="row.ratio < 0.3 ? 'bg-warning' : 'bg-moss'"
                        :style="{ transform: `scaleX(${row.ratio})`, transitionDelay: `${i * 70}ms` }"
                      ></span>
                    </span>
                    <span class="w-14 text-right text-[0.78rem] font-bold text-stone tabular">
                      {{ row.remaining }} left
                    </span>
                  </li>
                </ul>
                <p class="mt-4 text-[0.78rem] font-semibold text-stone">
                  Low-stock alerts go out before you run out — not after.
                </p>
              </div>

              <!-- INSIGHTS -->
              <div v-else key="insights" class="py-1">
                <div class="mb-5 flex flex-wrap gap-2">
                  <span class="rounded-lg bg-cream px-3 py-1.5 text-[0.74rem] font-bold text-forest tabular">
                    Today · RM 1,240.50
                  </span>
                  <span class="rounded-lg bg-success-bg px-3 py-1.5 text-[0.74rem] font-bold text-success-text">
                    ↑ 18% vs last Tue
                  </span>
                  <span class="rounded-lg bg-cream px-3 py-1.5 text-[0.74rem] font-bold text-stone">
                    Best seller · Nasi Lemak Set
                  </span>
                </div>
                <div class="flex h-44 items-end gap-2.5 rounded-2xl bg-cream p-5 sm:gap-4">
                  <div
                    v-for="(bar, i) in WEEK_BARS"
                    :key="i"
                    class="flex h-full flex-1 flex-col justify-end gap-2"
                  >
                    <span
                      class="block origin-bottom rounded-t-md"
                      :class="i === 5 ? 'bg-moss' : 'bg-leaf'"
                      :style="{
                        height: `${bar}%`,
                        animation: `bar-grow 0.8s var(--ease-out-soft) ${i * 80}ms both`,
                      }"
                    ></span>
                    <span class="text-center text-[0.62rem] font-bold text-stone">
                      {{ ["M", "T", "W", "T", "F", "S", "S"][i] }}
                    </span>
                  </div>
                </div>
                <p class="mt-4 text-[0.78rem] font-semibold text-stone">
                  Saturday is your week — and now you know it on Saturday, not next Friday.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
