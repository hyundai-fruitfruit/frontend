/* eslint-disable react/no-unknown-property */
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
  const { nodes, materials } = useGLTF('/models/tree1.glb')
  return (
    <group {...props} dispose={null} scale={2} position={[3, -2.5, -2]}>
      <mesh geometry={nodes.Cylinder026.geometry} material={materials.JocoseJade_Foliage} />
      <mesh geometry={nodes.Cylinder026_1.geometry} material={materials.stylized_Bark2} />
    </group>
  )
}

useGLTF.preload('/tree1.glb')