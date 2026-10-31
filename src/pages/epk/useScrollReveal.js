import { useEffect, useLayoutEffect, useRef } from "react";

export const prefersReducedMotion = () =>
  Boolean(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches);

// Distance from the top of the document, ignoring the reveal transforms.
function documentTop(element) {
  let top = 0;
  for (let node = element; node; node = node.offsetParent) top += node.offsetTop;
  return top;
}

// Scroll reveals, reversible, with transitions switched off while scrolling
// fast. Elements opt in with data-reveal="up" | "zoom" (and optionally
// data-stagger="<ms>" to delay siblings); the hook toggles data-in on them.
// Data attributes rather than classes so React re-renders don't wipe them.
export default function useScrollReveal(rootRef, refreshKey) {
  const requestUpdateRef = useRef(() => {});

  // Layout effect so off-screen items are hidden before the first paint.
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return undefined;

    root.dataset.anim = "";
    const siblingCounts = new Map();
    const items = Array.from(root.querySelectorAll("[data-reveal]"), (element) => {
      const index = siblingCounts.get(element.parentNode) || 0;
      siblingCounts.set(element.parentNode, index + 1);
      const stagger = Number(element.dataset.stagger || 0);
      element.style.setProperty("--d", `${Math.min(index, 6) * stagger}ms`);
      if (element.dataset.reveal === "zoom") {
        element.style.setProperty("--r", `${index % 2 ? 2.2 : -2.2}deg`);
      }
      return { element, visible: false };
    });

    let ticking = false;
    let lastY = window.scrollY;
    let lastTime = performance.now();
    let fastTimer;

    const markFast = (duration) => {
      root.dataset.fast = "";
      clearTimeout(fastTimer);
      fastTimer = setTimeout(() => delete root.dataset.fast, duration);
    };

    const update = () => {
      const y = window.scrollY;
      const viewport = window.innerHeight || 800;
      const maxY = Math.max(0, document.documentElement.scrollHeight - viewport);
      const now = performance.now();
      const velocity = (Math.abs(y - lastY) / Math.max(1, now - lastTime)) * 1000;
      if (velocity > 1600) markFast(220);
      lastY = y;
      lastTime = now;

      items.forEach((item) => {
        const top = documentTop(item.element);
        // Items near the very bottom must still reveal when the page can't scroll further.
        const threshold = Math.max(viewport * 0.9, top - maxY + 8);
        const offset = top - y;
        if (!item.visible && offset < threshold) {
          item.visible = true;
          item.element.dataset.in = "";
        } else if (item.visible && offset > threshold + viewport * 0.08) {
          item.visible = false;
          delete item.element.dataset.in;
        }
      });
      ticking = false;
    };

    const requestUpdate = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    requestUpdateRef.current = requestUpdate;

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    root.addEventListener("toggle", requestUpdate, true);

    // Whatever is already on screen appears without animating.
    markFast(60);
    update();

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      root.removeEventListener("toggle", requestUpdate, true);
      clearTimeout(fastTimer);
      requestUpdateRef.current = () => {};
      delete root.dataset.anim;
      delete root.dataset.fast;
    };
  }, [rootRef]);

  // Text length changes with the language, which moves everything below it.
  useEffect(() => {
    requestUpdateRef.current();
  }, [refreshKey]);
}
