const observerOptions = { threshold: 0.15, rootMargin: "0px 0px -40px 0px" };

function connect(el, binding) {
  const delay = (binding.value && binding.value.delay) || 0;
  el.classList.add("reveal");
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
