import React, { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const positionRef = useRef({ x: 0, y: 0, tx: 0, ty: 0, scale: 1 });
  const rafRef = useRef(null);

  useEffect(() => {
    const supportsCursor = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!supportsCursor || prefersReducedMotion) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.body.classList.add("custom-cursor-enabled");

    const updateCursor = () => {
      const { tx, ty, scale } = positionRef.current;
      const currentX =
        positionRef.current.x + (tx - positionRef.current.x) * 0.16;
      const currentY =
        positionRef.current.y + (ty - positionRef.current.y) * 0.16;
      positionRef.current.x = currentX;
      positionRef.current.y = currentY;

      dot.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      ring.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(${scale})`;
      rafRef.current = requestAnimationFrame(updateCursor);
    };

    const handleMove = (event) => {
      positionRef.current.tx = event.clientX;
      positionRef.current.ty = event.clientY;
    };

    const setActive = (active) => {
      positionRef.current.scale = active ? 1.65 : 1;
      ring.classList.toggle("cursor-hover-active", active);
    };

    const interactiveElements = Array.from(
      document.querySelectorAll("button, a, [data-cursor-interactive]"),
    );
    const listeners = interactiveElements.map((element) => {
      const enter = () => setActive(true);
      const leave = () => setActive(false);
      element.addEventListener("pointerenter", enter);
      element.addEventListener("pointerleave", leave);
      return { element, enter, leave };
    });

    window.addEventListener("pointermove", handleMove);
    rafRef.current = requestAnimationFrame(updateCursor);

    return () => {
      document.body.classList.remove("custom-cursor-enabled");
      window.removeEventListener("pointermove", handleMove);
      listeners.forEach(({ element, enter, leave }) => {
        element.removeEventListener("pointerenter", enter);
        element.removeEventListener("pointerleave", leave);
      });
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={ringRef} className="custom-cursor-ring" />
    </>
  );
}
