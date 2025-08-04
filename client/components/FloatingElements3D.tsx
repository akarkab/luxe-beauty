import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import ThreeErrorBoundary from './ThreeErrorBoundary';

function FloatingOrb({ position, color, scale = 1, speed = 1 }: { 
  position: [number, number, number], 
  color: string, 
  scale?: number,
  speed?: number 
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed) * 0.2;
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * speed * 0.8) * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.5;
    }
  });

  return (
    <Float
      speed={speed}
      rotationIntensity={0.2}
      floatIntensity={0.5}
      floatingRange={[0, 0.5]}
    >
      <mesh ref={meshRef} position={position} scale={scale}>
        <Sphere args={[1, 32, 32]}>
          <MeshDistortMaterial
            color={color}
            transparent
            opacity={0.6}
            distort={0.3}
            speed={2}
            roughness={0.1}
            metalness={0.8}
          />
        </Sphere>
      </mesh>
    </Float>
  );
}

function CosmeticParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(state.clock.elapsedTime + positions[i]) * 0.001;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={200}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#f8b4c0"
        transparent
        opacity={0.8}
        sizeAttenuation={true}
      />
    </points>
  );
}

export default function FloatingElements3D() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <ThreeErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 10], fov: 75 }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#ffd4e0" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#f0e6d2" />

          {/* Floating cosmetic-inspired orbs */}
          <FloatingOrb
            position={[-6, 2, 0]}
            color="#f8b4c0"
            scale={0.8}
            speed={1.2}
          />
          <FloatingOrb
            position={[5, -1, -2]}
            color="#f0e6d2"
            scale={1.2}
            speed={0.8}
          />
          <FloatingOrb
            position={[2, 3, -1]}
            color="#ffd4e0"
            scale={0.6}
            speed={1.5}
          />
          <FloatingOrb
            position={[-3, -2, 1]}
            color="#e8d5c0"
            scale={0.9}
            speed={1.0}
          />

          {/* Particle system */}
          <CosmeticParticles />
        </Canvas>
      </ThreeErrorBoundary>
    </div>
  );
}
