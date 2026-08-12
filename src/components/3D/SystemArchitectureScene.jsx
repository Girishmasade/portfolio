import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Line } from '@react-three/drei';
import * as THREE from 'three';

// System node definitions representing: Frontend -> API -> AI -> RAG -> Database -> Redis -> Realtime
const SYSTEM_NODES = [
  { id: 'frontend', name: 'FRONTEND', pos: [-3.8, 1.2, 0], color: '#E2BD7A', type: 'block' },
  { id: 'api', name: 'API GATEWAY', pos: [-2.4, -0.6, 0.8], color: '#C7954F', type: 'ring' },
  { id: 'ai', name: 'AI ENGINE', pos: [-0.6, 1.8, -0.4], color: '#F4D8A5', type: 'ico' },
  { id: 'rag', name: 'RAG VECTOR', pos: [1.2, 0.4, 0.6], color: '#E2BD7A', type: 'ico' },
  { id: 'database', name: 'DATABASE', pos: [2.6, -1.4, -0.2], color: '#8E6532', type: 'cylinder' },
  { id: 'redis', name: 'REDIS CACHE', pos: [3.4, 1.0, -0.8], color: '#C7954F', type: 'box' },
  { id: 'realtime', name: 'REAL-TIME', pos: [4.4, -0.2, 0.4], color: '#E2BD7A', type: 'ring' },
];

// Connection lines between system pipeline nodes
const CONNECTIONS = [
  [0, 1], // Frontend -> API
  [1, 2], // API -> AI
  [2, 3], // AI -> RAG
  [3, 4], // RAG -> DB
  [1, 5], // API -> Redis
  [5, 4], // Redis -> DB
  [1, 6], // API -> Realtime
];

export default function SystemArchitectureScene({ mousePos }) {
  const groupRef = useRef();
  const particlesRef = useRef();
  const dataPacketsRef = useRef([]);

  // Generate background system dust particles
  const particleCount = 120;
  const particlePositions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12 - 2;
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    // Subtle pointer parallax: rotation ±3deg X (0.05rad), ±2deg Y (0.035rad)
    if (groupRef.current) {
      const targetRotY = (mousePos.current.x * 0.05);
      const targetRotX = (-mousePos.current.y * 0.035);
      groupRef.current.rotation.y += (targetRotY - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * 0.05;
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.15;
    }

    // Slow ambient rotation for particles
    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Network Connections */}
      {CONNECTIONS.map(([startIdx, endIdx], idx) => {
        const p1 = SYSTEM_NODES[startIdx].pos;
        const p2 = SYSTEM_NODES[endIdx].pos;
        return (
          <group key={`conn-${idx}`}>
            <Line
              points={[p1, p2]}
              color="#C7954F"
              opacity={0.35}
              transparent
              lineWidth={1.2}
            />
          </group>
        );
      })}

      {/* Floating System Architecture Nodes */}
      {SYSTEM_NODES.map((node, i) => (
        <Float key={node.id} speed={1.5 + i * 0.2} rotationIntensity={0.4} floatIntensity={0.6}>
          <group position={node.pos}>
            {/* Node Geometry */}
            {node.type === 'block' && (
              <mesh>
                <boxGeometry args={[0.8, 0.8, 0.8]} />
                <meshStandardMaterial color={node.color} metalness={0.9} roughness={0.2} wireframe />
              </mesh>
            )}
            {node.type === 'ring' && (
              <mesh rotation={[Math.PI / 4, 0, 0]}>
                <torusGeometry args={[0.55, 0.06, 16, 40]} />
                <meshStandardMaterial color={node.color} metalness={0.95} roughness={0.1} />
              </mesh>
            )}
            {node.type === 'ico' && (
              <mesh>
                <icosahedronGeometry args={[0.5, 1]} />
                <meshStandardMaterial color={node.color} emissive={node.color} emissiveIntensity={0.3} wireframe />
              </mesh>
            )}
            {node.type === 'cylinder' && (
              <mesh>
                <cylinderGeometry args={[0.4, 0.4, 0.8, 16]} />
                <meshStandardMaterial color={node.color} metalness={0.8} roughness={0.3} />
              </mesh>
            )}
            {node.type === 'box' && (
              <mesh>
                <boxGeometry args={[0.6, 0.4, 0.6]} />
                <meshStandardMaterial color={node.color} metalness={0.9} roughness={0.15} />
              </mesh>
            )}

            {/* Core Node Glow Light */}
            <pointLight distance={3} intensity={0.5} color={node.color} />
          </group>
        </Float>
      ))}

      {/* Ambient System Dust Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.04}
          color="#E2BD7A"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>
    </group>
  );
}
