
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const StarField = () => {
  const pointsRef = useRef<THREE.Points>(null);
  
  const positions = React.useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += delta * 0.05;
      pointsRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#00ff41"
        size={0.5}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.8}
      />
    </points>
  );
};

const FloatingCube = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 3;
      meshRef.current.position.x = Math.cos(state.clock.elapsedTime * 0.3) * 2;
    }
  });

  return (
    <mesh ref={meshRef} position={[4, 0, -8]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial 
        color="#0066ff" 
        wireframe={true}
        transparent={true}
        opacity={0.8}
      />
    </mesh>
  );
};

const FloatingSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
      meshRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.4) * 4;
      meshRef.current.position.y = Math.cos(state.clock.elapsedTime * 0.6) * 3;
    }
  });

  return (
    <mesh ref={meshRef} position={[-4, 0, -6]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial 
        color="#00ff41" 
        transparent={true} 
        opacity={0.6}
        wireframe={false}
      />
    </mesh>
  );
};

const FloatingTorus = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      meshRef.current.position.z = Math.sin(state.clock.elapsedTime * 0.3) * 2;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 3, -10]}>
      <torusGeometry args={[2, 0.8, 16, 100]} />
      <meshStandardMaterial 
        color="#ffffff" 
        transparent={true} 
        opacity={0.4}
        wireframe={true}
      />
    </mesh>
  );
};

const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.4} color="#ffffff" />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#00ff41" />
        <pointLight position={[-10, -10, -5]} intensity={0.8} color="#0066ff" />
        <directionalLight position={[5, 5, 5]} intensity={0.6} color="#ffffff" />
        
        <StarField />
        <FloatingCube />
        <FloatingSphere />
        <FloatingTorus />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
