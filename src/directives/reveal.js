const observerOptions = { threshold: 0.15, rootMargin: "0px 0px -40px 0px" };

/**
 * v-reveal — scroll-triggered fade/blur reveal.
 * Usage: v-reveal, v-reveal="{ delay: 120 }", v-reveal="{ delay: 120, scale: true }"
 */
function connect(el, binding) {
  const { delay = 0, scale = false } = binding.value || {};
  el.classList.add("reveal");
  if (scale) el.classList.add("reveal-scale");
  if (delay) el.style.setProperty("--reveal-delay", `${delay}ms`);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        el.classList.add("is-visible");
        observer.unobserve(el);
      }
    });
  }, observerOptions);

  observer.observe(el);
  el.__revealObserver__ = observer;
}

export const vReveal = {
  mounted(el, binding) {
    connect(el, binding);
  },
  unmounted(el) {
    el.__revealObserver__?.disconnect();
  },
};
