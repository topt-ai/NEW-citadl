"use client";

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const CITIES = [
  { name: 'Tulsa', lat: 36.1540, lon: -95.9928, label: 'Plumber · Tulsa · #1' },
  { name: 'Boise', lat: 43.6150, lon: -116.2023, label: 'Dentist · Boise · #1' },
  { name: 'Greenville', lat: 34.8526, lon: -82.3940, label: 'Roofer · Greenville · #2' },
  { name: 'Spokane', lat: 47.6588, lon: -117.4260, label: 'HVAC · Spokane · #1' },
  { name: 'Tampa', lat: 27.9506, lon: -82.4572, label: 'Real Estate · Tampa · #1' },
  { name: 'Richmond', lat: 37.5407, lon: -77.4360, label: 'Lawyer · Richmond · #3 → #1' }
];

export default function Globe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [labelOpacity, setLabelOpacity] = useState(0);
  const [labelPos, setLabelPos] = useState({ x: 0, y: 0, visible: false });

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    let width = container.clientWidth || 500;
    let height = container.clientHeight || 500;

    // 1. Scene setup
    const scene = new THREE.Scene();

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    const cameraDistance = 9;
    camera.position.set(0, 0, cameraDistance);

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Cap pixel ratio for performance
    container.appendChild(renderer.domElement);

    // 4. Globe Group construction
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const R = 3.0; // Globe Radius

    // A. Inner solid dark sphere (to hide lines on the back)
    const innerSphereGeom = new THREE.SphereGeometry(R - 0.05, 32, 32);
    const innerSphereMat = new THREE.MeshPhongMaterial({
      color: 0x0C0F0D, // matches page background
      transparent: true,
      opacity: 0.88,   // slightly translucent for wireframe depth
      shininess: 5,
    });
    const innerSphere = new THREE.Mesh(innerSphereGeom, innerSphereMat);
    globeGroup.add(innerSphere);

    // B. Custom Latitude & Longitude grid lines
    const gridMaterial = new THREE.LineBasicMaterial({
      color: 0xC8F04B, // signature lime
      transparent: true,
      opacity: 0.15,   // low opacity wireframe
    });

    // Latitude lines (horizontal circles)
    for (let latDeg = -80; latDeg <= 80; latDeg += 20) {
      const latRad = (latDeg * Math.PI) / 180;
      const r = R * Math.cos(latRad);
      const y = R * Math.sin(latRad);

      const points = [];
      const segments = 64;
      for (let j = 0; j <= segments; j++) {
        const theta = (j / segments) * Math.PI * 2;
        points.push(new THREE.Vector3(r * Math.cos(theta), y, r * Math.sin(theta)));
      }
      const ringGeom = new THREE.BufferGeometry().setFromPoints(points);
      const ring = new THREE.Line(ringGeom, gridMaterial);
      globeGroup.add(ring);
    }

    // Longitude lines (vertical circles)
    for (let lonDeg = 0; lonDeg < 180; lonDeg += 20) {
      const lonRad = (lonDeg * Math.PI) / 180;

      const points = [];
      const segments = 64;
      for (let j = 0; j <= segments; j++) {
        const theta = (j / segments) * Math.PI * 2;
        const x = R * Math.cos(theta);
        const y = R * Math.sin(theta);
        points.push(new THREE.Vector3(
          x * Math.cos(lonRad),
          y,
          x * Math.sin(lonRad)
        ));
      }
      const ringGeom = new THREE.BufferGeometry().setFromPoints(points);
      const ring = new THREE.Line(ringGeom, gridMaterial);
      globeGroup.add(ring);
    }

    // C. City markers (glowing lime dots)
    const markerGeom = new THREE.SphereGeometry(0.06, 16, 16);
    const markerMat = new THREE.MeshBasicMaterial({
      color: 0xC8F04B, // glowing lime green
    });

    const markerMeshes: THREE.Mesh[] = [];

    CITIES.forEach((city) => {
      // Convert lat/long to 3D Cartesian coordinates
      const latRad = (city.lat * Math.PI) / 180;
      const lonRad = (city.lon * Math.PI) / 180;

      const x = R * Math.cos(latRad) * Math.sin(lonRad);
      const y = R * Math.sin(latRad);
      const z = R * Math.cos(latRad) * Math.cos(lonRad);

      const marker = new THREE.Mesh(markerGeom, markerMat);
      marker.position.set(x, y, z);
      globeGroup.add(marker);
      markerMeshes.push(marker);
    });

    // 5. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0x0C0F0D, 0.4);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xC8F04B, 1.2, 50);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const fillLight = new THREE.PointLight(0x131714, 0.8, 50);
    fillLight.position.set(-5, -5, -5);
    scene.add(fillLight);

    // 6. Animation and Performance Optimizations
    const clock = new THREE.Clock();
    let isTabVisible = true;
    let isOnScreen = true;

    // Visibility Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        isOnScreen = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    const handleVisibilityChange = () => {
      isTabVisible = document.visibilityState === 'visible';
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Projection calculation ref
    let currentActiveIdx = 0;
    const tempV = new THREE.Vector3();

    const updateLabelPosition = () => {
      const activeMarker = markerMeshes[currentActiveIdx];
      if (!activeMarker) return;

      activeMarker.getWorldPosition(tempV);

      // Z coordinate check in camera coordinates
      // Since the camera is at (0, 0, Z) looking at (0,0,0),
      // points with positive Z coordinates are facing the camera (on the front half).
      const isFront = tempV.z > -0.3; // buffer to avoid clipping right at edge

      if (isFront) {
        tempV.project(camera);
        // Map normal coordinate (-1 to 1) to client pixels
        const x = (tempV.x * 0.5 + 0.5) * width;
        const y = (tempV.y * -0.5 + 0.5) * height;
        setLabelPos({ x, y, visible: true });
      } else {
        setLabelPos((prev) => ({ ...prev, visible: false }));
      }
    };

    // Render loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isTabVisible || !isOnScreen) return;

      // Slow rotation (approx 50s per rotation)
      globeGroup.rotation.y += 0.0025;
      globeGroup.rotation.x = 0.15; // slightly tilt to expose North hemisphere

      // Pulsing city markers
      const elapsed = clock.getElapsedTime();
      markerMeshes.forEach((marker, index) => {
        const offset = index * 1.5;
        const pulse = 1.0 + Math.sin(elapsed * 6 + offset) * 0.25;
        marker.scale.set(pulse, pulse, pulse);
      });

      renderer.render(scene, camera);
      updateLabelPosition();
    };

    // Start rendering
    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || 500;
      height = container.clientHeight || 500;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Stagger Interval for switching active markers
    const cycleInterval = setInterval(() => {
      setLabelOpacity(0); // Fade out
      setTimeout(() => {
        currentActiveIdx = (currentActiveIdx + 1) % CITIES.length;
        setActiveIndex(currentActiveIdx);
        setLabelOpacity(1); // Fade in
      }, 500); // match transition timing
    }, 4500);

    // Initial fade in
    setTimeout(() => setLabelOpacity(1), 100);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(cycleInterval);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      scene.clear();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[350px] flex items-center justify-center">
      {/* HTML absolute overlay projecting from active 3D coordinates */}
      {labelPos.visible && (
        <div
          className="absolute pointer-events-none transition-opacity duration-500 ease-in-out bg-citadl-alt border border-citadl-border text-citadl-lime font-mono text-[10px] md:text-[11px] px-3 py-1.5 rounded-[2px] shadow-2xl select-none whitespace-nowrap z-20 flex items-center gap-2"
          style={{
            left: `${labelPos.x}px`,
            top: `${labelPos.y - 15}px`,
            transform: 'translate(-50%, -100%)',
            opacity: labelOpacity,
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-citadl-lime animate-pulse inline-block" />
          {CITIES[activeIndex].label}
        </div>
      )}
    </div>
  );
}
