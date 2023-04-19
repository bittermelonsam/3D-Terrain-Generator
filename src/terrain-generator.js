import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Terrain from './Terrain';

function terrain() {
  const [seed, setSeed] = useState(Math.random());

  const generateTerrain = () => {
    setSeed(Math.random());
  };

  return (
    <div>
      <button onClick={generateTerrain}>Generate New Terrain</button>
      <Canvas>
        <Terrain seed={seed} />
      </Canvas>
    </div>
  );
}

export default terrain;
