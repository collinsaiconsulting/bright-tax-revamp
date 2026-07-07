import { useEffect, useRef } from "react";

/**
 * Cursor + scroll driven parallax, adapted from the ParallaxHero prototype.
 * Returns refs to attach to layers; each layer's `data-depth` (0-1) controls
 * how strongly it drifts relative to the pointer and scroll progress.
 */
export function useParallax(sectionRef: React.RefObject<HTMLElement | null>) {
  const pointer = useRef({ x: 0, y: 0 });
  const reduce = useRef(false);

  useEffect(() => {
    reduce.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce.current) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const section = sectionRef.current;
      if (!section) return;
      const layers = section.querySelectorAll<HTMLElement>("[data-depth]");
      const px = pointer.current.x;
      const py = pointer.current.y;

      layers.forEach((layer) => {
        const depth = parseFloat(layer.dataset.depth || "0.2");
        const tx = px * depth * 40;
        const ty = py * depth * 40;
        const rot = px * depth * 4;
        layer.style.transform = `translate3d(${tx}px, ${ty}px, 0) rotate(${rot}deg)`;
      });
    };

    const onPointer = (e: PointerEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      pointer.current = {
        x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
        y: ((e.clientY - rect.top) / rect.height) * 2 - 1,
      };
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener("pointermove", onPointer, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointer);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [sectionRef]);
}
