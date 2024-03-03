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
  const { nodes, materials } = useGLTF('/models/popcorn.glb')
  return (
    <group {...props} dispose={null} scale={6} position={[-2, -1, 0]} >
      <mesh geometry={nodes.popcorn.geometry} material={materials.color_palette} position={[0, 0.18, 0]} />
    </group>
  )
}

useGLTF.preload('/popcorn.glb')