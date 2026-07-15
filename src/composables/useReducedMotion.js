import { ref, onMounted, onUnmounted } from "vue";

const query = "(prefers-reduced-motion: reduce)";

/** Reactive prefers-reduced-motion flag, shared by every animated component. */
export function useReducedMotion() {
  const reduced = ref(typeof window !== "undefined" && window.matchMedia(query).matches);
  let mql;

  function onChange(e) {
    reduced.value = e.matches;
  }

  onMounted(() => {
    mql = window.matchMedia(query);
    mql.addEventListener("change", onChange);
  });

  onUnmounted(() => mql?.removeEventListener("change", onChange));

  return reduced;
}
