
import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingTorus = ({ position, rotationSpeed, scale }: { position: [number, number, number], rotationSpeed: number, scale: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed;
      meshRef.current.rotation.y += rotationSpeed * 0.7;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <torusGeometry args={[1, 0.3, 16, 32]} />
      <meshStandardMaterial 
        color="#00ff88"
        transparent
        opacity={0.8}
        emissive="#00ff88"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

const FloatingSphere = ({ position, scale }: { position: [number, number, number], scale: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 1;
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.z += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial 
        color="#00aaff"
        transparent
        opacity={0.7}
        emissive="#00aaff"
        emissiveIntensity={0.1}
      />
    </mesh>
  );
};

const Scene = () => {
  const torusElements = useMemo(() => [
    { position: [-3, 1, -2] as [number, number, number], rotationSpeed: 0.02, scale: 1 },
    { position: [3, -1, -3] as [number, number, number], rotationSpeed: -0.025, scale: 1.2 },
    { position: [-2, -2, -4] as [number, number, number], rotationSpeed: 0.015, scale: 0.8 },
    { position: [4, 2, -2] as [number, number, number], rotationSpeed: -0.02, scale: 1.1 },
    { position: [0, 3, -5] as [number, number, number], rotationSpeed: 0.018, scale: 0.9 },
  ], []);

  const sphereElements = useMemo(() => [
    { position: [2, 0.5, -1] as [number, number, number], scale: 0.6 },
    { position: [-4, -1, -3] as [number, number, number], scale: 0.7 },
    { position: [1, 2.5, -4] as [number, number, number], scale: 0.5 },
    { position: [-1, -3, -2] as [number, number, number], scale: 0.8 },
  ], []);

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00ff88" />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      
      {torusElements.map((props, index) => (
        <FloatingTorus key={`torus-${index}`} {...props} />
      ))}
      
      {sphereElements.map((props, index) => (
        <FloatingSphere key={`sphere-${index}`} {...props} />
      ))}
    </>
  );
};

const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{ 
          alpha: true, 
          antialias: true,
          powerPreference: "high-performance"
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
