import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import SystemArchitectureScene from "./SystemArchitectureScene";

export default function HeroCanvas() {
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mousePos.current = { x, y };
    };

    window.addEventListener("pointermove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMouseMove);
  }, []);

  return (
    <div className="w-full h-full absolute inset-0 -z-0 pointer-events-none">
      <Canvas gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}>
        <PerspectiveCamera makeDefault position={[0, 0, 7.5]} fov={45} />
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1.8}
          color="#E2BD7A"
        />
        <directionalLight
          position={[-10, -10, -5]}
          intensity={0.6}
          color="#1B1E24"
        />
        <pointLight position={[0, 0, 4]} intensity={0.8} color="#C7954F" />

        <Suspense fallback={null}>
          <SystemArchitectureScene mousePos={mousePos} />
        </Suspense>
      </Canvas>
    </div>
  );
}

