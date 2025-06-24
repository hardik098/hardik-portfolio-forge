
import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StarField = () => {
  const pointsRef = React.useRef<THREE.Points>(null);
  
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
  const meshRef = React.useRef<THREE.Mesh>(null);
  
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
  const meshRef = React.useRef<THREE.Mesh>(null);
  
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
  const meshRef = React.useRef<THREE.Mesh>(null);
  
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

const ThreeJsShowcase = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-950 relative">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 p-6">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-white hover:text-green-400 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Portfolio
        </button>
        <h1 className="text-4xl font-bold text-center text-white mt-4">
          Three.js Components Showcase
        </h1>
      </div>

      {/* Component Labels */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-20 left-10 text-green-400 font-mono text-sm bg-black/50 p-2 rounded">
          StarField<br/>
          <span className="text-xs text-gray-300">2000 animated points</span>
        </div>
        <div className="absolute top-1/3 right-20 text-blue-400 font-mono text-sm bg-black/50 p-2 rounded">
          FloatingCube<br/>
          <span className="text-xs text-gray-300">Wireframe cube</span>
        </div>
        <div className="absolute bottom-1/3 left-20 text-green-400 font-mono text-sm bg-black/50 p-2 rounded">
          FloatingSphere<br/>
          <span className="text-xs text-gray-300">Solid sphere</span>
        </div>
        <div className="absolute top-1/4 left-1/2 text-white font-mono text-sm bg-black/50 p-2 rounded">
          FloatingTorus<br/>
          <span className="text-xs text-gray-300">Wireframe donut</span>
        </div>
      </div>

      {/* Three.js Canvas */}
      <div className="absolute inset-0">
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

      {/* Instructions */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="text-center text-white bg-black/50 p-4 rounded-lg">
          <p className="text-sm">All Three.js components are now visible in the foreground</p>
          <p className="text-xs text-gray-300 mt-1">
            Green stars • Blue wireframe cube • Green sphere • White torus
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThreeJsShowcase;
