import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';

function DirectionalLight({
  position,
  intensity,
  orbitalOffset = 0,
  orbitalSpeed = 1,
}) {
  const texture = useTexture('lightbulb.png');
  const ref = useRef();
  // useFrame(() => {
  //   let date = Date.now() * orbitalSpeed * 0.001 + orbitalOffset;
  //   ref.current.position.set(
  //     Math.cos(date) * 2 + position[0],
  //     position[1],
  //     Math.sin(date) * 2 + position[2]
  //   );
  // });

  return (
    <>
      <group position={position} ref={ref}>
        <sprite>
          <spriteMaterial
            attach='material'
            map={texture}
            transparent
            opacity={0.7}
          />
        </sprite>
        <directionalLight
          castShadow
          intensity={intensity}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
      </group>
    </>
  );
}

export default DirectionalLight;
