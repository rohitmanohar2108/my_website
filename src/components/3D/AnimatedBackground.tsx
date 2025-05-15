import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, AdaptiveDpr } from '@react-three/drei';
import GradientRing from './GradientRing';

const AnimatedBackground: React.FC = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      style={{ background: '#050508' }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={2.0} color="#ffd700" />
      <pointLight position={[-10, -10, -10]} intensity={1.0} color="#ffd700" />
      <spotLight
        position={[0, 5, 0]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        color="#fff6e6"
      />
      
      {/* Main center coin */}
      <GradientRing
        position={[0, 0, -2]}
        rotation={[Math.PI / 2, 0, Math.PI / 4]}
        size={3.5}
        thickness={0.35}
        speed={0.12}
        intensity={0.9}
      />
      
      {/* Medium coins */}
      <GradientRing
        position={[-2.5, -1.5, 0]}
        rotation={[Math.PI / 3, Math.PI / 6, 0]}
        size={2.2}
        thickness={0.25}
        speed={0.18}
        intensity={0.8}
      />
      <GradientRing 
        position={[2.5, 1.5, -1]}
        rotation={[Math.PI / 5, Math.PI / 4, Math.PI / 6]}
        size={2.5}
        thickness={0.3}
        speed={0.15}
        intensity={0.85}
      />
      
      {/* Small background coins */}
      <GradientRing 
        position={[1, -2, -3]}
        rotation={[Math.PI / 4, Math.PI / 3, Math.PI / 5]}
        size={1.8}
        thickness={0.2}
        speed={0.22}
        intensity={0.7}
      />
      <GradientRing 
        position={[-1.5, 2, -2.5]}
        rotation={[Math.PI / 6, Math.PI / 5, Math.PI / 3]}
        size={1.6}
        thickness={0.18}
        speed={0.25}
        intensity={0.75}
      />

      <AdaptiveDpr pixelated />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 2.5}
      />
    </Canvas>
  );
};

export default AnimatedBackground;