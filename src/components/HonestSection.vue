<script setup>
const revenue = [
  { label: "Payment processing", value: "0.45% margin" },
  { label: "Core POS, inventory, CRM, analytics", value: "Free, always" },
  { label: "Loyalty, multi-branch, booking, WhatsApp marketing", value: "Premium, opt-in" },
  { label: "Financing & merchant wallet", value: "Only if you qualify and choose it" },
];

const notThis = [
  { label: 'A "free trial" with a countdown', value: "—" },
  { label: "Hardware you're forced to buy from us", value: "—" },
  { label: "A contract that locks you in for years", value: "—" },
];
</script>

<template>
  <section id="pricing" class="py-22.5 border-t border-b border-line">
    <div class="wrap grid grid-cols-1 md:grid-cols-2 gap-15">
      <div v-reveal>
        <h3 class="mono text-base mb-3.5 text-moss">How we actually make money</h3>
        <ul>
          <li
            v-for="row in revenue"
            :key="row.label"
            class="flex justify-between py-2.5 border-b border-line text-[0.9rem]"
          >
            <span>{{ row.label }}</span>
            <span class="tabular text-text-dim text-[0.85rem]">{{ row.value }}</span>
          </li>
        </ul>
      </div>
      <div v-reveal="{ delay: 120 }">
        <h3 class="mono text-base mb-3.5 text-moss">What this isn't</h3>
        <ul>
          <li
            v-for="row in notThis"
            :key="row.label"
            class="flex justify-between py-2.5 border-b border-line text-[0.9rem]"
          >
            <span>{{ row.label }}</span>
            <span class="tabular text-text-dim text-[0.85rem]">{{ row.value }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
