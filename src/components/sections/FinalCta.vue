<script setup>
import BaseButton from "../ui/BaseButton.vue";
</script>

<template>
  <section id="cta" class="bg-white py-20 md:py-28">
    <div class="wrap">
      <div
        v-reveal="{ scale: true }"
        class="relative overflow-hidden rounded-[2.5rem] bg-forest px-7 py-16 text-center md:px-16 md:py-24"
      >
        <!-- Quiet ambient light, gold reserved for the moment that matters -->
        <div
          class="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style="
            background:
              radial-gradient(ellipse 50% 55% at 50% 0%, rgba(221, 162, 79, 0.14), transparent 65%),
              radial-gradient(ellipse 40% 45% at 12% 100%, rgba(163, 203, 139, 0.1), transparent 70%);
          "
        ></div>

        <div class="relative z-10">
          <h2 class="heading-2 mx-auto max-w-2xl text-cream">
            Your till, your stock, your customers —
            <em class="accent-serif text-leaf">finally in one place</em>.
          </h2>
          <p class="mx-auto mt-5 max-w-md text-[1rem] leading-relaxed text-cream/65">
            Set up takes about as long as making a cup of teh tarik. No hardware required to
            start.
          </p>
          <div class="mt-9 flex flex-wrap justify-center gap-3.5">
            <BaseButton href="#pricing" variant="gold" size="lg" arrow>Get Started Free</BaseButton>
            <BaseButton href="mailto:hello@aruspay.com" variant="ghostDark" size="lg">
              Book a 15-min Demo
            </BaseButton>
          </div>
          <p class="caption mt-7 text-cream/45">No setup fees · Live in 2 weeks · Cancel anytime</p>
        </div>
      </div>
    </div>
  </section>
</template>
