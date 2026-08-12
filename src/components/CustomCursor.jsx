import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);
  const [labelText, setLabelText] = useState("");
  const positionRef = useRef({ x: 0, y: 0, tx: 0, ty: 0, scale: 1 });
  const rafRef = useRef(null);

  useEffect(() => {
    const supportsCursor = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!supportsCursor || prefersReducedMotion) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.body.classList.add("custom-cursor-enabled");

    const updateCursor = () => {
      const { tx, ty, scale } = positionRef.current;
      const currentX = positionRef.current.x + (tx - positionRef.current.x) * 0.18;
      const currentY = positionRef.current.y + (ty - positionRef.current.y) * 0.18;
      positionRef.current.x = currentX;
      positionRef.current.y = currentY;

      dot.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      ring.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(${scale})`;
      rafRef.current = requestAnimationFrame(updateCursor);
    };

    const handleMove = (event) => {
      positionRef.current.tx = event.clientX;
      positionRef.current.ty = event.clientY;

      const target = event.target;
      if (!target) return;

      const interactive = target.closest("button, a, [data-cursor-interactive], [data-cursor-label]");
      if (interactive) {
        const label = interactive.getAttribute("data-cursor-label");
        if (label) {
          setLabelText(label);
          ring.classList.add("cursor-has-label");
          positionRef.current.scale = 1.3;
        } else {
          setLabelText("");
          ring.classList.remove("cursor-has-label");
          positionRef.current.scale = 1.5;
        }
        ring.classList.add("cursor-hover-active");
      } else {
        setLabelText("");
        ring.classList.remove("cursor-has-label", "cursor-hover-active");
        positionRef.current.scale = 1;
      }
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    rafRef.current = requestAnimationFrame(updateCursor);

    return () => {
      document.body.classList.remove("custom-cursor-enabled");
      window.removeEventListener("pointermove", handleMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={ringRef} className="custom-cursor-ring">
        <span ref={labelRef} className="custom-cursor-label">
          {labelText}
        </span>
      </div>
    </>
  );
}

