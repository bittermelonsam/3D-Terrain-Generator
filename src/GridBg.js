import React, { useRef } from 'react';
import * as THREE from 'three';

const GridShader = {
  uniforms: {
    uTime: { value: 0 },
  },
  vertexShader: `
    uniform float uTime;
    varying vec2 vUv;

    void main() {
      vUv = uv;
      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectedPosition = projectionMatrix * viewPosition;
      gl_Position = projectedPosition;

      gl_Position.x += sin(gl_Position.z * 2.0 + uTime * 0.1) * 0.1;
      gl_Position.y += cos(gl_Position.z * 2.0 + uTime * 0.1) * 0.1;
    }
  `,
  fragmentShader: `
    varying vec2 vUv;

    void main() {
      gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
    }
  `,
};

function GridBackground() {
  const shaderRef = useRef();

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[100, 100]} />
      <shaderMaterial ref={shaderRef} args={[GridShader]} />
    </mesh>
  );
}

export default function GridBackgroundComponent() {
  return <GridBackground />;
}
