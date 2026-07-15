import { ref } from "vue";
import { useReducedMotion } from "./useReducedMotion";

/**
 * Magnetic hover: the element leans a few pixels toward the cursor
 * and springs back on leave. Skipped for touch and reduced motion.
 */
export function useMagnetic(strength = 0.28, radius = 8) {
  const el = ref(null);
  const reduced = useReducedMotion();

  function onMove(e) {
    const node = el.value;
    if (!node || reduced.value || e.pointerType === "touch") return;
    const rect = node.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    const x = Math.max(-radius, Math.min(radius, dx * strength));
    const y = Math.max(-radius, Math.min(radius, dy * strength));
    node.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
  }

  function onLeave() {
    const node = el.value;
    if (!node) return;
    node.style.transform = "";
  }

  return { el, onMove, onLeave };
}
