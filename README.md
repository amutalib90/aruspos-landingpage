# ArusPay POS — Landing Page

A landing page for ArusPay POS, built with Vue 3 (`<script setup>`), Vite, and Tailwind CSS v4.

## Stack

- [Vue 3](https://vuejs.org/) — Composition API with `<script setup>`
- [Vite](https://vite.dev/) — dev server & build tool
- [Tailwind CSS v4](https://tailwindcss.com/) — via the official `@tailwindcss/vite` plugin

## Project structure

```
src/
  components/
    TheNavbar.vue       Sticky top navigation
    HeroSection.vue      Hero with register/receipt mock
    ProblemSection.vue   "The problem" 4-card grid
    StackSection.vue     Free feature stack grid
    JourneySection.vue   4-phase growth timeline
    MoatSection.vue      Data moat + receipt tape visual
    HonestSection.vue    Pricing / revenue transparency section
    FinalCta.vue         Closing call-to-action
    TheFooter.vue        Footer
  App.vue                 Composes all sections
  style.css               Tailwind import + design tokens (@theme) + small utilities
```

Design tokens (colors, fonts) are defined once in `src/style.css` via Tailwind's `@theme` directive, so utility classes like `bg-ink`, `text-sage`, `text-amber-deep`, `border-line`, `font-mono`, etc. are available throughout components.

## Getting started

```bash
npm install
npm run dev       # start dev server
npm run build      # production build
npm run preview    # preview production build
```
