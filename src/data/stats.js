export const STATS = [
  { static: "RM0", label: "Monthly fee to start" },
  { target: 0.45, decimals: 2, suffix: "%", label: "Payment margin, no markup" },
  { target: 7000, suffix: "+", label: "Active merchants" },
  { target: 10, prefix: "~", suffix: " min", label: "Average setup time" },
];

/** Two years of one merchant's history — the receipt in the Experience section. */
export const MOAT_RECEIPT = [
  { label: "Customer profiles", target: 2140 },
  { label: "Loyalty members", target: 860 },
  { label: "SKUs tracked", target: 312 },
  { label: "Digital receipts issued", target: 48900 },
  { label: "Branches connected", target: 3 },
];
