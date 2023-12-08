import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const EarthCanvas = () => {
  const earthRef = useRef();

  return (
    <Canvas
      style={{ background: 'transparent' }}
      camera={{ position: [0, 0, 20] }}
    >
      <ambientLight intensity={0.5} />
      <spotLight intensity={0.6} position={[70, 0, 70]} angle={0.2} penumbra={1} />
      <mesh ref={earthRef}>
        <sphereGeometry args={[10, 74, 74]} />
        <meshBasicMaterial map={new THREE.TextureLoader().load('/earth.jpg')} />
      </mesh>
      <OrbitControls enableZoom={false} enablePan={false} />
      <RotationAnimation object={earthRef.current} />
    </Canvas>
  );
};

const RotationAnimation = ({ object }) => {
  useFrame(() => {
    if (object) {
      object.rotation.y += 99.006; // Adjust the rotation speed as needed
      object.rotation.x += 99.005; // Adjust the rotation speed as needed
    }
  });

  return null;
};

export default EarthCanvas;
