import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import GMMonogram3D from "./GMMonogram3D";

export default function HeroCanvas() {
  return (
    <div className="w-full h-full absolute inset-0 -z-0 pointer-events-auto">
      <Canvas gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 7.5]} fov={50} />
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1.5}
          color="#E2BD7A"
        />
        <directionalLight
          position={[-10, -10, -5]}
          intensity={0.8}
          color="#1B1E24"
        />
        <pointLight position={[0, 0, 3]} intensity={1} color="#C7954F" />

        <Suspense fallback={null}>
          <GMMonogram3D />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 2.2}
        />
      </Canvas>
    </div>
  );
}
