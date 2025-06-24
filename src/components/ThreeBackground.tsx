
import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingSphere = ({ position, scale }: { position: [number, number, number], scale: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 1;
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.z += 0.005;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial 
        color="#00aaff"
        transparent
        opacity={0.4}
        emissive="#00aaff"
        emissiveIntensity={0.05}
      />
    </mesh>
  );
};

const Scene = () => {
  const sphereElements = useMemo(() => [
    { position: [2, 0.5, -1] as [number, number, number], scale: 0.4 },
    { position: [-4, -1, -3] as [number, number, number], scale: 0.3 },
    { position: [1, 2.5, -4] as [number, number, number], scale: 0.3 },
  ], []);

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.4} color="#ffffff" />
      <directionalLight position={[5, 5, 5]} intensity={0.2} />
      
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
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: 'transparent' }}
        gl={{ 
          alpha: true, 
          antialias: false,
          powerPreference: "high-performance",
          stencil: false,
          depth: false
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
          gl.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        }}
        frameloop="demand"
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
