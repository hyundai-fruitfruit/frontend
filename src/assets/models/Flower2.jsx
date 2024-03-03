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
  const { nodes, materials } = useGLTF('/models/flower2.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.002, 0]} rotation={[1.734, 0.096, -0.204]} scale={[1, 1, 1.096]}>
        <mesh geometry={nodes.Plane276.geometry} material={materials.Branch_Green} />
        <mesh geometry={nodes.Plane276_1.geometry} material={materials.Flowers5} />
      </group>
    </group>
  )
}

useGLTF.preload('/flower2.glb')