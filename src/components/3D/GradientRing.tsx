import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Torus } from '@react-three/drei';
import { Mesh, ShaderMaterial } from 'three';
import { vertexShader } from './shaders';
import { fragmentShader } from './shaders';

interface GradientRingProps {
  position: [number, number, number];
  rotation: [number, number, number];
  size: number;
  thickness: number;
  speed: number;
  intensity?: number;
}

const GradientRing: React.FC<GradientRingProps> = ({ 
  position, 
  rotation,
  size = 9,
  thickness = 0.1,
  speed = 0.2,
  intensity = 0.6
}) => {
  const meshRef = useRef<Mesh>(null);
  const materialRef = useRef<ShaderMaterial>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Complex floating animation
      const time = clock.getElapsedTime();
      meshRef.current.position.y += Math.sin(time * speed) * 0.002;
      meshRef.current.position.x += Math.cos(time * speed * 0.8) * 0.001;
      
      // Smooth rotation with varying speeds
      meshRef.current.rotation.x += 0.001 * speed * Math.sin(time * 0.5);
      meshRef.current.rotation.y += 0.002 * speed * Math.cos(time * 0.3);
      meshRef.current.rotation.z += 0.001 * speed * Math.sin(time * 0.4);
    }
    
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
      materialRef.current.uniforms.uIntensity.value = intensity;
    }
  });
  
  return (
    <Torus 
      ref={meshRef}
      args={[size, thickness, 64, 128]} 
      position={position}
      rotation={rotation}
    >
      <shaderMaterial 
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent={true}
        uniforms={{
          uTime: { value: 0 },
          uIntensity: { value: intensity },
        }}
      />
    </Torus>
  );
};

export default GradientRing;