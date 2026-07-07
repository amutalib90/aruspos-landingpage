<script setup></script>

<template>
  <section class="py-27.5 text-center">
    <div class="wrap">
      <h2 v-reveal class="text-[clamp(2rem,4.5vw,3rem)] max-w-175 mx-auto mb-5.5 leading-[1.14]">
        Your till, your stock, your customers — finally in one place.
      </h2>
      <p v-reveal="{ delay: 100 }" class="text-text-dim max-w-120 mx-auto mb-8">
        Set up takes about as long as making a cup of teh tarik. No hardware required to start.
      </p>
      <div v-reveal="{ delay: 200 }" class="flex gap-3.5 justify-center flex-wrap">
        <a
          href="#"
          class="bg-moss text-cream px-7 py-3.5 rounded-full font-semibold text-[0.95rem] transition-all hover:bg-moss-dark hover:-translate-y-0.5"
        >
          Get Started Free →
        </a>
        <a href="#" class="border border-line text-ink px-6.75 py-3.25 rounded-full font-semibold text-[0.95rem]">
          Book a 15-min Demo
        </a>
      </div>
    </div>
  </section>
</template>
