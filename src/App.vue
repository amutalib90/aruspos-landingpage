<script setup>
import TheNavbar from "./components/sections/TheNavbar.vue";
import HeroSection from "./components/sections/HeroSection.vue";
import IntroSection from "./components/sections/IntroSection.vue";
import FeaturesSection from "./components/sections/FeaturesSection.vue";
import PosShowcase from "./components/sections/PosShowcase.vue";
import CategoriesSection from "./components/sections/CategoriesSection.vue";
import WhySection from "./components/sections/WhySection.vue";
import StatsSection from "./components/sections/StatsSection.vue";
import ExperienceSection from "./components/sections/ExperienceSection.vue";
import TestimonialsSection from "./components/sections/TestimonialsSection.vue";
import PricingSection from "./components/sections/PricingSection.vue";
import FaqSection from "./components/sections/FaqSection.vue";
import FinalCta from "./components/sections/FinalCta.vue";
import TheFooter from "./components/sections/TheFooter.vue";
</script>

<template>
  <a
    href="#main"
    class="sr-only rounded-full bg-forest px-5 py-3 font-bold text-cream focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60]"
  >
    Skip to content
  </a>
  <TheNavbar />
  <main id="main">
    <HeroSection />
    <IntroSection />
    <FeaturesSection />
    <PosShowcase />
    <CategoriesSection />
    <WhySection />
    <StatsSection />
    <ExperienceSection />
    <TestimonialsSection />
    <PricingSection />
    <FaqSection />
    <FinalCta />
  </main>
  <TheFooter />
</template>
