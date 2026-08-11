import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function GMMonogram3D() {
  const outerGroup = useRef();
  const ringRef = useRef();
  const innerNodeRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Gentle floating rotation
    if (outerGroup.current) {
      outerGroup.current.rotation.y = t * 0.25;
      outerGroup.current.rotation.x = Math.sin(t * 0.3) * 0.1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = -t * 0.4;
      ringRef.current.rotation.x = t * 0.15;
    }
    if (innerNodeRef.current) {
      innerNodeRef.current.rotation.y = t * 0.6;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
      <group ref={outerGroup} scale={1.2}>
        {/* Outer Metallic Monogram Ring */}
        <mesh ref={ringRef}>
          <torusGeometry args={[2.2, 0.08, 32, 100]} />
          <meshStandardMaterial
            color="#C7954F"
            metalness={0.9}
            roughness={0.15}
            envMapIntensity={2}
          />
        </mesh>

        {/* Abstract 'G' Architectural Graphite Structure */}
        <group position={[-0.6, 0, 0]}>
          <mesh position={[0, 0, 0]}>
            <torusGeometry args={[1.2, 0.14, 16, 60, Math.PI * 1.5]} />
            <meshStandardMaterial
              color="#1B1E24"
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
          <mesh position={[0.6, -0.6, 0]} rotation={[0, 0, 0]}>
            <boxGeometry args={[0.8, 0.2, 0.2]} />
            <meshStandardMaterial color="#252930" metalness={0.9} roughness={0.1} />
          </mesh>
        </group>

        {/* Abstract 'M' Architectural Metallic Gold Structure */}
        <group position={[0.7, 0, 0]}>
          <mesh position={[-0.4, 0, 0]} rotation={[0, 0, -Math.PI * 0.15]}>
            <cylinderGeometry args={[0.08, 0.08, 2.2, 32]} />
            <meshStandardMaterial color="#E2BD7A" metalness={0.95} roughness={0.1} />
          </mesh>
          <mesh position={[0, 0.3, 0]} rotation={[0, 0, Math.PI * 0.25]}>
            <cylinderGeometry args={[0.07, 0.07, 1.2, 32]} />
            <meshStandardMaterial color="#C7954F" metalness={0.9} roughness={0.15} />
          </mesh>
          <mesh position={[0.4, 0, 0]} rotation={[0, 0, Math.PI * 0.15]}>
            <cylinderGeometry args={[0.08, 0.08, 2.2, 32]} />
            <meshStandardMaterial color="#8E6532" metalness={0.85} roughness={0.2} />
          </mesh>
        </group>

        {/* Central Intelligence Orb */}
        <mesh ref={innerNodeRef} position={[0, 0, 0]}>
          <icosahedronGeometry args={[0.4, 2]} />
          <meshStandardMaterial
            color="#E2BD7A"
            emissive="#C7954F"
            emissiveIntensity={0.6}
            wireframe
          />
        </mesh>

        {/* Data Stream Orbiting Particles */}
        {[...Array(12)].map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const radius = 2.8;
          return (
            <mesh
              key={i}
              position={[
                Math.cos(angle) * radius,
                Math.sin(angle * 2) * 0.5,
                Math.sin(angle) * radius,
              ]}
            >
              <sphereGeometry args={[0.04, 16, 16]} />
              <meshBasicMaterial color="#E2BD7A" />
            </mesh>
          );
        })}
      </group>
    </Float>
  );
}
