import React from 'react';
import ReactDOM from 'react-dom';
import { Canvas } from '@react-three/fiber';
import Box from './Box';
import GridBackgroundComponent from './GridBg';
import Particle from './Particles';
import './index.css';

function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {/*<GridBackgroundComponent />*/}
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <mesh>
        {/*} <sphereGeometry scale={0.5} />
  <meshStandardMaterial color="hotpink" />*/}
      </mesh>
    </Canvas>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// function Box(props) {
//   // This reference will give us direct access to the mesh
//   const mesh = useRef();
//   // Set up state for the hovered and active state
//   const [hovered, setHover] = useState(false);
//   const [active, setActive] = useState(false);
//   // Subscribe this component to the render-loop, rotate the mesh every frame
//   // useFrame((state, delta) => (mesh.current.rotation.x += delta));
//   // Return view, these are regular three.js elements expressed in JSX
//   return (
//     <mesh
//       {...props}
//       ref={mesh}
//       scale={active ? 3 : 1}
//       onClick={(event) => setActive(!active)}
//       onPointerOver={(event) => setHover(true)}
//       onPointerOut={(event) => setHover(false)}
//     >
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={hovered ? 'yellow' : '#39ff14'} />
//     </mesh>
//   );
// }
