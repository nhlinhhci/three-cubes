import React from 'react';
import { useTexture } from '@react-three/drei';

function Lights() {
  const texture = useTexture('lightbulb.png');
  return (
    <>
      <group position={[-10, 0, -20]}>
        <sprite>
          <spriteMaterial
            attach='material'
            map={texture}
            transparent
            opacity={0.7}
            color='red'
          />
          <pointLight intensity={0.5} />
        </sprite>
      </group>

      <ambientLight intensity={0.5} />
      <group position={[0, -10, 0]}>
        <sprite>
          <spriteMaterial
            attach='material'
            map={texture}
            transparent
            opacity={0.7}
            color='red'
          />
          <pointLight intensity={0.3} />
        </sprite>
      </group>
    </>
  );
}

export default Lights;
