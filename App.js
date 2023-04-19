import React from 'react';
import ReactDOM from 'react-dom';
import Box from './Box';
import Terrain from './TerrainGenerator';

function App() {
  return (
    <div>
      <h1>Box Component</h1>
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <h1>Terrain Component</h1>
      <Terrain />
    </div>
  );
}

// ReactDOM.render(<App />, document.getElementById('root'));
