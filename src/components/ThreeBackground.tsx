
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
      <torusGeometry args={[1, 0.3, 8, 16]} />
      <meshStandardMaterial 
        color="#ffffff"
        transparent
        opacity={0.9}
        wireframe
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
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial 
        color="#ffffff"
        transparent
        opacity={0.8}
        wireframe
      />
    </mesh>
  );
};

const Scene = () => {
  const torusElements = useMemo(() => [
    { position: [-8, 2, -5] as [number, number, number], rotationSpeed: 0.01, scale: 1.2 },
    { position: [8, -2, -8] as [number, number, number], rotationSpeed: -0.015, scale: 1.4 },
    { position: [-6, -4, -10] as [number, number, number], rotationSpeed: 0.008, scale: 1 },
    { position: [10, 4, -6] as [number, number, number], rotationSpeed: -0.012, scale: 1.3 },
    { position: [0, 6, -12] as [number, number, number], rotationSpeed: 0.009, scale: 1.1 },
    { position: [-10, 0, -7] as [number, number, number], rotationSpeed: -0.01, scale: 1.5 },
    { position: [6, -6, -9] as [number, number, number], rotationSpeed: 0.011, scale: 0.9 },
    { position: [-4, 8, -11] as [number, number, number], rotationSpeed: -0.008, scale: 1.2 },
    { position: [12, -8, -10] as [number, number, number], rotationSpeed: 0.013, scale: 1.1 },
    { position: [-12, 6, -8] as [number, number, number], rotationSpeed: -0.009, scale: 1.3 },
  ], []);

  const sphereElements = useMemo(() => [
    { position: [12, 1, -8] as [number, number, number], scale: 0.7 },
    { position: [-12, -3, -6] as [number, number, number], scale: 0.6 },
    { position: [4, 7, -10] as [number, number, number], scale: 0.8 },
    { position: [-8, 5, -9] as [number, number, number], scale: 0.5 },
    { position: [14, -5, -7] as [number, number, number], scale: 0.7 },
    { position: [-14, 8, -12] as [number, number, number], scale: 0.6 },
    { position: [8, -10, -9] as [number, number, number], scale: 0.8 },
    { position: [-6, -8, -11] as [number, number, number], scale: 0.5 },
  ], []);

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.6} />
      <pointLight position={[-10, -10, -10]} intensity={0.4} />
      
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
        camera={{ position: [0, 0, 5], fov: 75 }}
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
