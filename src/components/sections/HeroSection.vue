<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { TRUST_BADGES, MERCHANT_LOGOS } from "../../data/site.js";
import { useReducedMotion } from "../../composables/useReducedMotion.js";
import AnimatedCounter from "../ui/AnimatedCounter.vue";
import BaseButton from "../ui/BaseButton.vue";
import AppIcon from "../ui/AppIcon.vue";

const heroRef = ref(null);
const reduced = useReducedMotion();

/* Cursor glow + mouse parallax — one lerp loop drives CSS vars consumed
   by the glow layer and every parallax layer. */
const current = { x: 0, y: 0, gx: 72, gy: 18 };
const target = { x: 0, y: 0, gx: 72, gy: 18 };
let rafId = null;

function apply() {
  const el = heroRef.value;
  if (!el) return;
  el.style.setProperty("--par-x", current.x.toFixed(3));
  el.style.setProperty("--par-y", current.y.toFixed(3));
  el.style.setProperty("--glow-x", `${current.gx.toFixed(2)}%`);
  el.style.setProperty("--glow-y", `${current.gy.toFixed(2)}%`);
}

function tick() {
  for (const k of ["x", "y", "gx", "gy"]) current[k] += (target[k] - current[k]) * 0.07;
  apply();
  rafId = requestAnimationFrame(tick);
}

function onMove(e) {
  if (reduced.value || !heroRef.value) return;
  const rect = heroRef.value.getBoundingClientRect();
  const rx = (e.clientX - rect.left) / rect.width;
  const ry = (e.clientY - rect.top) / rect.height;
  target.x = (rx - 0.5) * 2;
  target.y = (ry - 0.5) * 2;
  target.gx = rx * 100;
  target.gy = ry * 100;
}

function onLeave() {
  Object.assign(target, { x: 0, y: 0, gx: 72, gy: 18 });
}

onMounted(() => {
  apply();
  if (!reduced.value) rafId = requestAnimationFrame(tick);
});

onBeforeUnmount(() => rafId && cancelAnimationFrame(rafId));

const ORDER_ITEMS = [
  { label: "Nasi Lemak Set ×2", price: "RM 24.00" },
  { label: "Teh Tarik ×3", price: "RM 10.50" },
  { label: "Ayam Goreng ×4", price: "RM 50.00" },
];

const PAY_METHODS = ["DuitNow QR", "Card", "E-Wallet", "Cash"];

const STATS = [
  { static: "RM0", label: "Monthly fee to start" },
  { target: 0.45, decimals: 2, suffix: "%", label: "Payment margin, no markup" },
  { target: 7000, suffix: "+", label: "Active merchants" },
];
</script>

<template>
  <header
    id="top"
    ref="heroRef"
    class="relative overflow-hidden bg-white pt-32 pb-14 md:pt-40"
    @mousemove="onMove"
    @mouseleave="onLeave"
  >
    <!-- Ambient background: soft brand washes + cursor glow, all inside the palette -->
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div
        class="absolute inset-0"
        style="
          background:
            radial-gradient(ellipse 55% 45% at 78% 8%, rgba(214, 233, 198, 0.55), transparent 65%),
            radial-gradient(ellipse 45% 40% at 8% 90%, rgba(251, 247, 238, 0.9), transparent 70%);
        "
      ></div>
      <div
        class="absolute inset-0 transition-opacity"
        style="
          background: radial-gradient(
            ellipse 34% 30% at var(--glow-x, 72%) var(--glow-y, 18%),
            rgba(221, 162, 79, 0.12),
            transparent 70%
          );
        "
      ></div>
      <div
        class="absolute inset-0"
        style="
          background-image: radial-gradient(rgba(21, 35, 27, 0.06) 1px, transparent 1px);
          background-size: 26px 26px;
          mask-image: radial-gradient(ellipse 62% 62% at 72% 22%, black, transparent 74%);
        "
      ></div>
    </div>

    <div class="wrap relative z-10 grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.02fr_0.98fr]">
      <!-- Copy column -->
      <div>
        <span
          v-reveal
          class="mb-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-white/70 py-2 pr-4 pl-3 text-[0.8rem] font-bold text-forest backdrop-blur"
        >
          <span class="pulse-dot h-2 w-2 rounded-full bg-moss"></span>
          Free forever · No hardware lock-in
        </span>

        <h1 v-reveal="{ delay: 80 }" class="heading-1 max-w-xl text-forest">
          Run your store.<br />
          Not just your <em class="accent-serif text-moss">till</em>.
        </h1>

        <p v-reveal="{ delay: 160 }" class="lede mt-6 max-w-lg text-stone">
          One free operating system for point-of-sale, QR payments, inventory, and customer
          records — built for Malaysian retail and F&amp;B, so every ringgit that moves through
          your shop is reconciled, not guessed at.
        </p>

        <div v-reveal="{ delay: 240 }" class="mt-9 flex flex-wrap gap-3.5">
          <BaseButton href="#pricing" variant="primary" size="lg" arrow>Set Up in 10 Minutes</BaseButton>
          <BaseButton href="#showcase" variant="ghost" size="lg">See it in action</BaseButton>
        </div>

        <ul v-reveal="{ delay: 320 }" class="mt-8 flex flex-wrap gap-x-6 gap-y-2.5">
          <li
            v-for="badge in TRUST_BADGES"
            :key="badge.label"
            class="flex items-center gap-2 text-[0.82rem] font-semibold text-stone"
          >
            <AppIcon :name="badge.icon" :size="15" class="text-moss" />
            {{ badge.label }}
          </li>
        </ul>

        <dl v-reveal="{ delay: 400 }" class="mt-11 flex flex-wrap gap-x-10 gap-y-5">
          <div v-for="stat in STATS" :key="stat.label">
            <dt class="sr-only">{{ stat.label }}</dt>
            <dd class="text-[1.7rem] font-bold tracking-tight text-forest">
              <template v-if="stat.static">{{ stat.static }}</template>
              <AnimatedCounter v-else :target="stat.target" :decimals="stat.decimals || 0" :suffix="stat.suffix" />
            </dd>
            <dd class="mt-0.5 text-[0.78rem] font-semibold text-stone">{{ stat.label }}</dd>
          </div>
        </dl>
      </div>

      <!-- Device composition — layered, floating, parallax -->
      <div v-reveal="{ delay: 200, scale: true }" class="relative mx-auto w-full max-w-[420px] lg:max-w-none">
        <!-- Receipt peeking behind the phone -->
        <div
          class="float-slower absolute -right-2 top-10 hidden w-40 rotate-6 rounded-sm bg-cream p-4 shadow-[var(--shadow-card)] sm:block"
          style="transform: translate3d(calc(var(--par-x, 0) * -8px), calc(var(--par-y, 0) * -8px), 0)"
          aria-hidden="true"
        >
          <div class="mb-2 caption text-forest/70">ARUSPOS RECEIPT</div>
          <div v-for="n in 4" :key="n" class="mb-1.5 flex justify-between gap-3">
            <span class="h-1.5 w-16 rounded bg-line"></span>
            <span class="h-1.5 w-7 rounded bg-line"></span>
          </div>
          <div class="mt-2.5 border-t border-dashed border-line pt-2">
            <span class="block h-2 w-20 rounded bg-leaf-light"></span>
          </div>
        </div>

        <!-- Phone -->
        <div
          class="relative mx-auto mt-10 w-[min(100%,340px)] rounded-[2.4rem] border border-forest/10 bg-forest p-2.5 shadow-[var(--shadow-device)]"
          style="transform: translate3d(calc(var(--par-x, 0) * 6px), calc(var(--par-y, 0) * 6px), 0)"
          role="img"
          aria-label="ArusPOS point-of-sale app showing an order of RM 84.50 with DuitNow QR, card, e-wallet and cash payment options"
        >
          <div class="rounded-[1.9rem] bg-white px-5 pt-5 pb-6">
            <div class="flex items-center justify-between text-[0.72rem] font-bold text-stone">
              <span>Front Counter · Till 01</span>
              <span class="tabular">2:41 PM</span>
            </div>

            <div class="mt-4 rounded-2xl bg-cream px-5 py-4">
              <div class="text-[0.7rem] font-bold tracking-wide text-stone uppercase">Order #A214</div>
              <div class="mt-1 text-[2rem] leading-none font-bold tracking-tight text-forest tabular">
                RM 84.50
              </div>
            </div>

            <ul class="mt-3">
              <li
                v-for="item in ORDER_ITEMS"
                :key="item.label"
                class="flex items-center justify-between border-b border-dashed border-line py-2.5 text-[0.84rem] font-semibold text-forest"
              >
                <span>{{ item.label }}</span>
                <span class="tabular text-stone">{{ item.price }}</span>
              </li>
            </ul>

            <div class="mt-3.5 flex flex-wrap gap-1.5">
              <span
                v-for="(method, i) in PAY_METHODS"
                :key="method"
                class="rounded-lg px-2.5 py-1.5 text-[0.7rem] font-bold"
                :class="i === 0 ? 'bg-moss text-white' : 'bg-cream text-stone'"
              >
                {{ method }}
              </span>
            </div>

            <div
              class="mt-4 flex items-center justify-center rounded-full bg-forest py-3 text-[0.85rem] font-bold text-cream"
            >
              Charge RM 84.50
            </div>
          </div>
        </div>

        <!-- Floating payment card with NFC pulse -->
        <div
          class="float-slow absolute -top-14 left-0 sm:-top-4 sm:-left-6"
          style="transform: translate3d(calc(var(--par-x, 0) * 16px), calc(var(--par-y, 0) * 16px), 0)"
          aria-hidden="true"
        >
          <div
            class="pulse-ring relative w-36 rounded-2xl bg-gradient-to-br from-forest-2 to-forest p-3 shadow-[var(--shadow-lift)] sm:w-44 sm:p-4"
          >
            <div class="flex items-start justify-between">
              <span class="block h-6 w-8 rounded-md bg-gold/85"></span>
              <AppIcon name="nfc" :size="18" class="text-leaf" />
            </div>
            <div class="mt-5 text-[0.8rem] font-bold tracking-[0.18em] text-cream/85">•••• 4519</div>
            <div class="mt-1 text-[0.62rem] font-semibold tracking-wide text-cream/50 uppercase">
              Tap to pay
            </div>
          </div>
        </div>

        <!-- Transaction notification -->
        <div
          class="float-slower absolute -bottom-5 -left-3 sm:-left-8"
          style="transform: translate3d(calc(var(--par-x, 0) * 12px), calc(var(--par-y, 0) * 12px), 0)"
          aria-hidden="true"
        >
          <div
            class="flex items-center gap-3 rounded-2xl border border-line bg-white/90 py-3 pr-5 pl-3.5 shadow-[var(--shadow-lift)] backdrop-blur"
            style="animation: toast-in 0.8s var(--ease-out-soft) 1.1s backwards"
          >
            <span class="flex h-9 w-9 items-center justify-center rounded-full bg-success-bg text-success">
              <AppIcon name="check" :size="16" />
            </span>
            <span>
              <span class="block text-[0.82rem] font-bold text-forest">Payment received</span>
              <span class="block text-[0.72rem] font-semibold text-stone tabular">
                RM 84.50 · DuitNow QR
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Social proof marquee -->
    <div v-reveal="{ delay: 300 }" class="wrap relative z-10 mt-16 md:mt-20">
      <p class="caption mb-5 text-center text-stone">Trusted by 7,000+ Malaysian merchants</p>
      <div class="marquee-mask overflow-hidden">
        <div class="marquee-track flex w-max items-center gap-14 pr-14">
          <span
            v-for="(logo, i) in [...MERCHANT_LOGOS, ...MERCHANT_LOGOS]"
            :key="`${logo}-${i}`"
            class="text-[1.02rem] font-bold whitespace-nowrap text-forest/35"
            :aria-hidden="i >= MERCHANT_LOGOS.length"
          >
            {{ logo }}
          </span>
        </div>
      </div>
    </div>
  </header>
</template>
