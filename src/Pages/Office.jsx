import React from 'react'
import { useGLTF } from '@react-three/drei'
export function Office(props) {
  const { nodes, materials } = useGLTF('/Employee/Model/3dmodel-v1.glb')
  return (
    <group  {...props} dispose={null} >
      <mesh geometry={nodes['tripo_node_3904db42-4e83-4ded-98c1-d39dcc2a233c'].geometry} material={materials['tripo_material_3904db42-4e83-4ded-98c1-d39dcc2a233c']} />
    </group>
  );
}

useGLTF.preload('/Employee/Model/3dmodel-v1.glb')