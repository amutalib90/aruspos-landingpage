import { ref, onMounted, onUnmounted } from "vue";

/** Fires the callback once when the element enters the viewport. */
export function useInViewOnce(callback, options = { threshold: 0.35 }) {
  const el = ref(null);
  let observer;

  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback();
          observer.unobserve(entry.target);
        }
      });
    }, options);
    if (el.value) observer.observe(el.value);
  });

  onUnmounted(() => observer?.disconnect());

  return el;
}
