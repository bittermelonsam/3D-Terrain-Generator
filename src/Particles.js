import React, { useRef } from 'react';
import { Particles } from '@react-three/drei';

function ParticleSystem() {
  const particleRef = useRef();

  return (
    <Particles
      ref={particleRef}
      position={[0, 0, 0]}
      count={1000}
      factor={1}
      // Add more props here to customize the particle system
    />
  );
}

export default function Particle() {
  return <ParticleSystem />;
}
