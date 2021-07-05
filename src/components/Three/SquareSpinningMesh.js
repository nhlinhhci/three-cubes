import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, a } from '@react-spring/three';
import { MeshWobbleMaterial } from '@react-three/drei';

const SquareSpinningMesh = ({
  position,
  rotation,
  color,
  args,
  speed,
  handleClick,
}) => {
  const mesh = useRef(null);
  // useFrame(() => {
  //   mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  // });

  const [expand, setExpand] = useState(false);
  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });
  return (
    <a.mesh
      onPointerOver={() => setExpand(!expand)}
      onPointerOut={() => setExpand(!expand)}
      onClick={handleClick}
      scale={props.scale}
      castShadow
      position={position}
      rotation={rotation}
      ref={mesh}
    >
      <boxBufferGeometry attach='geometry' args={args} />
      {/* <MeshWobbleMaterial
        attach='material'
        color={color}
        speed={speed}
        factor={0.6}
      /> */}
      <meshStandardMaterial attach='material' color={color} />
    </a.mesh>
  );
};

export default SquareSpinningMesh;
