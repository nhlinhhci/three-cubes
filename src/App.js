import './App.css';
import React, { Suspense, useState } from 'react';

import { Canvas } from '@react-three/fiber';
// import { useFrame } from '@react-three/fiber';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

import {
  softShadows,
  // MeshWobbleMaterial,
  OrbitControls,
  // useGLTF,
  // PerspectiveCamera,
} from '@react-three/drei';
// import { Box } from '@react-three/drei';

// import { useSpring, a } from '@react-spring/three';

import Lights from './components/Three/Lights';
import Floor from './components/Three/Floor';
import Mug from './components/Three/Mug';
import Cup from './components/Three/CUP';
import SquareSpinningMesh from './components/Three/SquareSpinningMesh';
import Controls from './components/Three/Controls';
import Grid from './components/Three/Grid';
import DirectionalLight from './components/Three/DirectionalLight';

softShadows();

function App() {
  const [xPosition, setXPosition] = useState(0);
  const [yPosition, setYPosition] = useState(0);
  const [zPosition, setZPosition] = useState(0);

  const [xRotation, setXRotation] = useState(0);
  const [yRotation, setYRotation] = useState(0);
  const [zRotation, setZRotation] = useState(0);
  return (
    <>
      <Canvas shadows camera={{ position: [-5, 2, 10], fov: 60 }}>
        <Suspense fallback={null}>
          <Lights />
          <DirectionalLight
            position={[0, 10, 0]}
            intensity={0.3}
            orbitalSpeed={2}
          />
          <Grid size={16} />
          {/* <group>
            <Floor />
            <SquareSpinningMesh
              rotation={[
                xRotation * Math.PI,
                yRotation * Math.PI,
                zRotation * Math.PI,
              ]}
              position={[xPosition, yPosition, zPosition]}
              args={[3, 2, 1]}
              color='lightblue'
              speed={2}
              handleClick={() =>
                console.log('click on the center lightblue cube')
              }
            />
            <SquareSpinningMesh
              position={[-2, 1, -5]}
              color='pink'
              speed={6}
              handleClick={() => console.log('click on the 1st pink cube')}
            />
            <SquareSpinningMesh
              position={[5, 1, -2]}
              color='pink'
              speed={6}
              handleClick={() => console.log('click on the 2nd pink cube')}
            />
          </group> */}
          <group>
            <Floor />
            <mesh
              rotation={[
                xRotation * Math.PI,
                yRotation * Math.PI,
                zRotation * Math.PI,
              ]}
              position={[xPosition, yPosition, zPosition]}
            >
              <Mug />
            </mesh>
          </group>
          {/* <group>
            <Floor />
            <mesh
              rotation={[
                xRotation * Math.PI,
                yRotation * Math.PI,
                zRotation * Math.PI,
              ]}
              position={[xPosition, yPosition, zPosition]}
            >
              <Cup />
            </mesh>
          </group> */}

          <OrbitControls />
        </Suspense>
      </Canvas>
      <Controls
        controls={{
          xPosition,
          yPosition,
          zPosition,
          xRotation,
          yRotation,
          zRotation,
          setXPosition,
          setYPosition,
          setZPosition,
          setXRotation,
          setYRotation,
          setZRotation,
        }}
      />
    </>
  );
}

export default App;
