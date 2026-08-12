import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function Scroll3DEffect({
  children,
  className = "",
  rotateAmount = 12,
  translateZAmount = 30,
}) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth spring physics for scroll movement
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  // Rotate from +rotateAmount to -rotateAmount as user scrolls past
  const rotateX = useTransform(smoothProgress, [0, 0.5, 1], [rotateAmount, 0, -rotateAmount]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.94, 1, 0.96]);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  return (
    <motion.div
      ref={containerRef}
      style={{
        perspective: 1200,
        transformStyle: "preserve-3d",
      }}
      className={`w-full ${className}`}
    >
      <motion.div
        style={{
          rotateX,
          scale,
          opacity,
          transformStyle: "preserve-3d",
        }}
        transition={{ ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
