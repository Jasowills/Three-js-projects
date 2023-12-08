import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Navbar from './components/Navbar';
import Main from './components/Main';

function StarsBackground() {
  const containerRef = useRef();

  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Create a WebGL renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create stars
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff });

    const starsVertices = [];
    const starsCount = 1000;

    for (let i = 0; i < starsCount; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starsVertices.push(x, y, z);
    }

    starsGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(starsVertices, 3)
    );

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Create an animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the stars to create an animation effect
      stars.rotation.x += 0.0003;
      stars.rotation.y += 0.0003;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleWindowResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div ref={containerRef} className="stars-background" />
  );
}

function App() {
  return (
    <div id="App" className="App">
         <Navbar />
         <Main/>
      <StarsBackground />
  
    </div>
  );
}

export default App;
