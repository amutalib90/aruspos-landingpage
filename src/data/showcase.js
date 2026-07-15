/** Menu used by the interactive POS demo. Prices match the hero order. */
export const DEMO_PRODUCTS = [
  { id: "nasi-lemak", name: "Nasi Lemak Set", price: 12.0, stock: 18 },
  { id: "teh-tarik", name: "Teh Tarik", price: 3.5, stock: 42 },
  { id: "ayam-goreng", name: "Ayam Goreng", price: 12.5, stock: 15 },
  { id: "kopi-o", name: "Kopi O", price: 2.8, stock: 36 },
  { id: "roti-bakar", name: "Roti Bakar", price: 4.5, stock: 24 },
  { id: "milo-ais", name: "Milo Ais", price: 4.0, stock: 30 },
];

export const SHOWCASE_STEPS = [
  {
    id: "sell",
    label: "Sell",
    icon: "till",
    title: "Tap items, build the order",
    desc: "The counter screen your staff learns in one shift. Tap to add, everything totals itself.",
  },
  {
    id: "pay",
    label: "Pay",
    icon: "qr",
    title: "Take payment any way they offer it",
    desc: "DuitNow QR, card, e-wallet, or cash — confirmed on screen the second it clears.",
  },
  {
    id: "receipt",
    label: "Receipt",
    icon: "printer",
    title: "Receipt printed and sent digitally",
    desc: "Every sale gets a clean digital receipt — searchable, shareable, never lost in a drawer.",
  },
  {
    id: "stock",
    label: "Stock",
    icon: "box",
    title: "Stock adjusts itself",
    desc: "The moment the order closes, inventory counts down — no end-of-day tally.",
  },
  {
    id: "insights",
    label: "Insights",
    icon: "chart",
    title: "Today's numbers, today",
    desc: "Takings, best sellers, and slow hours update live — act while it still matters.",
  },
];
