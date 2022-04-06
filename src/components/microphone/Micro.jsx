import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Micro({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/micro/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}> 
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={nodes.defaultMaterial.material} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={nodes.defaultMaterial_1.material} />
          <mesh geometry={nodes.defaultMaterial_2.geometry} material={nodes.defaultMaterial_2.material} />
          <mesh geometry={nodes.defaultMaterial_3.geometry} material={nodes.defaultMaterial_3.material} />
          <mesh geometry={nodes.defaultMaterial_4.geometry} material={nodes.defaultMaterial_4.material} />
          <mesh geometry={nodes.defaultMaterial_5.geometry} material={nodes.defaultMaterial_5.material} />
          <mesh geometry={nodes.defaultMaterial_6.geometry} material={nodes.defaultMaterial_6.material} />
          <mesh geometry={nodes.defaultMaterial_7.geometry} material={nodes.defaultMaterial_7.material} />
          <mesh geometry={nodes.defaultMaterial_8.geometry} material={nodes.defaultMaterial_8.material} />
          <mesh geometry={nodes.defaultMaterial_9.geometry} material={nodes.defaultMaterial_9.material} />
          <mesh geometry={nodes.defaultMaterial_10.geometry} material={nodes.defaultMaterial_10.material} />
          <mesh geometry={nodes.defaultMaterial_11.geometry} material={nodes.defaultMaterial_11.material} />
          <mesh geometry={nodes.defaultMaterial_12.geometry} material={nodes.defaultMaterial_12.material} />
          <mesh geometry={nodes.defaultMaterial_13.geometry} material={nodes.defaultMaterial_13.material} />
          <mesh geometry={nodes.defaultMaterial_14.geometry} material={nodes.defaultMaterial_14.material} />
          <mesh geometry={nodes.defaultMaterial_15.geometry} material={nodes.defaultMaterial_15.material} />
          <mesh geometry={nodes.defaultMaterial_16.geometry} material={nodes.defaultMaterial_16.material} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/micro/scene.gltf')