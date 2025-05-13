import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Line,
  Sphere,
  Stars,
  Html,
  Float,
  
} from "@react-three/drei";
import * as THREE from "three";

function Node({
  position,
  index,
}: {
  position: [number, number, number];
  index: number;
}) {
  return (
    <Float speed={1.5} floatIntensity={1.2} rotationIntensity={0.2}>
      <Sphere position={position} args={[0.1, 16, 16]}>
        <meshStandardMaterial
          color="#DC143C"
          emissive="#DC143C"
          emissiveIntensity={0.5}
          roughness={0.3}
          metalness={0.6}
        />
        <Html center>
          <div style={{ fontSize: "0.6rem", color: "white" }}>Node {index}</div>
        </Html>
      </Sphere>
    </Float>
  );
}

function Network() {
  const groupRef = useRef<THREE.Group>(null);

  const { nodes, connections } = useMemo(() => {
    const nodeCount = 15;
    const nodePositions: [number, number, number][] = [];
    const nodeConnections: Array<{ start: number; end: number }> = [];

    for (let i = 0; i < nodeCount; i++) {
      nodePositions.push([
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 5,
      ]);
    }

    for (let i = 0; i < nodeCount; i++) {
      const connectionCount = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < connectionCount; j++) {
        const target = Math.floor(Math.random() * nodeCount);
        if (target !== i) {
          nodeConnections.push({ start: i, end: target });
        }
      }
    }

    return { nodes: nodePositions, connections: nodeConnections };
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      groupRef.current.rotation.x =
        Math.sin(state.clock.getElapsedTime() * 0.3) * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((position, index) => (
        <Node key={index} position={position} index={index} />
      ))}

      {connections.map((connection, index) => {
        const start = nodes[connection.start];
        const end = nodes[connection.end];
        const color = new THREE.Color("#DC143C").offsetHSL(
          0,
          0,
          Math.sin(index * 0.1) * 0.2
        );
        return (
          <Line
            key={index}
            points={[start, end]}
            color={color.getStyle()}
            lineWidth={1}
            transparent
            opacity={0.35}
          />
        );
      })}
    </group>
  );
}

export default function Scene() {
  return (
    <div className="absolute inset-0 z-20">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={1.2} />
        <Stars radius={10} depth={50} count={5000} factor={4} fade />
        <Network />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.6}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
