import React, { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { animate } from "animejs";

// Sample live code snippets for running terminal
const CODE_SNIPPETS = [
  {
    lang: "TypeScript",
    code: [
      'import { AIModel, NeuralEngine } from "@gm/core";',
      'const system = new NeuralEngine({ fps: 240, mode: "realtime" });',
      'await system.trainModel({ dataset: "fullstack-v4", epochs: 100 });',
      'console.log("⚡ AI Architecture initialized successfully!");',
    ],
  },
  {
    lang: "FullStack Architecture",
    code: [
      "// High Performance SaaS Pipeline",
      "export async function deployCluster() {",
      '  const cluster = await K8s.createNode({ memory: "64GB", region: "us-east" });',
      '  return cluster.status === "ACTIVE" ? 200 : 500;',
      "}",
    ],
  },
  {
    lang: "Realtime Engine",
    code: [
      'const socket = new WebSocket("wss://api.girishmasade.dev/live");',
      "socket.onmessage = (evt) => {",
      "  const data = JSON.parse(evt.data);",
      '  updateState({ throughput: data.tps, latency: "1.2ms" });',
      "};",
    ],
  },
];

const TECH_CHIPS = [
  { name: "React", color: "#61DAFB", icon: "⚛️" },
  { name: "TypeScript", color: "#3178C6", icon: "🟦" },
  { name: "Python AI", color: "#3776AB", icon: "🐍" },
  { name: "Node.js", color: "#339933", icon: "🟢" },
  { name: "Three.js", color: "#E2BD7A", icon: "📐" },
  { name: "Docker", color: "#2496ED", icon: "🐳" },
  { name: "GraphQL", color: "#E535AB", icon: "🌐" },
  { name: "Anime.js", color: "#FF4B4B", icon: "✨" },
];

export default function FlyingLaptop3D({
  codeRunning = true,
  onStuntComplete = () => {},
  triggerStuntSignal = 0,
  triggerBurstSignal = 0,
}) {
  const laptopGroupRef = useRef();
  const laptopBodyRef = useRef();
  const screenLidRef = useRef();
  const keyboardEmissiveRef = useRef();
  const chipsGroupRef = useRef();

  // Terminal state
  const [activeSnippetIdx, setActiveSnippetIdx] = useState(0);
  const [typedLines, setTypedLines] = useState([]);
  const [currentCharIdx, setCurrentCharIdx] = useState(0);
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const [sysStatus, setSysStatus] = useState("ONLINE");

  // Mouse Parallax smooth targeting
  const targetRotX = useRef(0);
  const targetRotY = useRef(0);

  // Flight animation driven by anime.js on demand
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 0.6;
      const y = (e.clientY / window.innerHeight - 0.5) * 0.4;
      targetRotY.current = x;
      targetRotX.current = y;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Anime.js Stunt: 360 Spin & Flight Swoop
  useEffect(() => {
    if (triggerStuntSignal === 0 || !laptopGroupRef.current) return;

    // Anime.js timeline rotation stunt
    animate(laptopGroupRef.current.rotation, {
      z: [0, Math.PI * 2],
      y: [
        laptopGroupRef.current.rotation.y,
        laptopGroupRef.current.rotation.y + Math.PI * 2,
      ],
      duration: 1600,
      easing: "easeInOutCubic",
      complete: () => onStuntComplete(),
    });

    animate(laptopGroupRef.current.position, {
      z: [0, 1.8, 0],
      y: [0, 0.6, 0],
      duration: 1600,
      easing: "easeOutBack",
    });

    // Keyboard light burst
    if (keyboardEmissiveRef.current) {
      animate(keyboardEmissiveRef.current, {
        intensity: [0.2, 2.5, 0.4],
        duration: 1600,
        easing: "easeInOutQuad",
      });
    }
  }, [triggerStuntSignal]);

  // Anime.js Stunt: Code Chips Burst
  useEffect(() => {
    if (triggerBurstSignal === 0 || !chipsGroupRef.current) return;

    const chips = chipsGroupRef.current.children;
    if (chips.length > 0) {
      animate(chips, {
        scale: [1, 1.6, 1],
        positionX: (el, i) =>
          Math.cos((i / chips.length) * Math.PI * 2) * (3.5 + Math.random()),
        positionY: (el, i) =>
          Math.sin((i / chips.length) * Math.PI * 2) * (2.2 + Math.random()),
        positionZ: (el, i) => (Math.random() - 0.5) * 3,
        rotationZ: (el) => (Math.random() - 0.5) * Math.PI,
        duration: 1400,
        delay: (el, i) => i * 60,
        easing: "easeOutElastic(1, .5)",
      });
    }
  }, [triggerBurstSignal]);

  // Running Code Typing Simulation
  useEffect(() => {
    if (!codeRunning) return;

    const snippet = CODE_SNIPPETS[activeSnippetIdx].code;

    const interval = setInterval(() => {
      setTypedLines((prev) => {
        const lineToType = snippet[currentLineIdx] || "";

        if (currentCharIdx < lineToType.length) {
          const updated = [...prev];
          if (!updated[currentLineIdx]) updated[currentLineIdx] = "";
          updated[currentLineIdx] = lineToType.slice(0, currentCharIdx + 1);
          setCurrentCharIdx((c) => c + 1);
          return updated;
        } else {
          // Line complete, move to next line
          if (currentLineIdx < snippet.length - 1) {
            setCurrentLineIdx((l) => l + 1);
            setCurrentCharIdx(0);
          } else {
            // Snippet complete, pause then switch
            setTimeout(() => {
              setTypedLines([]);
              setCurrentLineIdx(0);
              setCurrentCharIdx(0);
              setActiveSnippetIdx((s) => (s + 1) % CODE_SNIPPETS.length);
              setSysStatus((st) => (st === "ONLINE" ? "RUNNING AI" : "ONLINE"));
            }, 2500);
          }
          return prev;
        }
      });
    }, 28);

    return () => clearInterval(interval);
  }, [codeRunning, activeSnippetIdx, currentLineIdx, currentCharIdx]);

  // Three.js render loop for natural micro-movements
  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (laptopGroupRef.current) {
      // Gentle floating inclination
      laptopGroupRef.current.position.y = Math.sin(t * 1.5) * 0.15;
      laptopGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        laptopGroupRef.current.rotation.x,
        targetRotX.current * 0.4 + Math.sin(t * 0.8) * 0.05,
        0.05,
      );
      laptopGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        laptopGroupRef.current.rotation.y,
        targetRotY.current * 0.6 + Math.cos(t * 0.5) * 0.08,
        0.05,
      );
    }

    // Floating animation for orbit tech chips
    if (chipsGroupRef.current && triggerBurstSignal === 0) {
      chipsGroupRef.current.children.forEach((child, i) => {
        const angle = (i / TECH_CHIPS.length) * Math.PI * 2 + t * 0.3;
        const radius = 3.2;
        child.position.x = THREE.MathUtils.lerp(
          child.position.x,
          Math.cos(angle) * radius,
          0.04,
        );
        child.position.y = THREE.MathUtils.lerp(
          child.position.y,
          Math.sin(angle * 2) * 0.4 + Math.sin(t + i) * 0.2,
          0.04,
        );
        child.position.z = THREE.MathUtils.lerp(
          child.position.z,
          Math.sin(angle) * (radius * 0.6),
          0.04,
        );
      });
    }
  });

  return (
    <group ref={laptopGroupRef} position={[0, 0.2, 0]} scale={0.95}>
      {/* LAPTOP MAIN BODY & CHASSIS */}
      <group ref={laptopBodyRef}>
        {/* Base Chassis */}
        <mesh position={[0, -0.05, 0]}>
          <boxGeometry args={[3.4, 0.12, 2.3]} />
          <meshStandardMaterial
            color="#14171D"
            metalness={0.9}
            roughness={0.2}
            envMapIntensity={1.5}
          />
        </mesh>

        {/* Laptop Bevel Trim */}
        <mesh position={[0, -0.11, 0]}>
          <boxGeometry args={[3.44, 0.02, 2.34]} />
          <meshStandardMaterial
            color="#C7954F"
            metalness={0.95}
            roughness={0.1}
          />
        </mesh>

        {/* Touchpad */}
        <mesh position={[0, 0.015, 0.65]}>
          <boxGeometry args={[1.0, 0.005, 0.7]} />
          <meshStandardMaterial
            color="#1E222A"
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>

        {/* Keyboard Well */}
        <mesh position={[0, 0.015, -0.3]}>
          <boxGeometry args={[3.0, 0.006, 1.2]} />
          <meshStandardMaterial
            color="#0B0D10"
            metalness={0.8}
            roughness={0.4}
          />
        </mesh>

        {/* Key Caps Grid Overlay */}
        <group position={[0, 0.025, -0.3]}>
          {[...Array(5)].map((_, r) => (
            <group key={r} position={[0, 0, (r - 2) * 0.22]}>
              {[...Array(14)].map((_, c) => (
                <mesh key={c} position={[(c - 6.5) * 0.2, 0, 0]}>
                  <boxGeometry args={[0.17, 0.02, 0.18]} />
                  <meshStandardMaterial
                    color="#1B1E26"
                    metalness={0.6}
                    roughness={0.3}
                  />
                </mesh>
              ))}
            </group>
          ))}
        </group>

        {/* Keyboard Emissive Underglow */}
        <pointLight
          ref={keyboardEmissiveRef}
          position={[0, 0.2, -0.3]}
          color="#E2BD7A"
          intensity={0.4}
          distance={2.5}
        />

        {/* Front LED Light Strip */}
        <mesh position={[0, -0.05, 1.16]}>
          <boxGeometry args={[1.2, 0.02, 0.02]} />
          <meshBasicMaterial color="#E2BD7A" />
        </mesh>
      </group>

      {/* LAPTOP LID / SCREEN ASSEMBLY */}
      <group
        ref={screenLidRef}
        position={[0, 0.01, -1.14]}
        rotation={[-Math.PI * 0.58, 0, 0]}
      >
        {/* Lid Rear Casing */}
        <mesh position={[0, 1.1, -0.04]}>
          <boxGeometry args={[3.4, 2.2, 0.08]} />
          <meshStandardMaterial
            color="#14171D"
            metalness={0.9}
            roughness={0.15}
          />
        </mesh>

        {/* Illuminated GM Logo on Lid Back */}
        <mesh position={[0, 1.1, -0.09]}>
          <circleGeometry args={[0.22, 32]} />
          <meshBasicMaterial color="#E2BD7A" />
        </mesh>

        {/* Screen Bezel (Front) */}
        <mesh position={[0, 1.1, 0.01]}>
          <boxGeometry args={[3.38, 2.18, 0.02]} />
          <meshStandardMaterial
            color="#0A0C0F"
            metalness={0.95}
            roughness={0.1}
          />
        </mesh>

        {/* Screen Glass Display Frame */}
        <mesh position={[0, 1.1, 0.025]}>
          <planeGeometry args={[3.15, 1.95]} />
          <meshBasicMaterial color="#05070A" />
        </mesh>

        {/* 3D HTML INTERACTIVE SCREEN CONTENT WITH ANIME.JS RUNNING CODE */}
        <Html
          transform
          wrapperClass="laptop-screen-html"
          position={[0, 1.1, 0.032]}
          distanceFactor={1.2}
          occlude="blended"
        >
          <div className="w-[440px] h-[272px] bg-obsidian/95 border border-gold-antique/30 rounded-lg p-3 text-ivory font-mono text-[11px] select-none shadow-2xl flex flex-col justify-between overflow-hidden backdrop-blur-md">
            {/* Screen Header Bar */}
            <div className="flex items-center justify-between pb-2 border-b border-steelgray/40">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                <span className="ml-2 text-[10px] text-silver font-semibold tracking-wider uppercase">
                  Terminal — {CODE_SNIPPETS[activeSnippetIdx].lang}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-gold-antique/20 text-gold-champagne text-[9px] font-bold animate-pulse">
                  ● {sysStatus}
                </span>
                <span className="text-[9px] text-silver">240 FPS</span>
              </div>
            </div>

            {/* Live Typing Code Stream Box */}
            <div className="flex-1 my-2 overflow-hidden flex flex-col justify-start space-y-1">
              <div className="text-[10px] text-gold-antique/70 font-semibold mb-1 flex items-center gap-1">
                <span>❯ execute --active-model --live</span>
                <span className="w-1.5 h-3 bg-gold-champagne animate-pulse inline-block" />
              </div>

              {typedLines.map((line, idx) => (
                <div
                  key={idx}
                  className="leading-tight text-ivory flex items-start"
                >
                  <span className="text-steelgray select-none mr-2 w-4 text-right">
                    {idx + 1}
                  </span>
                  <span
                    className={
                      idx === currentLineIdx
                        ? "text-gold-champagne font-bold"
                        : "text-silver"
                    }
                  >
                    {line}
                  </span>
                  {idx === currentLineIdx && (
                    <span className="w-1.5 h-3 bg-gold-champagne animate-pulse ml-0.5 inline-block" />
                  )}
                </div>
              ))}
            </div>

            {/* Matrix Binary Stream & Metrics Footer */}
            <div className="pt-2 border-t border-steelgray/30 flex items-center justify-between text-[9px] text-silver">
              <div className="flex items-center gap-3">
                <span className="text-gold-champagne font-bold">CPU: 12%</span>
                <span>MEM: 1.4GB / 64GB</span>
                <span className="text-green-400">LATENCY: 1.2ms</span>
              </div>
              <div className="flex items-center gap-1 text-gold-antique font-semibold">
                <span>DEVCODER 4.0</span>
              </div>
            </div>
          </div>
        </Html>
      </group>

      {/* FLOATING 3D TECH CHIPS ORBITING THE LAPTOP */}
      <group ref={chipsGroupRef}>
        {TECH_CHIPS.map((chip, idx) => {
          const angle = (idx / TECH_CHIPS.length) * Math.PI * 2;
          const radius = 3.2;
          return (
            <group
              key={chip.name}
              position={[Math.cos(angle) * radius, 0, Math.sin(angle) * radius]}
            >
              <Html transform distanceFactor={1.5} center>
                <div className="px-3 py-1.5 rounded-full bg-graphite/90 border border-gold-antique/40 text-ivory text-xs font-mono font-semibold flex items-center gap-2 shadow-lg backdrop-blur-md hover:scale-110 transition-transform cursor-pointer">
                  <span>{chip.icon}</span>
                  <span style={{ color: chip.color }}>{chip.name}</span>
                </div>
              </Html>
            </group>
          );
        })}
      </group>

      {/* AMBIENT LIGHT & GLOW ORB AROUND LAPTOP */}
      <pointLight
        position={[0, 1.5, 0]}
        intensity={1.2}
        color="#E2BD7A"
        distance={6}
      />
      <pointLight
        position={[0, -1, 1]}
        intensity={0.6}
        color="#3178C6"
        distance={5}
      />
    </group>
  );
}
