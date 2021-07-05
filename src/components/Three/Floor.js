import React from 'react';

function Floor() {
  return (
    <>
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
        <planeBufferGeometry attach='geometry' args={[200, 200]} />
        <shadowMaterial attach='material' opacity={0.3} />
        {/* <meshStandardMaterial attach='material' color='white' /> */}
      </mesh>
    </>
  );
}

export default Floor;
