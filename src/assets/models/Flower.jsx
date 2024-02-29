/**
 * @author 황수영
 * @email sooyoung.h8@gmail.com
 * @create date 2024-02-28 04:35:36
 * @modify date 2024-02-28 04:35:36
 * @desc 3d 모델
 */
import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/flower.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[2.903, 0.632, 0.543]} scale={2} position={[3, -2.5, -2]}>
        <mesh geometry={nodes.Plane170.geometry} material={materials.Flowers2} />
        <mesh geometry={nodes.Plane170_1.geometry} material={materials.Branch_Green} />
      </group>
    </group>
  )
}

useGLTF.preload('/flower.glb')
