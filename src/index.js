// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Canvas } from 'react-three-fiber';
// import * as THREE from 'three';
// import './index.css';

// function App() {
//   return (
//     <Canvas>
//       <ambientLight />
//       <pointLight position={[10, 10, 10]} />
//       <mesh>
//         <boxGeometry args={[1, 1, 1]} />
//         <meshStandardMaterial color={'purple'} />
//       </mesh>
//     </Canvas>
//   );
// }

import { createRoot } from 'react-dom/client';
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.z += delta));
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 3 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}

createRoot(document.getElementById('root')).render(
  <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Box position={[-1.2, 0, 0]} />
    <Box position={[1.2, 0, 0]} />
  </Canvas>
);

ReactDOM.render(<App />, document.getElementById('root'));
