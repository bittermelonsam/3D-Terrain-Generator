import React from 'react';
import { usePlane } from '@react-three/cannon';

function Terrain({ seed }) {
  const meshRef = usePlane(() => ({
    type: 'Static',
    position: [0, 0, 0],
    rotation: [-Math.PI / 2, 0, 0],
  }))[0];

  return (
    <mesh ref={meshRef} receiveShadow>
      <planeBufferGeometry args={[1000, 1000, 128, 128]} />
      <meshStandardMaterial color="#c7c7c7" />
    </mesh>
  );
}

export default Terrain;
