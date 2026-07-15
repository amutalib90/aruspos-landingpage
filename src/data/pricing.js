/**
 * Pricing mirrors the original business model exactly:
 * free core, opt-in premium modules, invitation-only financial services.
 * No invented price points.
 */
export const PLANS = [
  {
    name: "Counter",
    price: "RM0",
    period: "forever",
    tagline: "Everything to run the counter — before you pay us a single ringgit.",
    features: [
      "POS on phone, tablet, or terminal",
      "DuitNow QR, cards & e-wallets",
      "Payment links & invoices",
      "Digital receipts",
      "Inventory & customer records",
      "Live analytics dashboard",
      "Offline mode & cloud sync",
    ],
    footnote: "Payments processed at 0.45% margin — no markup, no monthly fee.",
    cta: { label: "Get Started Free", href: "#cta", variant: "primary" },
    popular: false,
  },
  {
    name: "Growth",
    price: "Opt-in",
    period: "per module",
    tagline: "Switch on what your shop actually needs, when it needs it.",
    features: [
      "Everything in Counter",
      "Loyalty, memberships & vouchers",
      "Multi-outlet & warehouse stock",
      "Table & slot booking",
      "WhatsApp marketing",
      "Staff roles & attendance",
      "Priority human support",
    ],
    footnote: "Each module is optional — add or remove any month.",
    cta: { label: "Talk to Sales", href: "#cta", variant: "primary" },
    popular: true,
  },
  {
    name: "Capital",
    price: "Invited",
    period: "when you qualify",
    tagline: "Financial services sized to your real sales history.",
    features: [
      "Everything in Growth",
      "Merchant wallet",
      "Working-capital financing",
      "Supplier payments",
      "Dedicated account manager",
    ],
    footnote: "Only if you qualify and choose it — never pushed.",
    cta: { label: "Learn More", href: "#faq", variant: "ghost" },
    popular: false,
  },
];
